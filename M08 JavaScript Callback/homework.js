/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:

   return nombre.charAt(0).toUpperCase() + nombre.slice(1);

}

// let resultado = mayuscula("stephany");
// console.log(resultado);

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
cb();
   
}

function callback(){
   console.log("Soy un callback");
}

// invocarCallback(callback);

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   return cb(num1,num2);
}

function sumar(num1,num2){
   return num1 + num2;
}

function multiplicar(num1,num2){
   return num1 * num2;
}

// let resultado = operacionMatematica(2,3,sumar);
// // console.log(resultado);

// let resultado2 = operacionMatematica(2,3,multiplicar);
// console.log(resultado2);

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:

   return cb(arrayOfNumbers);
}

function sumar(arreglo){
   var suma = 0;
   for (i = 0; i < arreglo.length; i++) {
     suma += arreglo[i];
   }
   return suma;
}


// let resultado = sumarArray([1,2,3,4,5], sumar);
// console.log(resultado);

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   for (let i = 0; i < array.length; i++) {
      cb(array[i]);
   }
}
 

function callback(elemento){
   console.log(`se está ejecutando ${elemento}`)
}


// forEach(["a","b","c"],callback);



function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código
   let nuevo_arreglo = [];
   for(i = 0; i < array.length; i++){
      nuevo_arreglo.push(cb(array[i]));
   }
   return nuevo_arreglo; 

}

// function callback(elemento){
//    return elemento;
// }
// let resultado = map(["a","b","c","d"],callback);
// console.log(resultado);


function filter(arrayOfStrings, cb) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:

   let nuevoarreglo = [];
   for(i=0; i< arrayOfStrings.length; i++){
      if( cb(arrayOfStrings[i])){
         nuevoarreglo.push(arrayOfStrings[i]);
      }
   }
   return nuevoarreglo;
}

function empiezacona(elemento){
   if (elemento.startsWith("a")) {
      return true
   } else {
      return false
   }
}

let resultado = filter(["tefy", "fabian","achin","april"], empiezacona);
console.log(resultado);


// /*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
// module.exports = {
//    mayuscula,
//    invocarCallback,
//    operacionMatematica,
//    sumarArray,
//    // forEach,
//    map,
//    filter,
// };
