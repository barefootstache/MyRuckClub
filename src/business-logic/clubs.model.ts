import { AssociationType } from "./associations.model";
import { EventType } from "./events.model";

export type Coordinates = [number, number];

export type Country = 
  | 'Brunei'
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
  coordinates: Coordinates;
  country: Country;
  default?: Default;
  hide?: boolean;
  id: string;
  name: string;
  url: string;
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

