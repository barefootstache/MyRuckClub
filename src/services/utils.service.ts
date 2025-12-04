import { DurationObject } from "ics";

export class UtilsService {
  /**
   * Capitalizes first letter of the word.
   * @param word - the text to capitalize
   * @returns capitalized text.
   */
  static capitalize(word: string): string {
    return `${word[0].toUpperCase()}${word.slice(1)}`;
  }

  /**
   * Gets the clock time icon for a specific `time`.
   * @param time - the time in the `HH:mm` format
   * @param useOutline - to use an outline
   * @returns the mdi version of the clock time icon or the default clock
   */
  static getClockTimeIcon(time: string, useOutline = true): string {
    const outline = useOutline ? '-outline' : '';
    let text = '';

    const times = time.split(':');
    if (times.length !== 2) {
      return `mdi-clock${outline}`;
    }
    const hour = Number(times[0]) % 12;
    switch (hour) {
      case 0:
        text = 'twelve';
        break;
      case 1:
        text = 'one';
        break;
      case 2:
        text = 'two';
        break;
      case 3:
        text = 'three';
        break;
      case 4:
        text = 'four';
        break;
      case 5:
        text = 'five';
        break;
      case 6:
        text = 'six';
        break;
      case 7:
        text = 'seven';
        break;
      case 8:
        text = 'eight';
        break;
      case 9:
        text = 'nine';
        break;
      case 10:
        text = 'ten';
        break;
      case 11:
        text = 'eleven';
        break;
    }
    return `mdi-clock-time-${text}${outline}`;
  }

  /**
  * Prints the duration as a string.
  * @param duration - the duration
  * @returns the string.
  */
  static durationToString(duration?: DurationObject): string {
    if (!duration) {
      return '3 hours';
    }
    let durationString = '';
    if (!!duration.weeks) {
      durationString += `${duration.weeks} weeks `
    }
    if (!!duration.days) {
      durationString += `${duration.days} days `
    }
    if (!!duration.hours) {
      durationString += `${duration.hours} hours `
    }
    if (!!duration.minutes) {
      durationString += `${duration.minutes} minutes `
    }
    if (!!duration.seconds) {
      durationString += `${duration.seconds} seconds `
    }
    return durationString;
  }
}