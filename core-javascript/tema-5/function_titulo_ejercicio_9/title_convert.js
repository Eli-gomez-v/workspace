// Write function title() return text on first capital rest tolowercase.
// Letting unuseful the rest caracteres on the text.
// using "" it's pre condition.
// no eslin no-undef.
function titleCase() {
  // Elimina espacios extra y divide el texto en palabras.
  // eslint-disable-next-line no-undef
  const cleanedText = text.replace(/\s+/g, ' ');
  // Capitaliza la primera letra de cada palabra y convierte el resto en minúsculas.
  return cleanedText
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

// eslint-disable-next-line no-undef

// eslint-disable-next-line no-undef
document.getElementById('convert').addEventListener('click', () => {
  // eslint-disable-next-line no-undef
  const inputText = document.getElementById('inputText').value;
  const result = titleCase(inputText);
  // eslint-disable-next-line no-undef
  document.getElementById('result').textContent = result;
});
