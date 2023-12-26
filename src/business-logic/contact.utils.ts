import { Contact, ContactIcon } from "./contact.model";

type ContactArrayItem = { key: string, url: string };

/**
 * Gets the dedicated icon for the contact.
 * @param key - the contact key
 * @returns the icon name.
 */
export function getIcon(key: keyof Contact):string {
  if(Object(ContactIcon).hasOwnProperty(key)){
    return ContactIcon[key] as string;
  }
  return 'mdi-error';
}


/**
 * Converts the contact to an array.
 * @param contact - the contact
 * @returns the contact as an array with preferred at the head
 */
export function convertContactToArray(contact: Contact): ContactArrayItem[] {
  const result: ContactArrayItem[] = [];

  // Move the preferred value to the head of the array
  if (contact.preferred && contact[contact.preferred]) {
    result.push({ key: contact.preferred, url: contact[contact.preferred] ?? '#' });
  }

  // Add other values to the array
  for (const key of Object.keys(contact)) {
    if (key !== 'preferred' && key !== contact.preferred && contact[key as keyof Contact]) {
      result.push({ key, url: contact[key as keyof Contact] as string });
    }
  }

  return result;
}
