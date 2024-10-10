function createObject(name, subs) {
    //tu código aquí
    return {
      this.name = name, 
      this.subscribers = subs,
      hash = name.lenght * subs,
      getStatus : function () {
      return `El canal de ${name} tiene ${subs} subscritores`}
      }
  }
  console.log(createObject('eli', 100).getStatus()) // El canal de pepe tiene 100 sub
 co