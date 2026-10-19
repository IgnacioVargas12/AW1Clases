//Métodos de arreglos

const numeros = [2,8,12,50]

//ForEach --> no devuelve nada
//El callback se ejecuta una vez por elemento
numeros.forEach((numero)=>{
    console.log(numero)
})

// Map --> es un loop --> devuelve un nuevo arreglo
const numerosIncrementados = numeros.map((numero)=>{
    return numero + 1
})

console.log(numerosIncrementados)

// Filter (devuelve un nuevo arreglo) y Find (devuelve un nuevo valor)
