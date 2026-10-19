// Funciones

// Funciones de declaración
function suma(a,b){
    //console.log(a + b)
    return a + b
}

// Invocar / ejecutar / llamar la función
const resultado = suma(15,10)
console.log(resultado)



// Funciones flecha --> anónima
const resta= (a,b)=>{
    return a - b
}

//Version simplificada sin return ni llaves
// const resta = (a,b) => a + b

// const restasimplificada = a => a + 5

//Callback
const a = (cb)=>{
    console.log("Se ejecutó a")
    cb()
}

//Nuestro Callback
const b = ()=>{
    console.log("Se ejecutó el Callback b")
}

a(b)

