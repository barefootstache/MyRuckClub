const { format, addDays } = require("date-fns");

const refernceId = 163;
// month 0 is January
const startDate = new Date(2024, 9, 25);
const startTime = '17:30';
const duplicateCount = 8;

function duplicateRow(date, time) {
  return `INSERT INTO "events" ("clubid", "coordinates", "startsAt", "duration", "inSummer", "location", "name", "type", "url") SELECT "clubid", "coordinates", '${format(date, 'yyyy-MM-dd')} ${time}', "duration", "inSummer", "location", "name", "type", "url" FROM "events" WHERE "id" = ${refernceId};\n`;
}

let response = '';
for (let ii = 1; ii < duplicateCount; ii++) {
  response += duplicateRow(addDays(startDate, 7 * ii), startTime);
}

console.log(response)