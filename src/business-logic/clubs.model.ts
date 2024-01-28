import { AssociationType } from "./associations.model";
import { Contact } from "./contact.model";
import { EventType } from "./events.model";

export type Coordinates = [number, number];

export type Country = 
  | 'Brunei'
  | 'Canada'
  | 'Costa Rica'
  | 'England' 
  | 'Finland' 
  | 'Germany' 
  | 'Japan' 
  | 'Hong Kong'
  | 'Ireland' 
  | 'México' 
  | 'Norway' 
  | 'Scotland'
  | 'Singapore' 
  | 'Sweden' 
  | 'Switzerland' 
  | 'United Arab Emirates'
  | 'USA';

export type Club = {
  associations: AssociationType[];
  contact: Contact;
  coordinates: Coordinates;
  country: Country;
  default?: Default;
  hide?: boolean;
  id: string;
  name: string;
}

export type Default = {
  coordinates: Coordinates;
  location: string;
  name: string;
  recurringInterval: string;
  time: string;
  type: EventType;
  url?: string;
}

