import { EventType } from "./events.db";

export type Club = {
  coordinates: [number, number];
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
  type: EventType;
}

export const Clubs: Club[] = [
  {
    coordinates: [48.1379,11.5744],
    default: {
      name: 'MRC Weekly Training',
      lat: 48.1779445,
      location: 'BMW Welt Nord, München',
      long: 11.5557917,
      recurringInterval: 'weekly',
      time: '19:00',
      type: 'pt'
    },
    id: 'munichruckingcrew',
    name: 'Munich Rucking Crew',
    url: 'https://www.instagram.com/munichruckingcrew/',
  },
  {
    coordinates: [49.9429,11.5767],
    name: 'GORUCK Club Franken',
    url: 'https://www.instagram.com/goruck_club_franken/',
    id: 'goruck_club_franken'

  },
  {
    coordinates: [48.3663,10.8943],
    default: {
      name: 'Weekly Ruck Meetup',
      lat: 48.3772151,
      location: 'Fischertor, Augsburg',
      long: 10.8939913,
      recurringInterval: 'weekly',
      time: '18:30',
      type: 'ruck'
    },
    name: 'AUXRucker',
    url: 'https://www.instagram.com/auxruckers/',
    id: 'auxruckers'

  },
  {
    coordinates: [51.7219,10.7089],
    name: 'GORUCK Harzmountains',
    url: 'https://www.instagram.com/goruckharzmountains/',
    id: 'goruckharzmountains'

  },
  {
    coordinates: [52.3754,9.7377],
    default: {
      name: 'Montly Ruck Meetup',
      lat: 52.3894,
      location: 'Freizeitheim Lister Turm, Hannover',
      long: 9.7544,
      recurringInterval: 'weekly',
      time: '11:00',
      type: 'ruck'
    },
    name: 'Ruck It! Hannover',
    url: 'https://www.instagram.com/ruckithannover/',
    id: 'ruckithannover'

  },
  {
    coordinates: [51.4820,7.2187],
    name: 'Ruhr Ruckers',
    url: 'https://www.instagram.com/ruhr_ruckers/',
    id: 'ruhr_ruckers'
  },
  {
    coordinates: [51.9469,8.5843],
    name: 'GORUCK Club Teuto Rucker',
    url: 'https://www.instagram.com/teutorucker/',
    id: 'teutorucker'

  },
  {
    coordinates: [48.7788,9.1750],
    name: 'grc stuttgart germany',
    url: 'https://www.instagram.com/goruckclub.stuttgart/',
    id: 'goruckclubstuttgart'

  },
  {
    coordinates: [50.1140,8.6737],
    name: 'Skyline Ruckers Rhein-Main',
    url: 'https://www.instagram.com/skylineruckers/',
    id: 'skylineruckers'
  },
  {
    coordinates: [53.5697,9.9756],
    name: 'Hamburg RUCKing',
    url: 'https://www.instagram.com/hhauruck/',
    id: 'hhauruck'
  },
  {
    coordinates: [0,0],
    name: 'GORUCK Europe',
    url: 'https://www.instagram.com/goruckeurope/',
    id: 'goruckeurope',
    hide: true
  },
  {
    coordinates: [0,0],
    name: 'GORUCK',
    url: 'https://www.goruckevents.com/',
    id: 'goruck',
    hide: true
  },
]
