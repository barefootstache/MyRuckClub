const { format, addDays } = require("date-fns");

// month 0 is January
const frequency = [
  {
    clubId: 'auxruckers',
    time: '18:30',
    date: new Date(2025, 2, 25),
    referenceId: '347'
  },
  {
    clubId: 'goruck_club_franken',
    time: '19:00',
    date: new Date(2025, 2, 24),
    referenceId: '316'
  },
  {
    clubId: 'goruck_club_ythsie',
    time: '18:00',
    date: new Date(2025, 2, 26),
    referenceId: '354'
  },
  {
    clubId: 'herzschlagruckerz',
    time: '11:00',
    date: new Date(2025, 2, 29),
    referenceId: '341'
  },
  {
    clubId: 'munichruckingcrew',
    time: '19:00',
    date: new Date(2025, 2, 27),
    referenceId: '331'
  },
  {
    clubId: 'polarisruckingcrew',
    time: '12:00',
    date: new Date(2025, 2, 29),
    referenceId: '311'
  },
  {
    clubId: 'ruhr_ruckers',
    time: '18:00',
    date: new Date(2025, 2, 27),
    referenceId: '326'
  },
  {
    clubId: 'teutorucker',
    time: '17:30',
    date: new Date(2025, 2, 27),
    referenceId: '321'
  },
  {
    clubId: 'ybbsvalleyruckers',
    time: '17:30',
    date: new Date(2025, 2, 28),
    referenceId: '336'
  },
]

// Makes 10 duplicates since starts with 1 and ends with < 11
const duplicateCount = 11;

function duplicateRow(referenceId, date, time) {
  return `INSERT INTO "events" ("clubid", "coordinates", "startsAt", "duration", "inSummer", "location", "name", "type", "url") SELECT "clubid", "coordinates", '${format(date, 'yyyy-MM-dd')} ${time}', "duration", "inSummer", "location", "name", "type", "url" FROM "events" WHERE "id" = ${referenceId};\n`;
}

let response = frequency.map(item => {
  let responseItem = `-- ${item.clubId}\n`;
  for (let ii = 1; ii < duplicateCount; ii++) {
    responseItem += duplicateRow(item.referenceId, addDays(item.date, 7 * ii), item.time);
  }
  return responseItem
}).reduce((prev, curr) => prev + curr);

console.log(response)