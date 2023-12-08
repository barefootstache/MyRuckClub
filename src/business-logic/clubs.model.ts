import { EventType } from "./events.model";

export type Coordinates = [number, number];

export type Country = 'England' | 'Germany' | 'Japan' | 'Ireland' | 'México' | 'Norway' | 'Singapore' | 'Sweden' | 'Switzerland' | 'USA';

export type Club = {
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

