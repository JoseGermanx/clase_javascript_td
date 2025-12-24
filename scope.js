// ambito global

let edad = 34

let nombre = "Luis"

console.log("edad", edad)


function saludar() {
    // ambito local
    let nombre = "Juan"
    console.log(`Saludos ${nombre} dentro de la función`, edad)

}

saludar()

console.log(nombre)