

document.addEventListener('DOMContentLoaded', ()=> {

const contenedor = document.getElementById('contenido')

const boton = document.getElementById('btnCambiar')

const parrafo = document.getElementById('parrafo')

contenedor.style.backgroundColor = "gray"

parrafo.innerText = "Cambiar el contenido del párrafo"

boton.addEventListener('click', ()=>{

    contenedor.innerHTML = `
     <h2>Contenido actualizado</h2>
      <p>Este contenido fue insertado usando <strong>innerHTML</strong>.</p>
      <ul>
        <li>Podemos cambiar texto</li>
        <li>Agregar listas</li>
        <li>O eliminar lo anterior</li>
      </ul>
    `
})

})