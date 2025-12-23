


// solicitar al usuario los números con los que vamos a operar

let num1 = parseInt(prompt("Ingrese el primer número: "))
let num2 = parseInt(prompt("Ingrese el segundo número: "))

// operaciones matemáticas
console.log("--- Resultados de operaciones artiméticas")
console.log("La suma es:", num1 + num2)
console.log("La resta es:", num1 - num2)
console.log("La multiplicación es:", num1 * num2)
console.log("La división es:", num1 / num2)
console.log("El resto es:", num1 % num2)

// sentencias y operadores
console.log("--Sentencias y condicionales")

if (num1 > 0) {
    console.log(`El número ${num1} es postivo!`)
} else {
    console.log(`El número ${num1} es negativo!`)
}

if (num1 % 2 === 0) {
    console.log(`El número ${num1} es par!`)
} else {
    console.log(`El número ${num1} es impar!`)
}

