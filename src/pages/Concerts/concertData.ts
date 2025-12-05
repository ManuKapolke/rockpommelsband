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
    date: "06.03.2026",
    city: "MENDEN",
    location: "Wilhelmshöhe",
    tickets: "https://www.phono-forum.de/produkt/rockpommels-band-menden/",
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
  {
    date: "16.05.2026",
    city: "MESCHEDE",
    location: "Stadthalle",
    tickets:
      "https://www.eventim.de/event/rockpommels-band-live-2026-stadthalle-meschede-20857565/",
  },
  {
    date: "23.05.2026",
    city: "ZOETERMEER (NL)",
    location: "Poppodium Boerderij",
    tickets: "https://poppodiumboerderij.nl/en/programma/rockpommelsband/",
  },
  {
    date: "01.08.2026",
    city: "BURG HERZBERG",
    location: "Herzberg Festival",
    tickets: "https://herzberg-festival.com/tickets/",
  },
  {
    date: "10.10.2026",
    city: "ASCHAFFENBURG",
    location: "Colos-Saal",
    tickets:
      "https://colos-saal.de/komplettes-programm/programm-nach-genres/classicrock-hardrock/rockpommels-band.html",
  },
];
