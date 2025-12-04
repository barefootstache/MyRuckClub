import { Club, Contact } from '@/business-logic';

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