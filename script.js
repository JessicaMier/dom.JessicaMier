class Destino {
    constructor(id, nombre, desde, precio, imagen) {
        this.id = id
        this.nombre = nombre
        this.desde = desde
        this.precio = precio
        this.imagen = imagen

    }
}
const destino1 = new Destino(1, "Bariloche", "Buenos Aires", 35000, "fotos/bariloche.jpg")
const destino2 = new Destino(2, "Jujuy", "Buenos Aires", 28000, "fotos/jujuy.jpg")
const destino3 = new Destino(3, "Villa Carlos Paz", "Buenos Aires", 27000, "fotos/carlosPaz.jpg")
const destino4 = new Destino(4, "Cataratas del Iguazu", "Buenos Aires", 32000, "fotos/cataratasIguazu.jpg")
const destino5 = new Destino(5, "San Rafael", "Buenos Aires", 28000, "fotos/mendoza.jpg")
const destino6 = new Destino(6, "Salta", "Mendoza", 25000, "fotos/salta.jpg")

const destinos = [destino1, destino2, destino3, destino4, destino5, destino6]

const divDestinos = document.getElementById("destinos")
destinos.forEach(destino => {
    divDestinos.innerHTML += `
    <div id= "destinos${destino.id}"class="card lugares" style="width: 18rem;">
        <div class="card-body">
            <img src="${destino.imagen}" class="card-img-top" alt="...">
            <h5 class="card-title destinos">${destino.nombre}</h5>
            <p class="card-text destinos">Desde: ${destino.desde}</p>
            <p class="card-text destinos">Precio: $${destino.precio}</p>
        </div>
    </div>
        
        `
})
//-----------------------------------formulario con eventos--------------------
class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }
}
const personas = []

const form = document.getElementById("idForm")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    let username = document.getElementById("idUser").value
    let email = document.getElementById("idEmail").value
    let password = document.getElementById("idPassword").value

    const user = new User(username, email, password)

    personas.push(user)

    console.log(personas)

    form.reset()
})

const vuelo = document.getElementById("vuelo")
const botonBuscar = document.getElementById("botonBuscar")

vuelo.addEventListener("input",()=>{
    console.log(vuelo.value)
})

vuelo.addEventListener("change", ()=>{
    console.log(vuelo.value)
})
botonBuscar.addEventListener("click", ()=>{
    console.log(vuelo.value)
}) 
