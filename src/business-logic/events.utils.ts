import {
  Club,
  Coordinates,
  Default,
  ClubEvent,
  ClubEventInit,
  EventType,
} from '@/business-logic';
import { getDate, getMonth, getTime, getYear } from 'date-fns';
import { EventAttributes } from 'ics';
import { getContactUrl } from './clubs.utils';
import { TursoService } from '@/services';

/**
 * Creates a club event.
 * @param dateString - the date as a string
 * @param clubId - the club id
 * @param ev - custom club event properties
 * @returns the new club event.
 */
export async function createClubEvent(
  dateString: string,
  clubId: string,
  ev?: Partial<ClubEvent>
): Promise<ClubEvent> {
  const club = await TursoService.getClubById(clubId);
  const newEvent = {
    clubId,
    coordinates: getMostRecentData<Coordinates>('coordinates', club, ev),
    date: new Date(dateString),
    duration: ev?.duration,
    ics: {} as EventAttributes,
    inSummer: getMostRecentData<boolean>('inSummer', club, ev),
    location: getMostRecentData<string>('location', club, ev),
    name: getMostRecentData<string>('name', club, ev),
    time: getMostRecentData<string>('time', club, ev),
    type: getMostRecentData<EventType>('type', club, ev),
    url: getMostRecentData<string>('url', club, ev),
  };
  newEvent.ics = createCalendarEvent(newEvent);
  return newEvent;
}

/**
 * Creates an iCalendar event.
 * @param ev - the club event
 * @returns the new iCalendar event.
 */
export function createCalendarEvent(ev: ClubEvent): EventAttributes {
  const startYear = getYear(ev.date);
  const startMonth = getMonth(ev.date) + 1;
  const startDate = getDate(ev.date);
  const startHour = Number(ev.time.split(':')[0]) || 0;
  const startMinute = Number(ev.time.split(':')[1]) || 0;

  return {
    url: ev.url,
    geo: { lat: ev.coordinates[0], lon: ev.coordinates[1] },
    start: [startYear, startMonth, startDate, startHour, startMinute],
    title: ev.name,
    status: 'TENTATIVE',
    organizer: { name: ev.clubId },
    location: ev.location,
    categories: [ev.type],
    duration: ev.duration || { hours: 3 },
    uid: `${ev.clubId}_${getTime(ev.date)}_${ev.time.replace(':', '-')}_${ev.name.substring(0, 5).replace(' ', '_')}`,
  };
}

/**
 * Gets the most recent value of the referenced `key`.
 * @param key - the key
 * @param club - the club
 * @param ev - the event
 * @returns the value of `key`.
 */
export function getMostRecentData<T>(
  key: keyof ClubEvent,
  club?: Club,
  ev?: Partial<ClubEvent>
): T {
  if (ev && Object.prototype.hasOwnProperty.call(ev, key)) {
    return ev[key] as T;
  } else if (
    club &&
    club.default &&
    Object.prototype.hasOwnProperty.call(club.default, key)
  ) {
    return club.default[key as keyof Default] as T;
  } else if (key === 'coordinates' && club) {
    // the init coordinates is [0,0] making it be in Africa
    // thus use the club's coordinates
    return club.coordinates as T;
  } else if (club && key === 'url') {
    return getContactUrl(club.contact) as T;
  } else {
    return ClubEventInit[key] as T;
  }
}

/**
 * Gets the event type icon.
 * @param name - the name of the icon
 * @returns the type icon
 */
export function getIcon(name: EventType): string {
  switch (name) {
    case 'ruck':
      return '/ruck_icon.png';
    case 'pt':
      return '/pt_icon.png';
    case 'default':
      return '';
  }
}

/**
 * Checks if the `obj` is of type `ClubEvent`.
 * @param obj - the object to test
 * @returns the truth of the type
 */
export function isClubEvent(obj: any): obj is ClubEvent {
  if (typeof obj !== 'object' || obj === null) return false;
  if (typeof obj.clubId !== 'string') return false;
  if (
    !Array.isArray(obj.coordinates) ||
    obj.coordinates.length !== 2 ||
    typeof obj.coordinates[0] !== 'number' ||
    typeof obj.coordinates[1] !== 'number'
  )
    return false;
  if (!(obj.date instanceof Date)) return false;
  if (typeof obj.inSummer !== 'boolean') return false;
  if (typeof obj.location !== 'string') return false;
  if (typeof obj.name !== 'string') return false;
  if (typeof obj.time !== 'string') return false;
  if (!['ruck', 'pt', 'default'].includes(obj.type)) return false;
  if (typeof obj.url !== 'string') return false;
  return true;
}
