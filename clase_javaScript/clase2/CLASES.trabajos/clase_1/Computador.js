class Computador {
    constructor(marca, tipo, color) {
        this.marca = marca,
            this.tipo = tipo;
        this.color = color;
    }
}
let com = new Computador("DELL", "Grande", "Negro")
let com2 = new Computador("Samsung", "portatil", "Morado")
let list2 = []
list2.push(com, com2)
console.log("COMPOSICION DE LA LISTA")
console.log(list2)