import { Contact, ContactIcon } from "./contact.model";

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
