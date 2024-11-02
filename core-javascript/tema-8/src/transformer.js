class StringTransformer {
  constructor(text = '') {
    if (typeof text !== 'string') {
      throw new Error('Input must be a string');
    }
    this.text = text;
  }

  add(newText) {
    if (typeof newText !== 'string') {
      throw new Error('Input must be a string');
    }
    this.text += newText;
  }

  toCharArray() {
    return Array.from(this.text);
  }

  shuffleChars() {
    const charsArray = this.toCharArray();
    return charsArray.length ? StringTransformer.shuffleArray(charsArray).join('') : this.text;
  }

  reverseChars() {
    this.text = this.toCharArray().reverse().join('');
  }

  removeVowels() {
    this.text = this.text.replace(/[aeiouAEIOU]/g, '');
  }

  removeConsonants() {
    this.text = this.text.replace(/[^aeiouAEIOU\s]/g, '');
  }

  toWordArray() {
    this.text = this.text.trim() === '' ? [] : this.text.split(/\s+/);
  }

  reverseWords() {
    this.text = this.toWordArray().reverse().join(' ');
  }

  // Helper function to shuffle an array (used by shuffleChars)
  static shuffleArray(inputArray) {
    if (!Array.isArray(inputArray)) throw new Error('Input must be an array');
    const array = [...inputArray];
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}

module.exports = StringTransformer;
