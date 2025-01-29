const { format, addDays } = require("date-fns");

const refernceId = 348;
// month 0 is January
const startDate = new Date(2025, 1, 12);
const startTime = '18:00';
const duplicateCount = 10;

function duplicateRow(date, time) {
  return `INSERT INTO "events" ("clubid", "coordinates", "startsAt", "duration", "inSummer", "location", "name", "type", "url") SELECT "clubid", "coordinates", '${format(date, 'yyyy-MM-dd')} ${time}', "duration", "inSummer", "location", "name", "type", "url" FROM "events" WHERE "id" = ${refernceId};\n`;
}

let response = '';
for (let ii = 1; ii < duplicateCount; ii++) {
  response += duplicateRow(addDays(startDate, 7 * ii), startTime);
}

console.log(response)