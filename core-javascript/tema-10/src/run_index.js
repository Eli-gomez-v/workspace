/* eslint-disable no-use-before-define */
const readline = require('readline');
const { stopTimer, toggleTimer, resetTimer } = require('./index');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const updateDisplay = (minutes, seconds) => {
  console.log(`Tiempo: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
};

const handleMenuSelection = (option) => {
  switch (option) {
    case '1':
      try {
        toggleTimer(updateDisplay);
      } catch (error) {
        console.error(error.message);
      }
      break;
    case '2':
      try {
        stopTimer();
        updateDisplay(0, 0); // Resetea el tiempo en pantalla después de detener
      } catch (error) {
        console.error(error.message);
      }
      break;
    case '3':
      resetTimer(updateDisplay);
      break;
    case '4':
      rl.close();
      return;
    default:
      console.log('Opción no válida. Por favor, selecciona una opción del 1 al 4.');
  }
  // Vuelve a mostrar el menú después de cada opción
  showMenu();
};

const showMenu = () => {
  console.log('\nOpciones:');
  console.log('1. Iniciar/Pausar');
  console.log('2. Detener');
  console.log('3. Reiniciar');
  console.log('4. Salir');
  rl.question('Selecciona una opción: ', handleMenuSelection);
};

rl.on('close', () => {
  console.log('\nCronómetro terminado.');
  process.exit(0); // Finaliza el proceso
});

// Mostrar el menú inicial
showMenu();
