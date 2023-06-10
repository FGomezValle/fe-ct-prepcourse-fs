/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*1️⃣ EJERCICIO 01 1️⃣*/

// function crearUsuario() {
  // Crea una Clase de ES6 o una función constructora llamada "Usuario".
   // El constructor de esta clase debe tener las propiedades: "usuario", "nombre", "email" y "password".
   // El valor de cada propiedad la recibirá por parámetro.
   // Además, esta clase debe tener un método llamado "saludar".
   // Este método debe retornar el string: 'Hola, mi nombre es {{nombre}}'.
   // El valor {{nombre}} debe ser el nombre definido para la instancia de la clase.
   // Retornar la clase.
   // Tu código:

//    class Usuario {
//       constructor(usuario, nombre,email, password) {
//          this.usuario = usuario;
//          this.nombre = nombre;
//          this.email = email;
//          this.password = password;
//       }
//       saludar(){
//          return `Hola, mi nombre es ${this.nombre}`
//       }

//    }
//    return Usuario;
// }

// let Usuario = crearUsuario();
// let fabian = new Usuario("patito", "fabian", "asdasd", "nomebaño");
// console.log(fabian.saludar());

function agregarMetodoPrototype(Usuario) {
   Usuario.prototype.saludar = function(){
      return "Hello World!";
   }
}

class Usuario {
   constructor(usuario, nombre,email, password) {
      this.usuario = usuario;
      this.nombre = nombre;
      this.email = email;
      this.password = password;
   }
   saludar(){
      return `Hola, mi nombre es ${this.nombre}`
   }
}

// agregarMetodoPrototype(Usuario);
// let fabian = new Usuario("fabito", "fabian", "fabitonomebano@gmail.com", "renzo");
// console.log(fabian.saludar());



function agregarStringInvertida() {
   // Agrega un método al prototipo de "String" 
   // que devuelva la misma cadena de caracteres, pero invertida.
   // El método debe llamarse "reverse".
   // [PISTA]: necesitarás utilizar el objeto "this".

   String.prototype.reverse = function(){
         return this.split('').reverse().join('');
         }
}

agregarStringInvertida();
console.log("Stephany".reverse());

// /*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
// module.exports = {
//    crearUsuario,
//    agregarMetodoPrototype,
//    agregarStringInvertida
// };
