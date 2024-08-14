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
