function createObject(name, subs) {
  // tu código aquí
  return {
    name,
    subscribers: subs,
    hash: name.lenght * subs,
    getStatus() {
      return `El canal de ${name} tiene ${subs} subscritores`;
    },
  };
}
console.log(createObject('eli', 100).getStatus()); // El canal de pepe tiene 100 sub
console.log(createObject('eli', 100).hash); // 300
console.log(createObject('eli', 100).name); // eli
console.log(createObject('eli', 100).subscribers); // 100
console.log(createObject('eli', 100).getStatus()); // El canal de pepe tiene 100 sub
console.log(createObject('eli', 100).hash); // 300
