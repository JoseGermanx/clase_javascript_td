



function programaPrincipal(saludo) {
    console.log("Esta es la ejecución principal, del programa!")

    saludo()
}

function saludoFinal() {
    console.log("Este es el mensaje que ejecutaremos como callback")
}

programaPrincipal(saludoFinal)