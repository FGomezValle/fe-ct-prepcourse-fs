/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

// function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
// return array[0];
// }

// let resultado = devolverPrimerElemento(["hola"]);
// console.log(resultado);

// function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:

// return array[1];
// }

// let resultado = devolverUltimoElemento(["hola","mundo"]);
// console.log (resultado);


// function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:

//    return array.length;

// }
//  let resultado = obtenerLargoDelArray(["hola","mundo","BTS"]);
//  console.log(resultado);
 

// function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
//   for(i=0; i<array.length; i++){
//     if(array[i] < array.length){
//       return array[i] + 1;
//     }
//   }
  
// }

// let resultado = incrementarPorUno([2,3,5,6,7]);
// console.log(resultado);

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:

   array.push(elemento);
   return array;

}
// let res = agregarItemAlFinalDelArray(["BTS"], "mundo");
// console.log(res);

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:

   array.unshift(elemento);
   return array;
}

// let resultado = agregarItemAlComienzoDelArray(["mundo"],"hola");
// console.log(resultado);

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:

   palabras.join(" ");
   return palabras;

}

// let resultado = dePalabrasAFrase(["Hello","World"]);
// console.log(resultado);

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:

   if(array.includes(elemento)){
      return true;
   }
   else{
      return false;
   }

}

// let resultado = arrayContiene(["mundo", "planeta"],"planeta");
// console.log(resultado);

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   let suma = 0;

   for(i=0; i<arrayOfNums.length; i++){
      suma = suma + arrayOfNums[i];
   }
   return suma;

}
// let resultado = agregarNumeros([1,2,3,4]);
// console.log(resultado);

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var suma = 0
   for(i=0; i<resultadosTest.length; i++){
   suma = suma + resultadosTest[i];}
   return suma / resultadosTest.length;}


// var resultado = promedioResultadosTest( [12,14,16,18,20] )
// console.log(resultado);

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   return Math.max(...arrayOfNums);
}
// var resultado = numeroMasGrande( [12,14,16,18,20] )
// console.log(resultado);


function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:

}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del 
   // arreglo cuyo valor sea mayor que 18.
   // Tu código:
   finalArray = [];
   for(i=0; i < array.length; i++){
      if(array[i] > 18){
         finalArray.push(array[i]);
      }
   }
   return finalArray;
}

// var resultado = cuentoElementos( [12,14,16,18,20, 21] )
// console.log(resultado);


function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   
      if(numeroDeDia==1 && numeroDeDia ==7){
         return "Es fin de semana";}
      else{
         return "Es dia laboral";
      }
      }

   // var resultado = diaDeLaSemana(4)
   // console.log(resultado);



function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   
   // Tu código:
   // 1. convertir numero a string
   // 2. obtener primer caracter del string
   // 3. convertir el caracter obtenido en numero de nuevo
   console.log(num, "es el numero");
   console.log(num.toString(), "es el numero en string");
   console.log(num.toString().charAt(0), "es el primer digito en string");
   console.log(parseInt(num.toString().charAt(0)), "es el primer digito en entero");
   
   return parseInt(num.toString().charAt(0)) == 9
}
//    var resultado = empiezaConNueve(94564681681)
//    console.log(resultado);

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:

   //comparar el primer elemento del array con todos los demas

   
   var elemento1 = array[0];
   for(i=0; i < array.length; i++) {
      console.log(elemento1);
      console.log(array[i]);
      if(elemento1 != array[i]) {
         return false;
      }
   }
   return true;
}
   
// var resultado = todosIguales(["2","2","2","2"])
//                              
// console.log(resultado);


function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   // 1. declarar un arreglo inicial de algunos meses del año
   // 2. recorrer el arreglo 
   // 3. ubicar algunos meses y guardarlos en un nuevo arreglo
   // 4 retornar el nuevo arreglo
   // 5. comparar el arreglo inicial con el nuevo arreglo
   // 6. retornar un mensaje con los meses que no estan

   var enero = false;
   var marzo = false;
   var noviembre = false;
   for(i=0; i< array.length; i++) {
      if(array[i] == "Enero"){
         enero = true;
      }
      if(array[i] == "Marzo"){
         marzo = true;
      }
      if(array[i] == "Noviembre"){
         noviembre = true;
      }
   }


   if(enero == true && marzo == true && noviembre == true) {
      return ["Enero", "Marzo", "Noviembre"]
   }
   else {
      return "mensaje"
   }
}

// var resultado = mesesDelAño(["Enero","Noviembre", "Marzo"])
// console.log(resultado);


function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   array = [0,1,2,3,4,5,6,7,8,9,10]
   return array.map(elemento => elemento * 6);
}
// var resultado = tablaDelSeis()
// console.log(resultado);

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var valoresMayoresACien = [];
   for(i=0; i< array.length; i++){
      if (array[i] >= 101){
         valoresMayoresACien.push(array[i]);
      }
   }
   return valoresMayoresACien;
}

// var resultado = mayorACien([34,153,80,150])
// console.log(resultado);
/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
// module.exports = {
//    devolverPrimerElemento,
//    devolverUltimoElemento,
//    obtenerLargoDelArray,
//    incrementarPorUno,
//    agregarItemAlFinalDelArray,
//    agregarItemAlComienzoDelArray,
//    dePalabrasAFrase,
//    arrayContiene,
//    agregarNumeros,
//    promedioResultadosTest,
//    numeroMasGrande,
//    multiplicarArgumentos,
//    cuentoElementos,
//    diaDeLaSemana,
//    empiezaConNueve,
//    todosIguales,
//    mesesDelAño,
//    tablaDelSeis,
//    mayorACien,
//    breakStatement,
//    continueStatement,
// };
