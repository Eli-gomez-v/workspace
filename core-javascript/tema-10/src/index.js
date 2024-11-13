let interval = null;
let seconds = 0;
let minutes = 0;

/**
 * Inicia el cronómetro utilizando `setInterval`.
 * @param {function} updateDisplay - Función de callback para actualizar la pantalla.
 * @throws {Error} Lanza un error si el cronómetro ya está en marcha.
 * @returns {void}
 */
function startTimer(updateDisplay) {
  if (interval !== null) {
    throw new Error('El cronómetro ya está en marcha');
  }

  interval = setInterval(() => {
    seconds += 1;
    if (seconds === 60) {
      seconds = 0;
      minutes += 1;
    }
    updateDisplay(minutes, seconds);
  }, 1000);
}

/**
 * Detiene el cronómetro utilizando `clearInterval`.
 * @throws {Error} Lanza un error si el cronómetro no está en marcha.
 * @returns {void}
 */
function stopTimer() {
  if (interval === null) {
    throw new Error('El cronómetro no está en marcha');
  }

  clearInterval(interval);
  interval = null;
  seconds = 0;
  minutes = 0;
}

/**
 * Alterna entre iniciar y detener el cronómetro.
 * @param {function} updateDisplay - Función de callback para actualizar la pantalla.
 * @returns {void}
 */
function toggleTimer(updateDisplay) {
  if (interval) {
    stopTimer();
  } else {
    startTimer(updateDisplay);
  }
}

/**
 * Reinica el cronómetro.
 * @param {function} updateDisplay - Función de callback para actualizar la pantalla.
 * @returns {void}
 */
function resetTimer(updateDisplay) {
  stopTimer();
  seconds = 0;
  minutes = 0;
  updateDisplay(minutes, seconds);
}

module.exports = {
  startTimer, stopTimer, toggleTimer, resetTimer,
};
