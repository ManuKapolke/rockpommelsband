export type Concert = {
  date: string;
  city: string;
  location: string;
  event?: string;
  tickets?: string;
  soldOut?: boolean;
};

export const concerts: Array<Concert> = [
  {
    date: "03.10.2025",
    city: "HAGEN",
    location: "Werkhof Kulturzentrum",
    tickets: "https://werkhof-kulturzentrum.de/rockpommels-band",
    soldOut: true,
  },
  {
    date: "04.10.2025",
    city: "HAGEN",
    location: "Werkhof Kulturzentrum",
    tickets: "https://werkhof-kulturzentrum.de/rockpommels-band-2",
    soldOut: true,
  },
  {
    date: "21.03.2026",
    city: "PADERBORN",
    event: "Paderborner Rockfestival",
    location: "PaderHalle",
    tickets:
      "https://www.paderhalle.de/veranstaltungen/paderborner-rockfestival-26719/",
    // "https://www.eventim.de/eventseries/paderborner-rockfestival-2026-3939589",
  },
  {
    date: "11.04.2026",
    city: "REICHENBACH",
    event: "Artrock Festival",
    location: "Neuberinhaus",
    tickets: "https://prog-rock.club",
  },
];
