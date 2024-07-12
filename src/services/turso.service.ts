import { ClubEvent, EventType } from "@/business-logic";
import { turso } from "@/config/turso";
import { Row } from "@libsql/client";
import { format } from "date-fns";

export class TursoService {
  static async getFutureEvents(): Promise<ClubEvent[]> {
    const result = (await turso.execute('SELECT * FROM events WHERE startsAt > CURRENT_TIMESTAMP')).rows.map(row => TursoService.createEventFromTurso(row));
    return result;
  }

  private static createEventFromTurso(row: Row): ClubEvent {
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
      time: format(startsAt, 'HH:mm')
    }
  }
}