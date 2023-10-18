let pantalla = ''
fetch('https://rickandmortyapi.com/api/character')
    .then(respuesta => {
        return respuesta.json();
    })

    .then(datos => {
        for (let i = 0; i < datos.results.length; i++) { 
            pantalla += `<li>${datos.results[i].name}
            </li> <img src="${datos.results[i].image}">` 
        }
        document.getElementById('posteo').innerHTML = pantalla;
    })