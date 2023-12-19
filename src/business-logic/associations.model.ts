import { Contact } from "./contact.model";

export type AssociationType = 'myruckclub' | 'goruck' |'goruckeurope' | 'milruck' | 'f3' | 'spartan' | 'crossfit' | 'sandlot';

export type Association = {
  name: string;
  contact: Contact;
  type: AssociationType;
  color: string;
}

