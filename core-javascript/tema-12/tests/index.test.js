const {
  intersectionOfSets,
  unionOfSets,
  differenceOfSets,
  isSubset,
  findMinMax,
  valuesInRange,
} = require('../src/index'); // Importar las funciones de operaciones en Sets

describe('Funciones de operaciones en Sets', () => {
  let setA;
  let setB;

  beforeAll(() => {
    setA = new Set([1, 2, 3, 4, 5]);
    setB = new Set([3, 4, 5, 6, 7]);
  });

  test('Intersection of sets', () => {
    expect(intersectionOfSets(setA, setB)).toEqual(new Set([3, 4, 5]));
  });

  test('Union of sets', () => {
    expect(unionOfSets(setA, setB)).toEqual(new Set([1, 2, 3, 4, 5, 6, 7]));
  });

  test('Difference of sets', () => {
    expect(differenceOfSets(setA, setB)).toEqual(new Set([1, 2]));
  });

  test('Check subset', () => {
    const subsetSet = new Set([1, 2, 3]);
    expect(isSubset(subsetSet, setA)).toBe(true);
    expect(isSubset(setA, subsetSet)).toBe(false);
  });

  test('Find min and max in set', () => {
    expect(findMinMax(setA)).toEqual({ min: 1, max: 5 });
  });

  test('Values in range in set', () => {
    expect(valuesInRange(setA, 2, 4)).toEqual(new Set([2, 3, 4]));
  });
});
