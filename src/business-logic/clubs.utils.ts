import { ClubsDB } from "@/db/index.db";
import { Club, Contact } from "@/business-logic";

/**
 * Gets the preferred contact URL.
 * @param contact - the contact
 * @returns the URL.
 */
export function getContactUrl(contact: Contact):string {
  return contact[contact.preferred] as string;
}

/**
 * Gets the club by the id.
 * @param id - the club's id
 * @returns the club
 */
export function getClubById(id: string):Club {
  return ClubsDB.find(club => club.id === id) as Club;
}
