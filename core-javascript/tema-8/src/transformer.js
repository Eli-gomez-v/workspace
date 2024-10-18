// Implementa una clase llamada StringTransformer que tenga un constructor que reciba un string.
class StringTransformer {
  constructor(initialString) {
    this.initialString = initialString;
  }

  toCharArray = () => Array.from(this.initialString);

  randomOrder = () => this.toCharArray()
    .sort(() => Math.random() - 0.5)
    .join('');

  reverseOrder = () => [...this.initialString].reverse().join('');

  removeVowels = () => this.initialString.replace(/[aeiou]/gi, '');

  removeConsonants = () => this.initialString.replace(/[bcdfghjklmnpqrstvwxyz]/gi, '');

  toWordArray = () => this.initialString.trim().split(/\s+/);

  invertWordOrder = () => this.toWordArray().reverse().join(' ');
}

module.exports = { StringTransformer };
