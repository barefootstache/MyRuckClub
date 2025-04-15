import { unique } from 'radash';
import { Club, Coordinates } from '@/business-logic/clubs.model';
import { ClubEvent } from '@/business-logic/events.model';

export class LocationService {
  /**
   * Gets the OSM Location URL.
   * @param ev - the club event
   * @returns the URL.
   */
  static getLocationClubUrl(ev: Club): string {
    if (!ev.default) {
      return '#';
    } else {
      return `https://www.openstreetmap.org/?mlat=${ev.default.coordinates[0]}&mlon=${ev.default.coordinates[1]}#map=18/${ev.default.coordinates[0]}/${ev.default.coordinates[1]}`;
    }
  }

  /**
   * Gets the OSM Location URL.
   * @param ev - the club event
   * @returns the URL.
   */
  static getLocationUrl(ev: ClubEvent): string {
    return `https://www.openstreetmap.org/?mlat=${ev.coordinates[0]}&mlon=${ev.coordinates[1]}#map=18/${ev.coordinates[0]}/${ev.coordinates[1]}`;
  }

  /**
   * Gets the coordinates of an club event.
   * @param ev - the club event.
   * @returns the coordinates.
   */
  static getCoordinates(ev: ClubEvent): Coordinates {
    return ev.coordinates;
  }

  /**
   * Gets the unique events based off their lat/long data.
   * @param evs - the club events
   * @returns the unique club events.
   */
  static getUniqueEventsLocations(evs: ClubEvent[]): ClubEvent[] {
    if (evs.length <= 1) {
      return evs;
    }
    return unique(evs, (e) => `${e.coordinates[0]}${e.coordinates[1]}`);
  }
}