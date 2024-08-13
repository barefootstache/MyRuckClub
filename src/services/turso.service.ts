import {
  AssociationType,
  Club,
  ClubEvent,
  Contact,
  Coordinates,
  Country,
  Default,
  EventType,
  SocialMediaContent,
  Timezone,
} from '@/business-logic';
import { turso } from '@/config/turso';
import { Row } from '@libsql/client';
import { format } from 'date-fns';

export class TursoService {
  static async getClubById(clubId: string): Promise<Club> {
    const result = (
      await turso.execute({
        sql: 'SELECT * FROM clubs WHERE id = (:clubId)',
        args: { clubId },
      })
    ).rows.map((row) => TursoService.parseAsClub(row))[0];
    return result as Club;
  }

  static async getAllClubs(): Promise<Club[]> {
    const result = (await turso.execute('SELECT * FROM clubs')).rows.map(
      (row) => TursoService.parseAsClub(row)
    );
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
}