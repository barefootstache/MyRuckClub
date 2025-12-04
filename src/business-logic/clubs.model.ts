import {
  AssociationType,
  Contact,
  EventType,
  Timezone,
} from '@/business-logic';

export type Coordinates = [number, number];

export type Country =
  | 'Austria'
  | 'Brunei'
  | 'Canada'
  | 'China'
  | 'Costa Rica'
  | 'Czechia'
  | 'England'
  | 'Finland'
  | 'France'
  | 'Germany'
  | 'Japan'
  | 'Ireland'
  | 'México'
  | 'Norway'
  | 'Scotland'
  | 'Singapore'
  | 'Sweden'
  | 'Switzerland'
  | 'United Arab Emirates'
  | 'USA'
  | 'Vietnam';

export type Club = {
  associations: AssociationType[];
  contact: Contact;
  coordinates: Coordinates;
  country: Country;
  default?: Default;
  hasLogo?: boolean;
  hide?: boolean;
  id: string;
  name: string;
  socialMediaContent?: SocialMediaContent;
  timezone?: Timezone;
};

export type Default = {
  coordinates: Coordinates;
  location: string;
  name: string;
  recurringInterval: string;
  time: string;
  type: EventType;
  url?: string;
};

export type SocialMediaContent = {
  updatedAt: string;
  source: keyof Contact;
  lastPost: string;
};