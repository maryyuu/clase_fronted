class Celular {
    constructor(almacenamiento, bateria, IOS) {
        this.almacenamiento = almacenamiento;
        this.bateria = bateria;
        this.IOS = IOS;
    }
    saludar() {
        console.log("hello")
    }
}

let cel1 = new Celular("5000 GB", "5444", "Huawei");
let cel2 = new Celular("545", "5000", "IOS")
let array = []
array.push(cel1, cel2)
console.log("COMPOSICION DE LISTA:")
console.log(array)