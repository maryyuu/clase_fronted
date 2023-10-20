
let peso = parseInt(prompt('Ingrese su peso en kilos: '))
let estatura = parseFloat( prompt('Ingrese su estatura:'))
console.log(estatura)
console.log(peso)
function imc() { 
    let respuesta;
    respuesta = peso / estatura **2;
    return respuesta;
    
}
console.log(imc(peso,estatura))