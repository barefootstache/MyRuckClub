import { format, addDays } from 'date-fns';

// month 0 is January
// weekday 0 is Sunday
const frequency = [
  {
    clubId: 'auxruckers',
    time: '18:30',
    weekday: 2, // Tuesday
    referenceId: '347'
  },
  {
    clubId: 'goruck_club_franken',
    time: '19:00',
    weekday: 1, // Monday
    referenceId: '316'
  },
  {
    clubId: 'goruck_club_ythsie',
    time: '18:00',
    weekday: 3, // Wednesday
    referenceId: '354'
  },
  {
    clubId: 'herzschlagruckerz',
    time: '11:00',
    weekday: 6, // Saturday
    referenceId: '341'
  },
  {
    clubId: 'munichruckingcrew',
    time: '19:00',
    weekday: 4, // Thursday
    referenceId: '331'
  },
  {
    clubId: 'polarisruckingcrew',
    time: '12:00',
    weekday: 6, // Saturday
    referenceId: '311'
  },
  {
    clubId: 'ruhr_ruckers',
    time: '18:00',
    weekday: 4, // Thursday
    referenceId: '326'
  },
  {
    clubId: 'teutorucker',
    time: '17:30',
    weekday: 4, // Thursday
    referenceId: '321'
  },
  {
    clubId: 'ybbsvalleyruckers',
    time: '17:30',
    weekday: 5, // Friday
    referenceId: '336'
  },
]

const duplicateCount = 10;
const referenceDate = new Date(2025, 2, 30);

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