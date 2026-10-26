//Exportación no nombrada
//import productos from './productos.js'

//Exportación nombrada
import {productosMascotas} from './productos.js'
import{renderizarProductos, filtrarPorTalle} from './funciones.js'

//Referenciamos un elemento del DOM a partir de su ID
const contenedorProductos = document.getElementById("contenedor-productos")

//Llamas a la función pasándole los dos argumentos
//renderizarProductos(contenedorProductos, productosMascotas);
const arrayFiltrado = filtrarPorTalle(productosMascotas,'M')
renderizarProductos(contenedorProductos, arrayFiltrado)



