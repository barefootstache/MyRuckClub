import { Clubs } from "./clubs.db";

export type ClubEvent = {
  clubId: string;
  date: Date;
  lat: number;
  location: string;
  long: number;
  name: string;
  time: string;
}

export const ClubEventInit: ClubEvent = {
  clubId: '',
  date: new Date(),
  lat: 0,
  location: 'TBA',
  long: 0,
  name: '',
  time: '00:00'
}

export const ClubEvents: ClubEvent[] = [
  {
    clubId: 'munichruckingcrew',
    date: new Date('2023-11-26'),
    lat: 49.44610,
    location: 'DB Info am Nürnberg Hbf',
    long: 11.08192,
    name: '12-Miler in Nürnberg',
    time: '11:00'
  },
  createClubEvent('2023-11-26', 'ruckithannover'),
  createClubEvent('2023-11-28', 'auxruckers'),
  createClubEvent('2023-11-30', 'munichruckingcrew'),
  {
    clubId: 'teutorucker',
    date: new Date('2023-12-03'),
    lat: 51.9456,
    location: 'TBA',
    long: 8.5828,
    name: 'Monthly Ruck Meetup',
    time: '11:00'
  },
  createClubEvent('2023-12-05', 'auxruckers'),
  createClubEvent('2023-12-07', 'munichruckingcrew', {name: 'MRC 12 Miler', time: '18:00'}),
  createClubEvent('2023-12-12', 'auxruckers'),
  createClubEvent('2023-12-14', 'munichruckingcrew'),
  createClubEvent('2023-12-16', 'munichruckingcrew', {name: 'Christmas Market Ruck', time: '16:00', location: 'TBA'}),
  createClubEvent('2023-12-19', 'auxruckers'),
  createClubEvent('2023-12-21', 'munichruckingcrew'),
]

/**
 * Creates a club event.
 * @param dateString - the date as a string
 * @param clubId - the club id
 * @param ev - custom club event properties
 * @returns the new club event.
 */
export function createClubEvent(dateString: string, clubId: string, ev?: Partial<ClubEvent>): ClubEvent {
  const club = Clubs.find(item => item.id === clubId);
  const newEvent = {
    clubId,
    date: new Date(dateString),
    lat: ev?.lat ? ev.lat : club?.default?.lat ? club.default.lat : ClubEventInit.lat,
    location: ev?.location ? ev.location : club?.default?.location ? club.default.location : ClubEventInit.location,
    long: ev?.long ? ev.long : club?.default?.long ? club.default.long : ClubEventInit.long,
    name: ev?.name ? ev.name : club?.default?.name ? club.default.name : ClubEventInit.name,
    time: ev?.time ? ev.time : club?.default?.time ? club.default.time : ClubEventInit.time,
  }
  return newEvent
}
