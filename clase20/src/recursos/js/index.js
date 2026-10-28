//Exportación no nombrada
//import productos from './productos.js' -->la podemos importar con el nombre que queramos, por eso solo 1 se permite

//Exportación nombrada
import {productosMascotas} from './productos.js'
import{renderizarProductos, filtrarPorTalle} from './funciones.js'

//Referenciamos un elemento del DOM a partir de su ID
const contenedorProductos = document.getElementById("contenedor-productos")
const contenedorEvento = document.getElementById("boton-evento")
const contenedorDialogo = document.getElementById("dialogo-evento")
const carro = document.getElementById("carro")

//Array que contiene los productos en el carrito
const productosCarritos = [] 

//Escuchador
contenedorEvento.addEventListener('click', (evento)=>{
    //console.log(evento)
    const arrayFiltrado = filtrarPorTalle(productosMascotas,'M')
    renderizarProductos(contenedorProductos, arrayFiltrado)
    contenedorDialogo.showModal()  //.showModal() bloquea la pantalla al usuario    
})

//Llamas a la función pasándole los dos argumentos
renderizarProductos(contenedorProductos, productosMascotas);

//Creamos un array que tenga todos los elementos
const botonesCarro = contenedorProductos.querySelectorAll('.boton-agregar-carro')
//console.log(botonesCarro)

botonesCarro.forEach((boton)=>{
    boton.addEventListener('click',(evento)=>{
        const idProducto = boton.dataset.id
        console.log("Dios quiera que ande esto ejem click -> Id: " + idProducto)
        productosCarritos.push(idProducto)
        console.log(productosCarritos)
        carro.textContent = productosCarritos.length
    })
})
