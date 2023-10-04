alert("Holaa")
/*var lista = new Array();
for (var i = 0; i <2 ; i++){
    var numero = prompt("diguite numero")
    lista.push(numero)
}
document.write(lista)
console.log(
lista.sort( (a, b) =>{
    return a - b
}))
alert(lista)*/
/*var lista2 = []
var x = prompt("digite numero minimo")
var y = prompt("digite numero maximo")
for (var i = x; i <= y; i++) { 

    lista2.push(i)
    console.log(lista2[i])
}
document.write(lista2)*/

/*var x = prompt("Digite numero entero")
var contador = 0
if (x <= 0.0) {
    for (i = 0; i <= x; i++) {
        numero = x % 2
        if (numero ==0) { 
            
        }
    }
} else { 
    console.log("NUMEROS ENTEROS")
}*/
let numero = 1;
var acomulado =0
var contador = 0
while (numero!=0) {
    numero = parseInt(prompt("Digite un numero"))
    acomulado+=numero
    
    contador++
    
}

console.log("acumulado"+acomulado)
console.log("contador"+contador)