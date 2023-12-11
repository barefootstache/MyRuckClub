import { Coordinates } from "./clubs.model";

export type EventType = 'pt' | 'ruck' | 'default';

export type ClubEvent = {
  clubId: string;
  coordinates: Coordinates;
  date: Date;
  lat?: number;
  location: string;
  long?: number;
  name: string;
  time: string;
  type: EventType;
  url: string;
}

export const ClubEventInit: ClubEvent = {
  clubId: '',
  coordinates: [0,0],
  date: new Date(),
  location: 'TBA',
  name: '',
  time: '00:00',
  type: 'default',
  url: ''
}

