import { Contact } from './contacts.model';

export type AssociationType =
  | 'myruckclub'
  | 'goruck'
  | 'goruckeurope'
  | 'milruck'
  | 'f3'
  | 'spartan'
  | 'crossfit'
  | 'sandlot'
  | 'none';

export type Association = {
  name: string;
  contact: Contact;
  type: AssociationType;
  color: string;
};
