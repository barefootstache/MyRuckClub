export type ClubEvent = {
  clubId: string;
  date: Date;
  lat: number;
  location: string;
  long: number;
  name: string;
  time: string;
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
  {
    clubId: 'ruckithannover',
    date: new Date('2023-11-26'),
    lat: 52.37600,
    location: 'TBA',
    long: 9.74034,
    name: 'Monthly Ruck Meetup',
    time: '11:00'
  },
  {
    clubId: 'auxruckers',
    date: new Date('2023-11-28'),
    lat: 48.36845,
    location: 'Augsburg',
    long: 10.89624,
    name: 'Weekly Ruck Meetup',
    time: '18:30'
  },
  {
    clubId: 'munichruckingcrew',
    date: new Date('2023-11-30'),
    lat: 48.1779445,
    location: 'BMW Welt Nord, München',
    long: 11.5557917,
    name: 'Weekly Ruck Meetup',
    time: '19:00'
  },
  {
    clubId: 'teutorucker',
    date: new Date('2023-12-03'),
    lat: 51.9456,
    location: 'TBA',
    long: 8.5828,
    name: 'Monthly Ruck Meetup',
    time: '11:00'
  },
  {
    clubId: 'munichruckingcrew',
    date: new Date('2023-12-16'),
    lat: 48.1779445,
    location: 'TBA',
    long: 11.5557917,
    name: 'Christmas Market Ruck',
    time: '16:00'
  },
]
