//Estructura de control de flujo --> de bucle
// for (let i = 0; i < 10; i++){
//     console.log(i)
// }

//Arreglos / Array
//  const numeros = [1,2,3,4,5,[1,2]]

// console.log(numeros[5][1])
// for (let i = 0; i < numeros.length; i++){
//     console.log(numeros[i])
// }

//Objetos
const persona ={
    edad: 20,
    estudia: true,
    nombre: "Jorge",
    redes:[
        'instagram',
        'tiktok',
        'youtube'
    ],
    otros:{
        pasatiempo: 'Pintar',
        mascotas: 2
    },
    caminar: function name(params){}
}

console.log(persona.edad)
console.log(persona.redes[1])
console.log(persona.otros.pasatiempo)