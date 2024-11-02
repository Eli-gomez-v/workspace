// Functions con Maps, Sets y WeakMaps.
// 1. Intersección de dos sets.
function intersectionOfSets(setA, setB) {
  return new Set([...setA].filter((value) => setB.has(value)));
}

// 2. Unión de dos sets.
function unionOfSets(setA, setB) {
  return new Set([...setA, ...setB]);
}

// 3. Diferencia entre dos sets.
function differenceOfSets(setA, setB) {
  return new Set([...setA].filter((value) => !setB.has(value)));
}

// 4. Subset: Verifica si un set es subconjunto de otro.
function isSubset(setA, setB) {
  return [...setA].every((value) => setB.has(value));
}

// 5. Encontrar el valor máximo y mínimo de un set.
function findMinMax(set) {
  if (set.size === 0) return { min: undefined, max: undefined };
  const values = [...set];
  return {
    min: Math.min(...values),
    max: Math.max(...values),
  };
}

// 6. Valores en un rango numérico dentro de un set.
function valuesInRange(set, min, max) {
  return new Set([...set].filter((value) => value >= min && value <= max));
}

// Exportación de las funciones para pruebas y ejecución.
module.exports = {
  intersectionOfSets,
  unionOfSets,
  differenceOfSets,
  isSubset,
  findMinMax,
  valuesInRange,
};
