
// declarar la función

// función recibe parámetro sin retornar ningún valor
function saludar(nombre, edad) {

    console.log(`Hola, ${nombre}. Tu edad es ${edad}`)
}

// utlizar la función

// saludar("Alberto", 32)  // invocación de una función

// saludar("Luis", 40)

// saludar("Diana", 21)

// console.log(`Hola, . Tu edad es `)

// función que recibe parámetros y retonar un retorna un resultado -- > la suma
function sumar(num1, num2){
    let resultado = num1 + num2
    return resultado
}

let suma = sumar(2,2)

console.log(suma)

// función anónima
const multiplicar = function(num1, num2) {
    return num1 - num2
}

// por buena práctica las varibles en donde se almacenará una función de crean con const
// Función anónima de tipo fecha
const restar = (num1, num2) => {
    return num1 - num2
}

console.log(restar(10,1))
