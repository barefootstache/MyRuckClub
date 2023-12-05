import { EventType } from "./events.db";

export type Coordinates = [number, number];

export type Country = 'Germany' | 'Ireland' | 'México' | 'Norway' | 'Sweden' | 'Switzerland' | 'USA';

export type Club = {
  coordinates: Coordinates;
  country: Country;
  default?: Default;
  hide?: boolean;
  id: string;
  name: string;
  url: string;
}

export type Default = {
  coordinates: Coordinates;
  location: string;
  name: string;
  recurringInterval: string;
  time: string;
  type: EventType;
  url?: string;
}

export const Clubs: Club[] = [
  {
    coordinates: [48.1379,11.5744],
    country: 'Germany',
    default: {
      name: 'MRC Weekly Training',
      coordinates: [48.1779445, 11.5557917],
      location: 'BMW Welt Nord, München',
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
    country: 'Germany',
    name: 'GORUCK Club Franken',
    url: 'https://www.instagram.com/goruck_club_franken/',
    id: 'goruck_club_franken'

  },
  {
    coordinates: [48.3663,10.8943],
    country: 'Germany',
    default: {
      name: 'Weekly Ruck Meetup',
      coordinates: [48.3772151, 10.8939913],
      location: 'Fischertor, Augsburg',
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
    country: 'Germany',
    name: 'GORUCK Harzmountains',
    url: 'https://www.instagram.com/goruckharzmountains/',
    id: 'goruckharzmountains'

  },
  {
    coordinates: [52.3754,9.7377],
    country: 'Germany',
    default: {
      name: 'Montly Ruck Meetup',
      coordinates: [52.3894, 9.7544],
      location: 'Freizeitheim Lister Turm, Hannover',
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
    country: 'Germany',
    name: 'Ruhr Ruckers',
    url: 'https://www.instagram.com/ruhr_ruckers/',
    id: 'ruhr_ruckers'
  },
  {
    coordinates: [51.9469,8.5843],
    country: 'Germany',
    name: 'GORUCK Club Teuto Rucker',
    url: 'https://www.instagram.com/teutorucker/',
    id: 'teutorucker'

  },
  {
    coordinates: [48.7788,9.1750],
    country: 'Germany',
    name: 'grc stuttgart germany',
    url: 'https://www.instagram.com/goruckclub.stuttgart/',
    id: 'goruckclubstuttgart'

  },
  {
    coordinates: [50.1140,8.6737],
    country: 'Germany',
    name: 'Skyline Ruckers Rhein-Main',
    url: 'https://www.instagram.com/skylineruckers/',
    id: 'skylineruckers'
  },
  {
    coordinates: [53.5697,9.9756],
    country: 'Germany',
    name: 'Hamburg RUCKing',
    url: 'https://www.instagram.com/hhauruck/',
    id: 'hhauruck'
  },
  {
    coordinates: [0,0],
    country: 'Germany',
    name: 'GORUCK Europe',
    url: 'https://www.instagram.com/goruckeurope/',
    id: 'goruckeurope',
    hide: true
  },
  {
    coordinates: [0,0],
    country: 'Germany',
    name: 'GORUCK',
    url: 'https://www.sandlot.fit/',
    id: 'goruck',
    hide: true
  },
  {
    coordinates: [49.75845, 8.5996],
    country: 'Germany',
    name: 'RK Frankenstein',
    url: 'http://www.rkfrankenstein.de',
    id: 'rkfrankenstein'
  },
  {
    coordinates: [53.15688,-6.91058],
    country: 'Ireland',
    name: 'Mad Ruckers Kildare',
    url: 'https://www.instagram.com/mad_ruckers/',
    id: 'mad_ruckers'
  },
  {
    coordinates: [49.48779,8.46621],
    country: 'Germany',
    name: 'GORUCK Kurpfalz',
    url: 'https://www.instagram.com/goruck_kurpfalz/',
    id: 'goruck_kurpfalz'
  },
  {
    coordinates: [51.3583,7.4733],
    country: 'Germany',
    name: 'Mother Ruckers Hagen NRW',
    url: 'https://www.instagram.com/motherruckers_hagen_nrw/',
    id: 'motherruckers_hagen_nrw'
  },
  {
    coordinates: [49.00269,8.40101],
    country: 'Germany',
    name: 'Rhine Valley Rucking',
    url: 'https://www.instagram.com/rhinevalleyrucking/',
    id: 'rhinevalleyrucking'
  },
  {
    coordinates: [60.14339,11.17446],
    country: 'Norway',
    name: 'Norway Ruck',
    url: 'https://www.instagram.com/norwayruck/',
    id: 'norwayruck'
  },
  {
    coordinates: [47.37181,8.54221],
    country: 'Switzerland',
    name: 'The Sunrise Ruck Club',
    url: 'https://www.instagram.com/thesunriseruckclub/',
    id: 'thesunriseruckclub'
  },
  {
    coordinates: [25.6944,-80.1648],
    country: 'USA',
    name: 'Couth Florida Ruck Club',
    url: 'https://www.instagram.com/southfloridaruckclub/',
    id: 'southfloridaruckclub'
  },
  {
    coordinates: [26.3100,-80.2386],
    country: 'USA',
    name: 'Vice City Ruckers',
    url: 'https://www.instagram.com/vicecityruckers/',
    id: 'vicecityruckers'
  },
  {
    coordinates: [36.1551,-95.9951],
    country: 'USA',
    name: 'Green Country Ruckers',
    url: 'https://www.instagram.com/green.country.ruckers/',
    id: 'greencountryruckers'
  },
  {
    coordinates: [34.6092,-98.3977],
    country: 'USA',
    name: 'Blockout Rucking Crew',
    url: 'https://www.instagram.com/blackoutruckingcrew/',
    id: 'blackoutruckingcrew'
  },
  {
    coordinates: [32.7148,-117.1623],
    country: 'USA',
    name: 'Triton Ruck Club ',
    url: 'https://www.instagram.com/tritonruckclub/',
    id: 'tritonruckclub'
  },
  {
    coordinates: [35.5846,-80.8102],
    country: 'USA',
    name: 'Mooresville Ruck Club',
    url: 'https://www.instagram.com/ruckmooresville/',
    id: 'ruckmooresville'
  },
  {
    coordinates: [57.7072,11.9670],
    country: 'Sweden',
    name: 'Team Uphill',
    url: 'https://www.instagram.com/teamuphill/',
    id: 'teamuphill'
  },
  {
    coordinates: [35.7327,-78.8506],
    country: 'USA',
    name: 'Apex Ruck Club',
    url: 'https://www.instagram.com/apex_ruck_club/',
    id: 'apex_ruck_club'
  },
  {
    coordinates: [23.7327,-105.6897],
    country: 'México',
    name: 'Ruckers CDMX Ruck Club',
    url: 'https://www.instagram.com/ruckerscdmxclub/',
    id: 'ruckerscdmxclub'
  },
  {
    coordinates: [46.2769,-119.2718],
    country: 'USA',
    name: 'Bedrock Rucking',
    url: 'https://www.instagram.com/bedrock_rucking/',
    id: 'bedrock_rucking'
  },
  {
    coordinates: [41.4203,-73.9550],
    country: 'USA',
    name: 'Hudson Valley Ruck Club',
    url: 'https://www.instagram.com/hudson.valley.ruck.club/',
    id: 'hudsonvalleyruckclub'
  },
  {
    coordinates: [42.3457,-82.9768],
    country: 'USA',
    name: 'East Side Ruck Club',
    url: 'https://www.instagram.com/eastsideruckclub_mi/',
    id: 'eastsideruckclub_mi'
  },
]
