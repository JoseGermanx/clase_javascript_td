// datos almacenados previamente por el usuario:

let usuarioValido = "correo@google.com"
let contrasenaValida = "12345"


// crear sistema para el login!

// obtener datos para el login
let usuarioIngresado = prompt("Por favor ingresa tu usuario: ")
let contrasenaIngresada = prompt("Por favor ingresa tu contraseña válida: ")


function inicioDeSesion(usuario, contrasena){
    // con un condicional se valida que los datos sean correctos
    if (usuarioValido === usuario && contrasenaValida === contrasena) {
       return true
    }
    return false
}

function mensajeDeRespuesta(acceso) {
return acceso ? "Ingreso Correcto" : "Acceso no válido"
}


const result = inicioDeSesion(usuarioIngresado, contrasenaIngresada)

const mensaje = mensajeDeRespuesta(result)

document.getElementById("mensaje").innerText = mensaje






