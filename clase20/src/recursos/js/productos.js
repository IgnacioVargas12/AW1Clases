const productosMascotas = [
  {
    id: 1,
    nombre: "Collar ajustable para perros",
    imagen: "./recursos/imagenes/productos/perro_correa.jpg",
    descripcion: "Cómodo collar ajustable de nailon resistente para paseos seguros diarios.",
    talles: ["S", "M", "L"],
    precio: 15.99
  },
  {
    id: 2,
    nombre: "Correa extensible automática",
    imagen: "./recursos/imagenes/productos/correa_extensible_perro.webp",
    descripcion: "Correa retráctil resistente con freno seguro y diseño ergonómico moderno.",
    talles: ["M", "L"],
    precio: 24.50
  },
  {
    id: 3,
    nombre: "Cama acolchada para mascotas",
    imagen: "./recursos/imagenes/productos/cama_mascotas.webp",
    descripcion: "Suave cama redonda y cálida ideal para descanso de perros.",
    talles: ["S", "M", "L"],
    precio: 35.00
  },
  {
    id: 4,
    nombre: "Arnés antitirones acolchado",
    imagen: "./recursos/imagenes/productos/arnes_antitirones.webp",
    descripcion: "Arnés cómodo que evita tirones durante los paseos con mascotas.",
    talles: ["S","L"],
    precio: 22.99
  },
  {
    id: 5,
    nombre: "Abrigo impermeable para lluvia",
    imagen: "./recursos/imagenes/productos/abrigo_impermeable.webp",
    descripcion: "Chaqueta impermeable con capucha para proteger perros en días lluviosos.",
    talles: ["S", "M", "L"],
    precio: 18.75
  },
  {
    id: 6,
    nombre: "Suéter tejido de lana",
    imagen: "./recursos/imagenes/productos/abrigo_lana.webp",
    descripcion: "Cálido suéter tejido a mano perfecto para días de invierno.",
    talles: ["S", "M"],
    precio: 16.50
  },
  {
    id: 7,
    nombre: "Pañuelo bandana estilizado",
    imagen: "./recursos/imagenes/productos/pañuelo_bandana.webp",
    descripcion: "Bandana de algodón suave con estampados divertidos para mascotas felices.",
    talles: ["S","L"],
    precio: 8.99
  },
  {
    id: 8,
    nombre: "Chaleco salvavidas canino",
    imagen: "./recursos/imagenes/productos/chaleco_salvavidas.webp",
    descripcion: "Chaleco flotador ajustable con asa resistente para seguridad en piscina.",
    talles: ["M", "L"],
    precio: 29.99
  },
  {
    id: 9,
    nombre: "Disfraz melena de león",
    imagen: "./recursos/imagenes/productos/disfraz_melena_leon.webp",
    descripcion: "Divertida peluca con orejas para transformar a tu perro fácilmente.",
    talles: ["M", "L"],
    precio: 14.25
  },
  {
    id: 10,
    nombre: "Botitas protectoras antideslizantes",
    imagen: "./recursos/imagenes/productos/botitas_protectoras.webp",
    descripcion: "Zapatos protectores de goma antideslizante para cuidar las patas caninas.",
    talles: ["S", "M"],
    precio: 19.99
  }
];

let unaVariable = "hola" //Las variables al ser exportadas son de solo LECTURA
//2 Maneras de exportar 
//1 manera: Exportación no nombrada -> Solo puede haber una sola
//export default productosMascotas

//2 manera: Exportación nombrada. Se construye y exporta un objeto -> Puede haber la cantidad que queramos
export {productosMascotas} //Si queremos pasar más objetos, lo escribimos dentro de las llaves despues de una coma