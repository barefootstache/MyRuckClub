export type Club = {
  default?: Default;
  hide?: boolean;
  id: string;
  name: string;
  url: string;
}

export type Default = {
  lat: number;
  location: string;
  long: number;
  name: string;
  recurringInterval: string;
  time: string;
}

export const Clubs: Club[] = [
  {
    default: {
      name: 'MRC Weekly Training',
      lat: 48.1779445,
      location: 'BMW Welt Nord, München',
      long: 11.5557917,
      recurringInterval: 'weekly',
      time: '19:00'
    },
    id: 'munichruckingcrew',
    name: 'Munich Rucking Crew',
    url: 'https://www.instagram.com/munichruckingcrew/',
  },
  {
    name: 'GORUCK Club Franken',
    url: 'https://www.instagram.com/goruck_club_franken/',
    id: 'goruck_club_franken'

  },
  {
    name: 'AUXRucker (Ruck Club Augsburg)',
    url: 'https://www.instagram.com/auxruckers/',
    id: 'auxruckers'

  },
  {
    name: 'GORUCK Harzmountains',
    url: 'https://www.instagram.com/goruckharzmountains/',
    id: 'goruckharzmountains'

  },
  {
    name: 'Ruck It! Hannover',
    url: 'https://www.instagram.com/ruckithannover/',
    id: 'ruckithannover'

  },
  {
    name: 'Ruhr Ruckers',
    url: 'https://www.instagram.com/ruhr_ruckers/',
    id: 'ruhr_ruckers'

  },
  {
    name: 'GORUCK Club Teuto Rucker',
    url: 'https://www.instagram.com/teutorucker/',
    id: 'teutorucker'

  },
  {
    name: 'grc stuttgart germany',
    url: 'https://www.instagram.com/goruckclub.stuttgart/',
    id: 'goruckclubstuttgart'

  },
  {
    name: 'Skyline Ruckers Rhein-Main',
    url: 'https://www.instagram.com/skylineruckers/',
    id: 'skylineruckers'

  },
  {
    name: 'Hamburg RUCKing',
    url: 'https://www.instagram.com/hhauruck/',
    id: 'hhauruck'

  },
  {
    name: 'GORUCK Europe',
    url: 'https://www.instagram.com/goruckeurope/',
    id: 'goruckeurope',
    hide: true
  },
  {
    name: 'GORUCK',
    url: 'https://www.goruckevents.com/',
    id: 'goruck',
    hide: true
  },
]
