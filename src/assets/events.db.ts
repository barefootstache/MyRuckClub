import { Club, Clubs, Default } from "./clubs.db";

export type EventType = 'pt' | 'ruck' | 'default';

export type ClubEvent = {
  clubId: string;
  coordinates: [number, number];
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

export const ClubEvents: ClubEvent[] = [
  createClubEvent('2023-12-05', 'auxruckers'),
  createClubEvent('2023-12-06', 'auxruckers', {name: 'Nikolaus Ruck mit anschliessendem Glühwein'}),
  createClubEvent('2023-12-07', 'munichruckingcrew', {name: 'MRC 12 Miler', time: '18:00', type: 'ruck'}),
  createClubEvent('2023-12-12', 'auxruckers', {name: 'Nightmare WOD Teil 1', type: 'pt'}),
  createClubEvent('2023-12-14', 'munichruckingcrew'),
  createClubEvent('2023-12-16', 'munichruckingcrew', {name: 'Christmas Market Ruck', time: '16:00', location: 'Münchener Freiheit, München', type: 'ruck', coordinates: [48.16261, 11.58698]}),
  createClubEvent('2023-12-16', 'rkfrankenstein', {name: 'Wintermarsch', time: '16:00', location: 'Parkplatz Nonnenbrunnen', type: 'ruck', coordinates: [49.75085, 8.64528]}),
  createClubEvent('2023-12-12', 'auxruckers', {name: 'Nightmare WOD Teil 2', type: 'pt'}),
  createClubEvent('2023-12-21', 'munichruckingcrew'),
  createClubEvent('2023-12-26', 'auxruckers', {name: 'letzte Rucktreff des Jahres'}),
  createClubEvent('2023-12-27', 'auxruckers', {name: 'December Tribe Challenge', type: 'pt'}),
  createClubEvent('2024-04-20', 'goruck', {name: 'Milton Memorial Tough', location: 'Frankfurt am Main, Germany', coordinates: [50.11228, 8.67662]}),
  createClubEvent('2024-05-27', 'goruck', {name: 'Selection', location: 'Normandy, France', coordinates: [49.37785, -0.89874]}),
  createClubEvent('2024-05-31', 'goruck', {name: 'GORUCK Party', location: 'Normandy, France', coordinates: [49.37785, -0.89874]}),
  createClubEvent('2024-06-01', 'goruck', {name: 'Star Course', location: 'Normandy, France', coordinates: [49.37785, -0.89874]}),
  createClubEvent('2024-06-03', 'goruck', {name: 'Tough Challenge', location: 'Normandy, France', coordinates: [49.37785,  -0.89874]}),
  createClubEvent('2024-06-04', 'goruck', {name: 'Basic/Light Challenge + After Party', location: 'Normandy, France', coordinates: [49.37785, -0.89874]}),
]

/**
 * Creates a club event.
 * @param dateString - the date as a string
 * @param clubId - the club id
 * @param ev - custom club event properties
 * @returns the new club event.
 */
export function createClubEvent(dateString: string, clubId: string, ev?: Partial<ClubEvent>): ClubEvent {
  const club = Clubs.find(item => item.id === clubId);
  const newEvent = {
    clubId,
    coordinates: getMostRecentData<[number, number]>('coordinates', club, ev),
    date: new Date(dateString),
    location: getMostRecentData<string>('location', club, ev),
    name: getMostRecentData<string>('name', club, ev),
    time: getMostRecentData<string>('time', club, ev),
    type: getMostRecentData<EventType>('type', club, ev),
    url: getMostRecentData<string>('url', club, ev)
  }
  return newEvent
}

/**
 * Gets the most recent value of the referenced `key`.
 * @param key - the key 
 * @param club - the club
 * @param ev - the event
 * @returns the value of `key`.
 */
export function getMostRecentData<T>(key: keyof ClubEvent, club?: Club, ev?: Partial<ClubEvent>): T {
  if(ev && ev.hasOwnProperty(key)){
    return ev[key] as T;
  } else if(club && club.default && club.default.hasOwnProperty(key)) {
    return club.default[key as keyof Default] as T;
  } else {
    return ClubEventInit[key] as T;
  }
}
