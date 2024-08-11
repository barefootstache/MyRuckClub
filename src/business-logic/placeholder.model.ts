import { Club, ClubEvent, Coordinates } from '@/business-logic';
import { addDays } from 'date-fns';

export const PLACEHOLDER_BOUNDINGBOX = {
  box: [
    [48.5, 13.5],
    [48, 13],
  ] as Coordinates[],
  zoom: 12,
  distanceInKm: 200,
};

export const PLACEHOLDER_CLUB: Club = {
  coordinates: [48.3908, 13.1604],
  id: 'placeholder-club',
  name: 'placeholder-club',
  contact: {
    preferred: 'fediverse',
    fediverse: 'https://indieweb.social/@rucking',
  },
  country: 'Germany',
  associations: ['myruckclub'],
  default: {
    name: 'placeholder-name',
    coordinates: [48.3908, 13.1604],
    time: '00:00',
    type: 'default',
    url: 'https://www.myruck.club/',
    location: 'Rucking, Germany',
    recurringInterval: 'daily',
  },
};

export const PLACEHOLDER_CLUBEVENT: ClubEvent = {
  location: 'Rucking, Germany',
  type: 'ruck',
  time: '00:00',
  coordinates: [48.3908, 13.1604],
  name: 'placeholder-event',
  url: 'https://www.myruck.club/',
  date: addDays(new Date(), 1),
  clubId: 'placeholder-club',
  inSummer: true,
};
