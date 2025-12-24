

const elem = document.getElementById("parrafo")

elem.innerText= "Un nuevo texto al párrafo, sustituyendo el anterior."

elem.className = "color-red"

const heading = document.getElementsByTagName("h1")

const boton = document.getElementById("mi-boton")

boton.addEventListener("click", ()=>{
  elem.innerText = "Haz hecho click en botón"
})

boton.onmousemove = () => {alert("Se movio en mouse")}