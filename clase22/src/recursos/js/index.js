//Exportación nombrada
import {obtenerDatos} from './productos.js'
import{renderizarProductos, filtrarPorTalle} from './funciones.js'
import {url_productos} from './config.js'


//Trabajo con persistencia (Local Storage)

const arreglo= [1,2,3,4]
const valorAguardar = JSON.stringify(arreglo) //Convierte el array en cadena para poder guardarlo 
localStorage.setItem('materia',valorAguardar) //Guarda y lo convierte en cadena

const valor = localStorage.getItem('materia') //Obtiene lo guardado pero es una cadena
const valorConvertido = JSON.parse(valor)

console.log(typeof valorConvertido)

/////////////////////////////////////////////////////////

const productosMascotas = await obtenerDatos(url_productos)

//Tarea determinar cuando deberiamos de utilizar esto
// obtenerDatos(url_productos).then((datos)=>{

// })

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

