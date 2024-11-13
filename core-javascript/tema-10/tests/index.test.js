const {
  startTimer,
  stopTimer,
  toggleTimer,
  resetTimer,
} = require('../src/index');

jest.useFakeTimers(); // Simulamos los temporizadores

describe('Cronómetro Tests', () => {
  let updateDisplayMock;
  let setIntervalSpy;
  let clearIntervalSpy;

  beforeEach(() => {
    updateDisplayMock = jest.fn();
    setIntervalSpy = jest.spyOn(global, 'setInterval');
    clearIntervalSpy = jest.spyOn(global, 'clearInterval');
    jest.clearAllTimers();
  });

  afterEach(() => {
    try {
      stopTimer();
    } catch (error) {
      // Ignoramos el error si no está en marcha
    }
    jest.clearAllMocks();
  });

  test('debería iniciar el cronómetro y actualizar la pantalla', () => {
    startTimer(updateDisplayMock);
    jest.advanceTimersByTime(1000);
    expect(updateDisplayMock).toHaveBeenCalledWith(0, 1);

    jest.advanceTimersByTime(1000);
    expect(updateDisplayMock).toHaveBeenCalledWith(0, 2);
    expect(setIntervalSpy).toHaveBeenCalledTimes(1);
  });

  test('debería detener el cronómetro correctamente', () => {
    startTimer(updateDisplayMock);
    jest.advanceTimersByTime(2000);
    stopTimer();
    expect(clearIntervalSpy).toHaveBeenCalledTimes(1);
  });

  test('debería lanzar un error al iniciar si ya está en marcha', () => {
    startTimer(updateDisplayMock);
    expect(() => startTimer(updateDisplayMock)).toThrow('El cronómetro ya está en marcha');
  });

  test('debería lanzar un error al detener si no está en marcha', () => {
    expect(() => stopTimer()).toThrow('El cronómetro no está en marcha');
  });

  test('debería manejar correctamente los minutos y segundos', () => {
    startTimer(updateDisplayMock);
    jest.advanceTimersByTime(59000);
    expect(updateDisplayMock).toHaveBeenCalledWith(0, 59);

    jest.advanceTimersByTime(1000);
    expect(updateDisplayMock).toHaveBeenCalledWith(1, 0);
  });

  test('debería alternar entre iniciar y detener el cronómetro', () => {
    toggleTimer(updateDisplayMock);
    jest.advanceTimersByTime(59000);
    expect(updateDisplayMock).toHaveBeenCalledWith(0, 59);

    jest.advanceTimersByTime(1000);
    expect(setIntervalSpy).toHaveBeenCalledWith(expect.any(Function), 1000);

    toggleTimer(updateDisplayMock);
    expect(clearIntervalSpy).toHaveBeenCalledTimes(1);

    toggleTimer(updateDisplayMock);
    jest.advanceTimersByTime(1000);
    expect(updateDisplayMock).toHaveBeenCalledWith(0, 1);
  });

  test('debería lanzar un error al intentar detener si no está en marcha', () => {
    expect(() => stopTimer()).toThrow('El cronómetro no está en marcha');
  });

  test('debería lanzar un error al intentar iniciar si ya está en marcha', () => {
    startTimer(updateDisplayMock);
    expect(() => startTimer(updateDisplayMock)).toThrow('El cronómetro ya está en marcha');
  });

  test('debería reiniciar el cronómetro', () => {
    startTimer(updateDisplayMock);
    jest.advanceTimersByTime(2000);
    resetTimer(updateDisplayMock);
    expect(updateDisplayMock).toHaveBeenCalledWith(0, 0);
    expect(clearIntervalSpy).toHaveBeenCalledTimes(1);
  });
});
