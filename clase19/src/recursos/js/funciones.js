//import {productosMascotas} from "./productos.js";

// Función que recibe un contenedor y un arreglo de productos, y genera el HTML correspondiente
const renderizarProductos = (contenedor, arregloProductos) => {
    let productosHTML = '';

    // Recorremos el arreglo recibido por parámetro
    arregloProductos.forEach((producto) => {
        productosHTML += `
            <article>
                <h3>${producto.nombre}</h3>
                <picture>
                    <img src="${producto.imagen}" alt="${producto.nombre}">
                </picture>
                <p>
                    ${producto.descripcion}
                </p>
                <ul>
                    <li>Talles: ${producto.talles}</li>
                    <li>Precio $ ${producto.precio}</li>
                </ul>
                <button>Agregar al carrito</button>
            </article>
        `;
    });

    // Opcional pero recomendado: inyectamos el HTML en el contenedor recibido
    contenedor.innerHTML = productosHTML;

    // Retornamos el string completo del HTML tal como lo pide la consigna
    return productosHTML;
};

//Filtrar productos por talles
function filtrarPorTalle(arreglo,talle){
    //.filter
    //retornar un arreglo filtrado
const productosFiltrados = arreglo.filter((producto)=>{
        return producto.talles.includes(talle);
    })
    return productosFiltrados;
}

export {renderizarProductos}
export {filtrarPorTalle}