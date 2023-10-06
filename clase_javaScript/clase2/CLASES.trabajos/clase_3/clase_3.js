class blusas {
    constructor(color, tamaño) {
            this.tamaño = tamaño;
        this.color = color;
    }
}
let blu = new blusas("azul", "Grande");
let blus = new blusas("rosas", "corta");
let blusaa = []
blusaa.push(blu, blus)
console.log("COMPOSICION DE LISTA:")
console.log(blus)