class StringTransformer {
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

  invertWordOrder = () => this.initialString.trim().split(/\s+/).reverse().join(' ');
}

module.exports = { StringTransformer };
