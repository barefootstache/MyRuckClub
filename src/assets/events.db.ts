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
    clubId: 'auxruckers',
    date: new Date('2023-11-21'),
    lat: 48.36845,
    location: 'Augsburg',
    long: 10.89624,
    name: 'Weekly Ruck Meetup',
    time: '18:30'
  },
  {
    clubId: 'munichruckingcrew',
    date: new Date('2023-11-23'),
    lat: 48.1779445,
    location: 'BMW Welt Nord, München',
    long: 11.5557917,
    name: 'Chad 1000x',
    time: '19:00'
  },
  {
    clubId: '',
    date: new Date('2023-11-26'),
    lat: 49.4538720,
    location: 'TBA',
    long: 11.0772980,
    name: 'Nürnberg Ruck',
    time: '11:00'
  },
]
