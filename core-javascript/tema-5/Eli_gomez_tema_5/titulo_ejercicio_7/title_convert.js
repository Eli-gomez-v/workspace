// Write function title() return text on first capital rest tolowercase.
// using "" it's pre condition.
function titleCase() {
  const words = text.split('');
  let result = '';
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.length > 0) {
      const firstLetter = word.charAt(0).toUpperCase();
      const restOfWord = word.slice(1).toLowerCase();
      result += `${firstLetter + restOfWord} `;
    }
  }
  return result.trim();
}
function titleCase(text) {

  let cleanedText = text.replace(/\s+/g, ' ');
  return cleanedText
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

document.getElementById('convert').addEventListener('click', function() => {
  let inputText = document.getElementById('inputText').value;
  let result = titleCase(inputText.trim());
  document.getElementById('result').textContent = result;
});
