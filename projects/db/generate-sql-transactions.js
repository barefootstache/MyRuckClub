import { format, addDays } from 'date-fns';

// month 0 is January
// weekday 0 is Sunday
const frequency = [
  {
    clubId: 'goruck_club_franken',
    time: '19:00',
    weekday: 1, // Monday
    referenceId: '316'
  },
  {
    clubId: 'auxruckers',
    time: '18:30',
    weekday: 2, // Tuesday
    referenceId: '347'
  },
  {
    clubId: 'goruck_club_ythsie',
    time: '18:00',
    weekday: 3, // Wednesday
    referenceId: '354'
  },
  {
    clubId: 'letsruck',
    time: '17:20',
    weekday: 3, // Wednesday
    referenceId: '620'
  },
  {
    clubId: 'munichruckingcrew',
    time: '18:00',
    weekday: 3, // Wednesday
    referenceId: '552'
  },
  {
    clubId: 'teutorucker',
    time: '17:30',
    weekday: 4, // Thursday
    referenceId: '321'
  },
  {
    clubId: 'ruhr_ruckers',
    time: '18:00',
    weekday: 4, // Thursday
    referenceId: '326'
  },
  {
    clubId: 'ukruckclubsouth',
    time: '16:45',
    weekday: 5, // Friday
    referenceId: '624'
  },
  {
    clubId: 'letsruck',
    time: '17:20',
    weekday: 5, // Friday
    referenceId: '621'
  },
  {
    clubId: 'ybbsvalleyruckers',
    time: '17:30',
    weekday: 5, // Friday
    referenceId: '336'
  },
  {
    clubId: 'herzschlagruckerz',
    time: '11:00',
    weekday: 6, // Saturday
    referenceId: '341'
  },
  {
    clubId: 'polarisruckingcrew',
    time: '12:00',
    weekday: 6, // Saturday
    referenceId: '311'
  },
  {
    clubId: 'nzrucking',
    time: '09:20',
    weekday: 0, // Sunday
    referenceId: '619'
  },
]

const duplicateCount = 10;
const referenceDate = new Date(2025, 5, 20);

function duplicateRow(referenceId, date, time) {
  return `INSERT INTO "events" ("clubid", "coordinates", "startsAt", "duration", "inSummer", "location", "name", "type", "url") SELECT "clubid", "coordinates", '${format(date, 'yyyy-MM-dd')} ${time}', "duration", "inSummer", "location", "name", "type", "url" FROM "events" WHERE "id" = ${referenceId};\n`;
}

const response = frequency.map(item => {
  let nextDate = referenceDate;
  // Ensure to move to the next week if referenceDate is the same weekday
  const daysUntilNextWeekday = (item.weekday + 7 - nextDate.getDay()) % 7 || 7;
  nextDate = addDays(nextDate, daysUntilNextWeekday);
  let responseItem = `-- ${item.clubId}\n`;
  for (let ii = 0; ii < duplicateCount; ii++) {
    responseItem += duplicateRow(item.referenceId, addDays(nextDate, 7 * ii), item.time);
  }
  return responseItem
}).reduce((prev, curr) => prev + curr);

console.log(response)