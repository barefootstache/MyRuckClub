import { AssociationsDB } from "../db/index.db";
import { Association, AssociationType } from "./associations.model";

/**
 * Gets the association based off of its type or the default one.
 * @param type - the association type
 * @returns the association
 */
export function getAssociationByType(type:AssociationType): Association {
  return AssociationsDB.find(ass => ass.type === type) || AssociationsDB[0];
}

