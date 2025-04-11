import {
  Association,
  AssociationType,
  Club,
  ClubEvent,
  Contact,
  Coordinates,
  Country,
  Default,
  EventType,
  PLACEHOLDER_ASSOCIATION,
  SocialMediaContent,
  Timezone,
  TursoRequest,
} from '@/business-logic';
import { turso, tursoV2 } from '@/config/turso';
import { Row } from '@libsql/client';
import { format } from 'date-fns';

type TursoCols = Array<{ name: string, decltype: string }>;
type TursoRows = Array<{ type: string, value?: string }>;

export class TursoService {
  static async closeConnection(requests: TursoRequest[]): Promise<Response> {
    const appendClose: TursoRequest[] = [...requests, { type: 'close' }];
    return tursoV2(appendClose)
      .then(res => res.json())
      .catch(err => console.error(err));
  }

  static async getClubById(clubId: string): Promise<Club> {
    const result = (
      await turso.execute({
        sql: 'SELECT * FROM clubs WHERE id = (:clubId)',
        args: { clubId },
      })
    ).rows.map((row) => TursoService.parseAsClub(row))[0];
    return result as Club;
  }

  static async getClubByIdV2(clubId: string): Promise<Club> {
    const request: TursoRequest = {
      type: 'execute', stmt: {
        sql: 'SELECT * FROM clubs WHERE id = (:clubId)',
        named_args: [{ name: 'clubId', value: { type: 'text', value: clubId } }]
      }
    };
    const res = (await TursoService.closeConnection([request])) as any;
    const result = res.results[0].response.result;

    const club = result.rows.map((row: any) => {
      return TursoService.parseAsClubV2(result.cols, row);
    })[0];
    return club;
  }

  static async getAllClubs(): Promise<Club[]> {
    const result = (await turso.execute('SELECT * FROM clubs')).rows.map(
      (row) => TursoService.parseAsClub(row)
    );
    return result;
  }

  static async getAllClubsV2(): Promise<Club[]> {
    const request: TursoRequest = { type: 'execute', stmt: { sql: 'SELECT * FROM clubs' } };
    const res = (await TursoService.closeConnection([request])) as any;
    const result = res.results[0].response.result;

    const clubs = result.rows.map((row: any) => {
      return TursoService.parseAsClubV2(result.cols, row);
    });
    return clubs;
  }

  static async getAssociationByType(
    type: AssociationType
  ): Promise<Association> {
    const result = (
      await turso.execute({
        sql: 'SELECT * FROM associations WHERE type = (:type)',
        args: { type },
      })
    ).rows.map((row) => TursoService.parseAsAssociation(row))[0];

    if (!result) {
      return PLACEHOLDER_ASSOCIATION;
    }
    return result;
  }

  static async getEventsByClubId(clubId: string): Promise<ClubEvent[]> {
    const result = (
      await turso.execute({
        sql: 'SELECT * FROM events WHERE startsAt > CURRENT_TIMESTAMP AND clubId = (:clubId) ORDER BY startsAt',
        args: { clubId },
      })
    ).rows.map((row) => TursoService.parseAsClubEvent(row));

    return result;
  }

  static async getFutureEvents(): Promise<ClubEvent[]> {
    const result = (
      await turso.execute(
        'SELECT * FROM events WHERE startsAt > CURRENT_TIMESTAMP ORDER BY startsAt'
      )
    ).rows.map((row) => TursoService.parseAsClubEvent(row));
    return result;
  }

  static async getFutureEventsV2(): Promise<ClubEvent[]> {
    const request: TursoRequest = { type: 'execute', stmt: { sql: 'SELECT * FROM events WHERE startsAt > CURRENT_TIMESTAMP ORDER BY startsAt' } };
    const res = (await TursoService.closeConnection([request])) as any;
    const result = res.results[0].response.result;
    const events = result.rows.map((row: any) => TursoService.parseAsClubEventV2(result.cols, row));
    return events;
  }

  private static parseAsAssociation(row: Row): Association {
    const contact: Contact = {
      preferred: row['contact.preferred'] as keyof Contact,
    };

    if (row['contact.homepage']) {
      contact.homepage = row['contact.homepage'] as string;
    }
    if (row['contact.instagram']) {
      contact.instagram = row['contact.instagram'] as string;
    }
    if (row['contact.fediverse']) {
      contact.fediverse = row['contact.fediverse'] as string;
    }
    if (row['contact.facebook']) {
      contact.facebook = row['contact.facebook'] as string;
    }
    if (row['contact.linktree']) {
      contact.linktree = row['contact.linktree'] as string;
    }
    if (row['contact.sandlot']) {
      contact.sandlot = row['contact.sandlot'] as string;
    }

    return {
      type: row['type'] as AssociationType,
      contact,
      name: row['name'] as string,
      color: row['color'] as string,
    };
  }

  private static parseAsClubEvent(row: Row): ClubEvent {
    const startsAt = new Date(row['startsAt'] as string);
    return {
      url: row['url'] as string,
      name: row['name'] as string,
      type: row['type'] as EventType,
      ics: JSON.parse(row['ics'] as string),
      clubId: row['clubId'] as string,
      inSummer: Boolean(row['inSummer'] as number),
      location: row['location'] as string,
      duration: JSON.parse(row['duration'] as string) ?? { hours: 3 },
      coordinates: JSON.parse(row['coordinates'] as string),
      date: startsAt,
      time: format(startsAt, 'HH:mm'),
    };
  }

  private static parseAsClubEventV2(cols: TursoCols, row: TursoRows): ClubEvent {
    const startsAt = new Date(TursoService.getValueByColumn('startsAt', cols, row));
    return {
      url: TursoService.getValueByColumn('url', cols, row),
      name: TursoService.getValueByColumn('name', cols, row),
      type: TursoService.getValueByColumn<EventType>('type', cols, row),
      ics: TursoService.getValueByColumn('ics', cols, row, 'json'),
      clubId: TursoService.getValueByColumn('clubId', cols, row),
      inSummer: TursoService.getValueByColumn<boolean>('inSummer', cols, row, 'boolean'),
      location: TursoService.getValueByColumn('location', cols, row),
      duration: TursoService.getValueByColumn('duration', cols, row, 'json') ?? { hours: 3 },
      coordinates: TursoService.getValueByColumn<Coordinates>('coordinates', cols, row, 'json'),
      date: startsAt,
      time: format(startsAt, 'HH:mm'),
    };
  }

  private static parseAsClub(row: Row): Club {
    const body: Club = {
      coordinates: JSON.parse(row['coordinates'] as string) as Coordinates,
      id: row['id'] as string,
      name: row['name'] as string,
      hide: Boolean(row['hide'] as number),
      contact: JSON.parse(row['contact'] as string) as Contact,
      country: row['country'] as Country,
      hasLogo: Boolean(row['hasLogo'] as number),
      associations: JSON.parse(
        row['associations'] as string
      ) as AssociationType[],
    };

    if (row['default'] !== 'undefined') {
      body.default = JSON.parse(row['default'] as string) as Default;
    }

    if (row['socialMediaContent']) {
      body.socialMediaContent = JSON.parse(
        row['socialMediaContent'] as string
      ) as SocialMediaContent;
    }

    if (row['timezone']) {
      body.timezone = JSON.parse(row['timezone'] as string) as Timezone;
    }

    return body;
  }

  private static parseAsClubV2(cols: TursoCols, row: TursoRows): Club {
    const body: Club = {
      coordinates: TursoService.getValueByColumn<Coordinates>('coordinates', cols, row, 'json'),
      id: TursoService.getValueByColumn('id', cols, row),
      name: TursoService.getValueByColumn('name', cols, row),
      hide: TursoService.getValueByColumn<boolean>('hide', cols, row, 'boolean'),
      contact: TursoService.getValueByColumn<Contact>('contact', cols, row, 'json'),
      country: TursoService.getValueByColumn<Country>('name', cols, row),
      hasLogo: TursoService.getValueByColumn<boolean>('hasLogo', cols, row, 'boolean'),
      associations: TursoService.getValueByColumn<AssociationType[]>('associations', cols, row, 'json'),
    };

    const rowDefault = row[cols.findIndex(col => col.name === 'default')];
    if (rowDefault.value !== 'undefined' && rowDefault.type !== 'null') {
      body.default = JSON.parse(rowDefault.value as string) as Default;
    }

    const rowSocialMediaContent = row[cols.findIndex(col => col.name === 'socialMediaContent')];
    if (rowSocialMediaContent.value && rowSocialMediaContent.type !== 'null') {
      body.socialMediaContent = JSON.parse(rowSocialMediaContent.value as string) as SocialMediaContent;
    }

    const rowTimezone = row[cols.findIndex(col => col.name === 'timezone')];
    if (rowTimezone.value && rowTimezone.type !== 'null') {
      body.timezone = JSON.parse(rowTimezone.value as string) as Timezone;
    }
    return body;
  }

  private static getValueByColumn<T = string>(columnName: string, cols: TursoCols, row: TursoRows): T;
  private static getValueByColumn<K = any>(columnName: string, cols: TursoCols, row: TursoRows, parseType?: 'json' | 'boolean'): K;
  private static getValueByColumn<T = string, K = any>(columnName: string, cols: TursoCols, row: TursoRows, parseType?: 'json' | 'boolean'): T | K {
    const value = row[cols.findIndex(col => col.name === columnName)].value as T;
    if (parseType && typeof value === 'string') {
      if (parseType === 'json') {
        return JSON.parse(value) as K;
      } else if (parseType === 'boolean') {
        return Boolean(+value) as K;
      }
    }
    return value;
  }
}