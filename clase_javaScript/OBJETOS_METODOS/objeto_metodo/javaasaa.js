function saludar() { 
    let msj = "Saludoo"
    return msj;
}

saludar();
const m = () => { 
    let msj = "Saludoo"
}

//OBJETO CREACION
/*
const person1 ={ 
    nombre: "Maryuri",
    apellido: "Lopez",
    edad: 18,
    celular:3333333333,
    gustos:['musica', 'programacion','viajar'],
    soltero: true,
    residencia: {
        Barro:"Bello Horizonte",
        pais: "Colombia",
        ciudad:"Popayan",
    },
    caminar: function () {
        console.log("la persona caminar")
    },
    civil: function () { 
        this.soltero = false;
    }
}
console.log(person1)
console.log(person1.residencia.pais)
console.log(person1.soltero);
*/






let celular1 = {
    almacenamiento: ['512 GB'],
    bateria: ['5000 mAh'],
    marca1: "Samsung ",
    referencia:"Samsung Galaxy S23 ULTRA",
    pantalla: ". Super AMOLED", 
    pulgadas:{
            dpi: 580,
            alto: 2048,
            ancho: 750,
    },
        bateria2: function () {
        this.bateria = "muchaaa"
    }
        
}
console.log("Bateria Inicial era equvalente a: "+celular1.bateria)
console.log(celular1.bateria2())
console.log("Cambios de bateria Reflegados: "+celular1.bateria)
    
let celular2 = {
    almacenamiento: ['256 GB'],
    bateria: ['5000 mAh'],
    marca1: "IOS ",
    celular:true,
    referencia:"Iphone 15 pro max ",
    pantalla: "Super AMOLED", 
    pulgadas:{
            dpi: 580,
            alto: 2048,
            ancho: 750,
    },
    celullarr: function () { 
        this.celular = false;
    }

}
console.log("Inicialmentes era: "+celular2.celular)
console.log(celular2.celullarr())
console.log("Cambio: "+celular2.celular)

let celular3 = {
    almacenamiento: ['128 GB'],
    bateria: ['5000 mAh'],
    marca1: "IOS ",
    referencia: "Iphone 15 pro max ",
    pantalla: "Super AMOLED",
    pulgadas: {
        dpi: 580,
        alto: 2048,
        ancho: 750,
    },
    pantallaa: function () { 
        this.pantalla ="IPS LCD "
    }

}
console.log("PANTALLA INICIAL: "+celular3.pantalla)
console.log(celular3.pantallaa())
console.log("PANTALLA FINAL: "+celular3.pantalla)