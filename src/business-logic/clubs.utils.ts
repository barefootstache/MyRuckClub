import { Contact } from "./contact.model";

/**
 * Gets the preferred contact URL.
 * @param contact - the contact
 * @returns the URL.
 */
export function getContactUrl(contact: Contact):string {
  return contact[contact.preferred] as string;
}
