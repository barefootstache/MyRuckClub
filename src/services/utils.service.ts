export class UtilsService {
  /**
   * Capitalizes first letter of the word.
   * @param word - the text to capitalize
   * @returns capitalized text.
   */
  static capitalize(word:string):string {
    return `${word[0].toUpperCase()}${word.slice(1)}`;
  }
}
