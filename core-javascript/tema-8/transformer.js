export const title = inputString =>
  inputString
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');

export class StringTransformer {
  constructor(initialString) {
      this.initialString = initialString;
  }

  toCharArray = () => Array.from(this.initialString);

  randomOrder = () =>
      this.toCharArray()
          .sort(() => Math.random() - 0.5)
          .join('');

  reverseOrder = () => [...this.initialString].reverse().join('');

  removeVowels = () => this.initialString.replace(/[aeiouAEIOU]/g, '');

  removeConsonants = () => this.initialString.replace(/[^aeiouAEIOU\s]/g, '');

  toWordArray = () => this.initialString.trim().split(/\s+/);

  invertWordOrder = () => this.toWordArray().reverse().join(' ');
}
