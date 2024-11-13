import StringTransformer from './transformer';
// DOM Elements
const inputText = document.getElementById('inputText');
const additionalText = document.getElementById('additionalText');
const results = {
  charArray: document.getElementById('charArray'),
  shuffledChars: document.getElementById('shuffledChars'),
  reversedChars: document.getElementById('reversedChars'),
  noVowels: document.getElementById('noVowels'),
  noConsonants: document.getElementById('noConsonants'),
  wordArray: document.getElementById('wordArray'),
  reversedWords: document.getElementById('reversedWords'),
};

let transformer = null;

// Validate input and show error if invalid
function validateInput(input) {
  if (!input || typeof input !== 'string' || input.trim() === '') {
    setText(document.getElementById('errorMessage'), 'Por favor, ingresa un texto válido.');
    return false;
  }
  return true;
}

// Utility function to set text content in an element
function setText(element, content) {
  const el = element;
  el.textContent = content;
}

// Function to update results in the DOM
function displayResults(transformer) {
  setText(results.charArray, `Array de caracteres: ${transformer.toCharArray().join(', ')}`);
  setText(results.shuffledChars, `Caracteres aleatoriamente: ${transformer.shuffleChars()}`);
  setText(results.reversedChars, `Inversión de caracteres: ${transformer.reverseChars()}`);
  setText(results.noVowels, `Texto sin vocales: ${transformer.removeVowels()}`);
  setText(results.noConsonants, `Texto sin consonantes: ${transformer.removeConsonants()}`);
  setText(results.wordArray, `Array de palabras: ${transformer.toWordArray().join(', ')}`);
  setText(results.reversedWords, `Inversión de palabras: ${transformer.reverseWords()}`);
}

// Initialize transformer with input text
document.getElementById('runTests').addEventListener('click', () => {
  const text = inputText.value.trim();

  if (validateInput(text)) {
    transformer = new StringTransformer(text);
    displayResults(transformer);
  } else {
    clearResults();
  }
});

// Add additional text to transformer
document.getElementById('addText').addEventListener('click', () => {
  if (transformer) {
    const newText = additionalText.value.trim();
    if (validateInput(newText)) {
      transformer.add(newText);
      displayResults(transformer);
      additionalText.value = ''; // Clear the additional input field
    }
  } else {
    alert('Primero ingresa el texto inicial.');
  }
});

// Utility function to set text content in an element
function setText(element, content) {
  const el = element;
  el.textContent = content;
}

// Utility function to clear the results
function clearResults() {
  Object.values(results).forEach((result) => setText(result, ''));
}
