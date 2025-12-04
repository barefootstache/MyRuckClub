import { Club, ClubEvent, Contact } from '@/business-logic';
import { differenceInQuarters, parse } from 'date-fns/esm';

/**
 * Gets the preferred contact URL.
 * @param contact - the contact
 * @returns the URL.
 */
export function getContactUrl(contact: Contact): string {
  return contact[contact.preferred] as string;
}

/**
 * Checks if the `obj` is of type `Club`.
 * @param obj - the object to test
 * @returns the truth of the type
 */
export function isClub(obj: any): obj is Club {
  if (typeof obj !== 'object' || obj === null) return false;
  if (
    !Array.isArray(obj.coordinates) ||
    obj.coordinates.length !== 2 ||
    typeof obj.coordinates[0] !== 'number' ||
    typeof obj.coordinates[1] !== 'number'
  )
    return false;
  if (typeof obj.id !== 'string') return false;
  if (typeof obj.name !== 'string') return false;
  return true;
}

/**
 * Gets the club's logo or the default which is MyRuck.Club logo.
 * @param club - the club
 * @returns path to the logo
 */
export function getLogo(club: Club | string): string {
  if (typeof club === 'string') {
    return `clubs/${club}-logo.jpg`;
  } else if (club.hasLogo) {
    return `clubs/${club.id}-logo.jpg`;
  } else {
    return `clubs/myruckclub-logo.png`;
  }
}

/**
 * Calculates if the `club` is active on social media or has active events.
 * @param club - the club to check
 * @param eventsList - the events to check
 * @returns the active club or null
 */
export function isActiveClub(club: Club, eventsList: ClubEvent[]): Club | null {
  if (club.socialMediaContent && club.socialMediaContent.updatedAt) {
    const datesBetween = differenceInQuarters(parse(club.socialMediaContent.updatedAt, 'yyyy-MM-dd', new Date()), parse(club.socialMediaContent.lastPost, 'yyyy-MM-dd', new Date()))
    const maxQuartersDistance = 2
    if (datesBetween <= maxQuartersDistance) {
      // the club had a social media entry in the past 2 quarters
      return club
    }
    const events = eventsList.filter((ev) => ev.clubId === club.id)
    if (events.length) {
      // the club has events, but no social media entries
      return club
    }
  }
  return null
}
