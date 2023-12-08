import { unique } from "radash";
import { Club, Coordinates } from "@/business-logic/clubs.model";
import { ClubEvent } from "@/business-logic/events.model";

export class LocationService {
  /**
   * Gets the OSM Location URL.
   * @param ev - the club event
   * @returns the URL.
   */
  static getLocationClubUrl(ev: Club): string {
    if(!ev.default){
      return '#';
    } else {
      return `https://www.openstreetmap.org/?mlat=${ev.default.coordinates[0]}&mlon=${ev.default.coordinates[1]}#map=18/${ev.default.coordinates[0]}/${ev.default.coordinates[1]}`
    }
  }

  /**
   * Gets the OSM Location URL.
   * @param ev - the club event
   * @returns the URL.
   */
  static getLocationUrl(ev: ClubEvent): string {
    return `https://www.openstreetmap.org/?mlat=${ev.coordinates[0]}&mlon=${ev.coordinates[1]}#map=18/${ev.coordinates[0]}/${ev.coordinates[1]}`
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
    if(evs.length <= 1){
      return evs;
    }
    return unique(evs, e => `${e.coordinates[0]}${e.coordinates[1]}`);
  }

  /** 
   * Calculates the zoom relative to all provided coordinates.
   * @param coordinates - the coordinates
   * @returns the zoom.
   */
  static calcZoom(coordinates: Coordinates[]): number {
    const initialZoom = 16;
    const adjustSmallWindow = document.documentElement.clientWidth < 800 ? 1 : 0;
    // Extract latitude and longitude arrays
    const latitudes = coordinates.map(coord => coord[0]);
    const longitudes = coordinates.map(coord => coord[1]);

    // Calculate the delta coordinates
    const deltaLatitude = Math.abs(Math.max(...latitudes)) - Math.abs(Math.min(...latitudes));
    const deltaLongitude = Math.abs(Math.max(...longitudes)) - Math.abs(Math.min(...longitudes));
    
    const x = deltaLongitude * 1000;
    const y = deltaLatitude * 1000;
    const distance = Math.sqrt(x * x + y * y);

    // Return the zoom
    return initialZoom - (coordinates.length - 1) - Math.floor(distance / 50) - adjustSmallWindow;
  }

  /** 
   * Calculates the center of the map.
   * @param coordinates - the coordinates to center over
   * @returns the centered coordinates.
   */
  static calcCenterMap(coordinates: Coordinates[]): Coordinates {
    // Extract latitude and longitude arrays
    const latitudes = coordinates.map(coord => coord[0]);
    const longitudes = coordinates.map(coord => coord[1]);

    // Calculate the center coordinates
    const centerLatitude = (Math.max(...latitudes) + Math.min(...latitudes)) / 2;
    const centerLongitude = (Math.max(...longitudes) + Math.min(...longitudes)) / 2;
    
    // Return the center coordinates
    return [centerLatitude, centerLongitude];
  }
}

