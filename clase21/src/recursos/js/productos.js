async function obtenerDatos(url){
    const repuesta = await fetch(url)
    const datos = await repuesta.json() //<----- obtiene los datos del cuerpo y transforma un objeto JSON (bien formado) a un objeto JS

    return datos
}

//  OTRA FORMA DE OBTENER LOS DATOS JUGANDO CON LAS PROMESAS, EJECUTANDO CODIGO SOLO CUANDO SE CUMPLIO EL FETCH
// obtenerDatos().then((datos)=>{
//     console.log(datos)

// Aquí iria todo el código que necesite la interfaz utilizando JSON

//El resto de código que NO necesite los datos del JSON, van por fuera de la función

// })


export {obtenerDatos}