import { DurationObject, EventAttributes } from "ics";
import { Coordinates } from "@/business-logic";

export type EventType = 'pt' | 'ruck' | 'default';

export type ClubEvent = {
  clubId: string;
  coordinates: Coordinates;
  date: Date;
  duration?: DurationObject;
  ics?: EventAttributes;
  inSummer: boolean;
  location: string;
  name: string;
  time: string;
  type: EventType;
  url: string;
}

export const ClubEventInit: ClubEvent = {
  clubId: 'myruckclub',
  coordinates: [0,0],
  date: new Date(),
  inSummer: true, // since summer is longer than winter
  location: 'TBA',
  name: 'My Ruck Club - event',
  time: '00:00',
  type: 'default',
  url: 'https://indieweb.social/@rucking'
}
