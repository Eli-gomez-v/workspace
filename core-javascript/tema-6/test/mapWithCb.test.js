const mapWithCb = require('../mapWithCb/mapWithCb');

test('calls the callback with each element of the array', () => {
  const mockCallback = jest.fn((x) => x * 2);
  const result = mapWithCb([1, 2, 3], mockCallback);

  // Verifica que la devolución de llamada se haya llamado tres veces.
  expect(mockCallback.mock.calls.length).toBe(3);
  // Verifica que la devolución de llamada se haya llamado con los argumentos correctos.
  expect(mockCallback.mock.calls[0][0]).toBe(1);
  expect(mockCallback.mock.calls[1][0]).toBe(2);
  expect(mockCallback.mock.calls[2][0]).toBe(3);

  // Verifica que el resultado sea el esperado.
  expect(result).toEqual([2, 4, 6]);
});

test('handles an empty array correctly', () => {
  const mockCallback = jest.fn((x) => x * 2);
  const result = mapWithCb([], mockCallback);

  // Verifica que la devolución de llamada se haya llamado con el índice correcto.
  expect(mockCallback.mock.calls.length).toBe(0);

  // Verifica el resultado final de mapWithCb.
  expect(result).toEqual([]);
});

test('returns a new array with the results of calling a provided function on every element in the array', () => {
  const mockCallback = jest.fn((x) => x * 2);
  const result = mapWithCb([1, 2, 3], mockCallback);
  expect(result).toEqual([2, 4, 6]);
});
