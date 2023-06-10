/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

// class Persona {
   // Crea el constructor de la clase "Persona".
   // Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio".
   // Debe tener un método llamado "detalle" que nos devuelva un objeto con las propiedades de la persona y
   // sus valores.

//    constructor(nombre, apellido, edad, domicilio){
//    this.nombre = nombre;
//    this.apellido = apellido;
//    this.edad = edad;
//    this.domicilio = domicilio;
//    }

//    detalle(){
//       return {
//          "nombre" : this.nombre,
//          "apellido" : this.apellido,
//          "edad" : this.edad,
//          "domicilio" : this.domicilio,
//       };
//    }
// }

// let persona1 = new Persona("tefy", "gomez", "28", "sancarlos");
// console.log(persona1.detalle());

function crearInstanciaPersona(nombre, apellido, edad, domicilio) {
//    // En este ejercicio debes crear una instancia de la clase construida en el ejercicio anterior.
//    // Recibirás las propiedades por parámetro.
//    // Retornar la instancia creada.
//    // Tu código:

   class Persona {
      constructor(nombre, apellido, edad, domicilio){
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.domicilio = domicilio;
      }
   
      detalle(){
         return {
            "nombre" : this.nombre,
            "apellido" : this.apellido,
            "edad" : this.edad,
            "domicilio" : this.domicilio,
         };
      }
   
   }
}
return crearInstanciaPersona;


let persona1 = new Persona("tefy", "gomez", "28", "sancarlos");
   console.log(persona1.detalle());
   let persona2 = crearInstanciaPersona("fabito", "peña", "27", "sancarlos");
   console.log(persona2.detalle());

// function agregarMetodo(Persona) {
   // La función agrega un método "datos" a la clase "Persona".
   // Este método toma la propiedad "nombre" y "edad", y devuelve el string:
   // Ejemplo: "Juan, 22 años".
   // Tu código:
   
//    Persona.prototype.datos = function(){
//       return `${this.nombre}, ${this.edad} años`;
//    }
// }


// class Persona {
//    constructor(nombre, apellido, edad, domicilio){
//    this.nombre = nombre;
//    this.apellido = apellido;
//    this.edad = edad;
//    this.domicilio = domicilio;
//    }

//    detalle(){
//       return {
//          "apellido" : this.apellido,
//          "domicilio" : this.domicilio,
//       };
//    }
// }

// agregarMetodo(Persona);

// let persona1 = new Persona("juan", "asd", "22", "asd")
// console.log(persona1.datos());





/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
// module.exports = {
//    crearInstanciaPersona,
//    agregarMetodo,
//    Persona,
// };
