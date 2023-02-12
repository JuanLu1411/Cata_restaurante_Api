
const boton = document.getElementById("api")
const datos = document.getElementById("data")
const Nombre_Plato = document.getElementById("nombre_Plato")
const precio = document.getElementById("precio")
const imagen = document.getElementById("imagen")
const descripcion = document.getElementById("descripcion")

// Obtenemos los datos de todos los pokemon 
fetch('https://63e13870dd7041cafb442cd8.mockapi.io/platos')
        .then(res => res.json())
        .then(data => {
            Nombre_Plato.innerText = `${JSON.stringify(data[0].plato)}`
            precio.innerText = `${JSON.stringify(data[0].precio)}`
            descripcion.innerText = `${JSON.stringify(data[0].descripcion)}`

        });