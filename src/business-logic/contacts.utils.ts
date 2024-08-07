import { Contact, ContactIcon } from './contacts.model';

type ContactArrayItem = { name: string; url: string };

/**
 * Gets the dedicated icon for the contact.
 * @param key - the contact key
 * @returns the icon name.
 */
export function getIcon(key: keyof Contact): string {
  if (Object.prototype.hasOwnProperty.call(ContactIcon, key)) {
    return ContactIcon[key] as string;
  }
  return 'mdi-error';
}

/**
 * Gets the link for the contact.
 * @param contact - the contact
 * @returns the link.
 */
export function getLink(contact: ContactArrayItem): string {
  if (contact.name === 'email') {
    return `mailto:${contact.url}`;
  }
  return contact.url;
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
    result.push({
      name: contact.preferred,
      url: contact[contact.preferred] ?? '#',
    });
  }

  // Add other values to the array
  for (const key of Object.keys(contact)) {
    if (
      key !== 'preferred' &&
      key !== contact.preferred &&
      contact[key as keyof Contact]
    ) {
      result.push({ name: key, url: contact[key as keyof Contact] as string });
    }
  }

  return result;
}
