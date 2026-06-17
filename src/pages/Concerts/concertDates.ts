import type { Concert } from "./concertData";

export const parseConcertDate = (dateStr: string): Date => {
  const [day, month, year] = dateStr.split(".").map(Number);
  return new Date(year, month - 1, day);
};

const startOfToday = (): Date => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
};

/** True when the concert calendar day is strictly before today (local). */
export const isConcertInPast = (concert: Concert): boolean => {
  return parseConcertDate(concert.date) < startOfToday();
};

export const getConcertYear = (concert: Concert): number => {
  const [, , year] = concert.date.split(".").map(Number);
  return year;
};

const sortConcertsByDate = (a: Concert, b: Concert): number =>
  Number(parseConcertDate(a.date)) - Number(parseConcertDate(b.date));

/** Concerts on today or a later calendar day, earliest first. */
export const getUpcomingConcerts = (all: Array<Concert>): Array<Concert> => {
  const today = startOfToday();
  return all
    .filter((c) => parseConcertDate(c.date) >= today)
    .sort(sortConcertsByDate);
};

/** Concerts before today, earliest first. */
export const getPastConcerts = (all: Array<Concert>): Array<Concert> => {
  const today = startOfToday();
  return all
    .filter((c) => parseConcertDate(c.date) < today)
    .sort(sortConcertsByDate);
};

export type ConcertsByYear = Array<{ year: number; concerts: Array<Concert> }>;

export const groupConcertsByYear = (
  concertList: Array<Concert>,
  yearOrder: "asc" | "desc",
): ConcertsByYear => {
  const byYear = new Map<number, Array<Concert>>();

  for (const concert of concertList) {
    const year = getConcertYear(concert);
    const list = byYear.get(year) ?? [];
    list.push(concert);
    byYear.set(year, list);
  }

  for (const list of byYear.values()) {
    list.sort(sortConcertsByDate);
  }

  const years = [...byYear.keys()].sort((a, b) =>
    yearOrder === "asc" ? a - b : b - a,
  );

  return years.map((year) => ({
    year,
    concerts: byYear.get(year)!,
  }));
};

export const getUpcomingConcertsByYear = (
  all: Array<Concert>,
): ConcertsByYear => groupConcertsByYear(getUpcomingConcerts(all), "asc");

export const getPastConcertsByYear = (all: Array<Concert>): ConcertsByYear =>
  groupConcertsByYear(getPastConcerts(all), "desc");
