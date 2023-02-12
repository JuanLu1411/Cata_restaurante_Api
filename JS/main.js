
const boton = document.getElementsByClassName("api")
const datos = document.getElementsByClassName("data")
const Nombre_Plato = document.getElementsByClassName("nombre_Plato")
const precio = document.getElementsByClassName("precio")
const imagen = document.getElementsByClassName("imagen")
const descripcion = document.getElementsByClassName("descripcion")

fetch('https://63e13870dd7041cafb442cd8.mockapi.io/platos')
        .then(res => res.json())
        .then(data => {
            Nombre_Plato[0].innerText = `${JSON.stringify(data[0].plato)}`
            precio[0].innerText = `${JSON.stringify(data[0].precio)}`
            descripcion[0].innerText = `${JSON.stringify(data[0].descripcion)}`

            Nombre_Plato[1].innerText = `${JSON.stringify(data[1].plato)}`
            precio[1].innerText = `${JSON.stringify(data[1].precio)}`
            descripcion[1].innerText = `${JSON.stringify(data[1].descripcion)}`

            Nombre_Plato[2].innerText = `${JSON.stringify(data[2].plato)}`
            precio[2].innerText = `${JSON.stringify(data[2].precio)}`
            descripcion[2].innerText = `${JSON.stringify(data[2].descripcion)}`
            
            Nombre_Plato[3].innerText = `${JSON.stringify(data[3].plato)}`
            precio[3].innerText = `${JSON.stringify(data[3].precio)}`
            descripcion[3].innerText = `${JSON.stringify(data[3].descripcion)}`

            Nombre_Plato[4].innerText = `${JSON.stringify(data[4].plato)}`
            precio[4].innerText = `${JSON.stringify(data[4].precio)}`
            descripcion[4].innerText = `${JSON.stringify(data[4].descripcion)}`

            Nombre_Plato[5].innerText = `${JSON.stringify(data[5].plato)}`
            precio[5].innerText = `${JSON.stringify(data[5].precio)}`
            descripcion[5].innerText = `${JSON.stringify(data[5].descripcion)}`

            Nombre_Plato[6].innerText = `${JSON.stringify(data[6].plato)}`
            precio[6].innerText = `${JSON.stringify(data[6].precio)}`
            descripcion[6].innerText = `${JSON.stringify(data[6].descripcion)}`

            Nombre_Plato[7].innerText = `${JSON.stringify(data[7].plato)}`
            precio[7].innerText = `${JSON.stringify(data[7].precio)}`
            descripcion[7].innerText = `${JSON.stringify(data[7].descripcion)}`

            Nombre_Plato[8].innerText = `${JSON.stringify(data[8].plato)}`
            precio[8].innerText = `${JSON.stringify(data[8].precio)}`
            descripcion[8].innerText = `${JSON.stringify(data[8].descripcion)}`

            Nombre_Plato[9].innerText = `${JSON.stringify(data[9].plato)}`
            precio[9].innerText = `${JSON.stringify(data[9].precio)}`
            descripcion[9].innerText = `${JSON.stringify(data[9].descripcion)}`

            Nombre_Plato[10].innerText = `${JSON.stringify(data[10].plato)}`
            precio[10].innerText = `${JSON.stringify(data[10].precio)}`
            descripcion[10].innerText = `${JSON.stringify(data[10].descripcion)}`

            Nombre_Plato[11].innerText = `${JSON.stringify(data[11].plato)}`
            precio[11].innerText = `${JSON.stringify(data[11].precio)}`
            descripcion[11].innerText = `${JSON.stringify(data[11].descripcion)}`

        });