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

/** Concerts on today or a later calendar day, earliest first. */
export const getUpcomingConcerts = (all: Array<Concert>): Array<Concert> => {
  const today = startOfToday();
  return all
    .filter((c) => parseConcertDate(c.date) >= today)
    .sort(
      (a, b) =>
        Number(parseConcertDate(a.date)) - Number(parseConcertDate(b.date)),
    );
};
