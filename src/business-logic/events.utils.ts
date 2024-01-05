import { Clubs } from "@/db/clubs.db";
import { Club, Coordinates, Default } from "./clubs.model";
import { ClubEvent, ClubEventInit, EventType } from "./events.model";

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
    coordinates: getMostRecentData<Coordinates>('coordinates', club, ev),
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
  } else if (key === 'coordinates' && club) {
    // the init coordinates is [0,0] making it be in Africa
    // thus use the club's coordinates
    return club.coordinates as T;
  } else {
    return ClubEventInit[key] as T;
  }
}

