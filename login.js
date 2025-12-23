

// datos almacenados previamente por el usuario:

let usuarioValido = "correo@google.com"
let contrasenaValida = "12345"


// crear sistema para el login!

// obtener datos para el login
let usuarioIngresado = prompt("Por favor ingresa tu usuario: ")
let contrasenaIngresada = prompt("Por favor ingresa tu contraseña válida: ")


// con un condicional se valida que los datos sean correctos

if (usuarioValido === usuarioIngresado && contrasenaValida === contrasenaIngresada) {
    console.log("Haz ingresado correctamente!!")
    alert("Haz ingresado correctamente!!")
} else {
    console.log("Hubo un error, intentalo nuevamente!!")
    alert("Hubo un error, intentalo nuevamente!!")
}
