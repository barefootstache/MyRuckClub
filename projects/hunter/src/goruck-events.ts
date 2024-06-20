import * as cheerio from 'cheerio';
import { format, parse } from 'date-fns';
import { ClubEvent } from '../../../src/business-logic/events.model';

const DOMAIN = 'https://registration.goruck.com';

async function extractEventInfo2(url: string): Promise<ClubEvent[]> {
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);

  const events: ClubEvent[] = [];

  $('.categoryEvent').each((_, element) => {
    const eventUrl = $(element).find('div.title a').attr('href') || '';
    const titleText = $(element).find('div.title a').text().trim();

    const hyphenText = titleText.split('-');

    const name = hyphenText[0].trim();
    const defaultDate = '01/01/2000';
    const dateText = hyphenText.length == 3 ? hyphenText.pop()?.trim() || defaultDate : defaultDate;

    const type = name.includes('bff') ? 'pt' : 'ruck';

    let date = new Date();
    try {
      date = parse(dateText, "MM/dd/yyyy", new Date());
    } catch (error) {
      console.error(`Error parsing date: ${error.message}`);
    }
    const dateAndTimeText = $(element).find('div.dateAndTime').text().trim();

    const pipeText = dateAndTimeText.split('|');

    const time12hr = pipeText[0].trim() || '12:00am';
      
    let time24hr = '';
    try {
      time24hr = format(parse(time12hr, "hh:mma", new Date()), "HH:mm");
    } catch (error) {
      console.error(`Error parsing time: ${error.message}`);
    }

    const location = pipeText.length > 1 ? pipeText[1].trim() : hyphenText.length > 1 ? hyphenText[1].trim() : '';

    events.push({
      url: `${DOMAIN}${eventUrl}`,
      name,
      date: new Date(date),
      time: time24hr,
      location,
      type,
      coordinates: [0,0],
      clubId: 'goruck'
    });
  });

  return events;
}

function createEventsDbArray(events: ClubEvent[]):string {
  return events
    .map(el => `createClubEvent('${format(el.date, "yyyy-MM-dd")}', '${el.clubId}', {name: '${el.name}', time: '${el.time}', location: '${el.location}', url: '${el.url}', coordinates: ${el.coordinates}, type: '${el.type}'})`)
    .reduce((a,b) => `${a},\n${b}`);
}

extractEventInfo2(DOMAIN)
  .then(events => {
    console.log(createEventsDbArray(events))
  })
  .catch(error => console.error('Error fetching or parsing HTML:', error));

