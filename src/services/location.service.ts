import { unique } from 'radash';
import { Club, Coordinates } from '@/business-logic/clubs.model';
import { ClubEvent } from '@/business-logic/events.model';

/*
const ZOOM_MAP:{zoom:number, distanceInKm:number} = [
  {zoom: 1, distanceInKm: 5000},
  {zoom: 2, distanceInKm: 2000},
  {zoom: 3, distanceInKm: 1000},
  {zoom: 4, distanceInKm: 500},
  {zoom: 5, distanceInKm: 300},
  {zoom: 6, distanceInKm: 100},
  {zoom: 7, distanceInKm: 50},
  {zoom: 8, distanceInKm: 30},
  {zoom: 9, distanceInKm: 20},
  {zoom: 10, distanceInKm: 10},
  {zoom: 11, distanceInKm: 5},
  {zoom: 12, distanceInKm: 2},
  {zoom: 13, distanceInKm: 1},
  {zoom: 14, distanceInKm: 0.5},
  {zoom: 15, distanceInKm: 0.3},
  {zoom: 16, distanceInKm: 0.1},
  {zoom: 17, distanceInKm: 0.05},
  {zoom: 18, distanceInKm: 0.03},
  {zoom: 19, distanceInKm: 0.01},
]
*/

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

  /**
   * Calculates the zoom relative to distance in km.
   * @param distanceInKm - the distance in km
   * @returns the zoom.
   */
  static calcZoom(distanceInKm: number): number {
    if (distanceInKm <= 3) {
      return 14;
    } else if (distanceInKm <= 5) {
      return 13;
    }
    // TODO fill in the other zoom levels later
    else if (distanceInKm <= 500) {
      return 7;
    }
    return 8;
  }

  /**
   * Calculates the degree for `distance` of kilometer along the latitude.
   * @param latitude - the latitude
   * @param distance - the distance (default: 1) in km
   * @returns the degree
   */
  static calcDistanceLatitude(latitude: number, distance = 1): number {
    const degEquatorKm = 111;
    if (latitude % 90 === 0) return 0;
    return distance / (degEquatorKm * Math.cos(latitude));
  }

  /**
   * Calculates the degree for `distance` of kilometer along the longitude.
   * @param longitude - the longitude
   * @param distance - the distance (default: 1) in km
   * @returns the degree
   */
  static calcDistanceLongitude(longitude: number, distance = 1): number {
    const radiusEarth = 6371;
    if (longitude % 90 === 0) return 0;
    return distance / (radiusEarth * Math.cos(longitude));
  }

  /**
   * Gets the bounding box around one set of coordinates (center) and makes a bounding box at `distance` in km.
   * @param coordinates - the set of coordinates
   * @param distance - the distance (default: 1) in km
   * @returns the bounding box
   */
  static getBoundingBoxDistanceFromCenter(
    coordinates: Coordinates,
    distance = 1
  ): Array<Coordinates> {
    const latDistance = LocationService.calcDistanceLatitude(
      coordinates[0],
      distance
    );
    const longDistance = LocationService.calcDistanceLongitude(
      coordinates[1],
      distance
    );
    // Creates the corners
    const southWest: Coordinates = [
      coordinates[0] - latDistance,
      coordinates[1] - longDistance,
    ];
    const northEast: Coordinates = [
      coordinates[0] + latDistance,
      coordinates[1] + longDistance,
    ];
    return [southWest, northEast];
  }

  /**
   * Gets the bounding box.
   * @param coordinates - the coordinates to include in the bounding box
   * @param distance - the distance (default: 1) in km
   * @returns the bounding box
   */
  static getBoundingBox(
    coordinates: Coordinates[],
    distance = 1
  ): { box: Array<Coordinates>; distanceInKm: number; zoom: number } {
    if (coordinates.length === 1) {
      coordinates = LocationService.getBoundingBoxDistanceFromCenter(
        coordinates[0],
        distance
      );
    }
    // Extract latitude and longitude arrays
    const latitudes = coordinates.map((coord) => coord[0]);
    const longitudes = coordinates.map((coord) => coord[1]);
    // Maxima
    const maxLatitude = Math.max(...latitudes);
    const maxLongitude = Math.max(...longitudes);
    // Minima
    const minLatitude = Math.min(...latitudes);
    const minLongitude = Math.min(...longitudes);
    // Creates the corners
    const southWest: Coordinates = [minLatitude, minLongitude];
    const northEast: Coordinates = [maxLatitude, maxLongitude];
    const distanceInKm = LocationService.calcDistanceBetweenTwoCoords(
      southWest,
      northEast
    );
    return {
      box: [southWest, northEast],
      distanceInKm,
      zoom: LocationService.calcZoom(distanceInKm),
    };
  }

  /**
   * Calculates the distance in km between two coordinates.
   * @param coord1 - first coordinates
   * @param coord2 - second coordinates
   * @returns the distance
   */
  static calcDistanceBetweenTwoCoords(
    coord1: Coordinates,
    coord2: Coordinates
  ): number {
    const R = 6371; // Earth radius in kilometers

    // Convert latitude and longitude from degrees to radians
    const lat1 = LocationService.toRadians(coord1[0]);
    const lon1 = LocationService.toRadians(coord1[1]);
    const lat2 = LocationService.toRadians(coord2[0]);
    const lon2 = LocationService.toRadians(coord2[1]);

    // Differences in coordinates
    const dlat = lat2 - lat1;
    const dlon = lon2 - lon1;

    // Haversine formula
    const a =
      Math.sin(dlat / 2) ** 2 +
      Math.cos(lat1) * Math.cos(lat2) * Math.sin(dlon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    return distance;
  }

  /**
   * Converts degrees into radians.
   * @param degrees - the degrees
   * @returns the radians
   */
  private static toRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
  }
}
