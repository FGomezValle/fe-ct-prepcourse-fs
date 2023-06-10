/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function crearGato(nombre, edad) {
   // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
   // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
   // Además, agregar una propiedad con el nombre "meow".
   // La propiedad "meow" será una función que retorne el string: "Meow!".
   // Retornar el objeto.
   // Tu código:

   function decirMeow() {
      return "Meow!";
   }

   var gato = {nombre: nombre, edad:edad, meow: decirMeow}
   return gato;
}
//  var resultado =crearGato("lucas","2");
//  console.log(resultado);

function nuevoUsuario(nombre, email, password) {
   // Debes crear un nuevo objeto.
   // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
   // Retornar el objeto.
   // Tu código:

   var usuario = {nombre: nombre, email: email, password: password}
      return usuario;
}

// var resultado =nuevoUsuario("cachin","cachinpg@gmail.com","catalina");
//  console.log(resultado);

function agregarPropiedad(objeto, propiedad) {
   // Recibirás un objeto por parámetro.
   // Debes agregarle una propiedad con el nombre recibido por parámetro.
   // Esta propiedad será igual al valor `null`.
   // Retornar el objeto.
   // Tu código:

   objeto[propiedad] = null;
   return objeto;

}
// var resultado =agregarPropiedad({"BTS": "talentosos"},"apruebadebalas");
//  console.log(resultado);

//  {"BTS": "talentosos", "apruebadebalas": null}

function invocarMetodo(objeto, metodo) {
   // El parámetro "metodo" es un string que coincide con el nombre de 
   // una propiedad del objeto recibido.
   // Esta propiedad contiene una función en su interior. 
   // Debes invocarla/ejecutarla.
   // [NOTA]: no necesitar retornar nada.
   // Tu código:


   return objeto[metodo]()
}


function mifuncion(){
   return "cualquiercosa";
 }
//  var resultado =invocarMetodo({"propiedad": mifuncion}, "propiedad");
//  console.log(resultado);

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
   // El parámetro "objetoMisterioso" posee una propiedad con el 
   // nombre "numeroMisterioso".
   // Debes multiplicar este número por 5 y retornar el resultado.
   // Tu código:
   return objetoMisterioso["numeroMisterioso"] *5
   
}
// var resultado =multiplicarNumeroDesconocidoPorCinco({"numeroMisterioso":9});
//  console.log(resultado);

function eliminarPropiedad(objeto, propiedad) {
   // El parámetro "propiedad" es una propiedad del objeto que recibes.
   // Debes eliminarla del objeto y retornarlo finalmente.
   // Tu código:

   delete objeto[propiedad]
   return objeto;
}

// var fabian = {"ojos": "negros", "cabello":"negro","nacionalidad":"peruano"
// }
// var resultado = eliminarPropiedad(fabian,"nacionalidad");
//  console.log(resultado);

function tieneEmail(objetoUsuario) {
   // Verifica si el "objetoUsuario", en su propiedad "email", 
   // posee un valor definido.
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:
   
   if (objetoUsuario["email"] != undefined){
      return true;
   }
   else{
      return false;
   }
}

// var resultado = tieneEmail({"email": "asdasd"});
//  console.log(resultado);


function tienePropiedad(objeto, propiedad) {
   // Verifica si el objeto recibido posee una propiedad con el mismo 
   // nombre que el parámetro "propiedad".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:

   if( Object.keys(objeto).includes(propiedad) ){
      return true;
   }
   else{
      return false;
   }

}

// let resultado = tienePropiedad({"propiedad": "hkjhkj"},"propiedad");
// console.log(resultado);


function verificarPassword(objetoUsuario, password) {
   // Verifica si el valor de la propiedad "password" del "objetoUsuario"
   //  coincide con el valor del parámetro "password".
   // En ese caso retornar true. Caso contrario, false.
   // Tu código:

   if (objetoUsuario["password"] == password){
      return true;
   }
   else{
      return false;
   }
   
}
   // var resultado = verificarPassword({"password": "tefy"},"tefy");
   // console.log(resultado);

function actualizarPassword(objetoUsuario, nuevaPassword) {
   // Reemplaza la contrseña guardada en la propiedad "password" del
   //  "objetoUsuario".
   // La nueva contraseña la recibes por parámetro.
   // Retornar el objeto.
   // Tu código:

   objetoUsuario["password"] = nuevaPassword;
   return objetoUsuario;

}
//  var resultado = actualizarPassword({"password":"bts"},"tefy");
//  console.log(resultado);


function agregarAmigo(objetoUsuario, nuevoAmigo) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" 
   // igual a un arreglo.
   // Debes agregar el "nuevoAmigo" al final de este arreglo.
   // Retornar el objeto.
   // Tu código:

objetoUsuario["amigos"].push(nuevoAmigo);
return objetoUsuario;

}

// var resultado = agregarAmigo({"amigos": ["tefy", "April", "Fabian"]}, "Cachin");
// console.log(resultado);


function pasarUsuarioAPremium(objetoMuchosUsuarios) {
   // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
   // Cada usuario tiene una propiedad llamada "esPremium".
   // Define el valor de la propiedad de todos los usuarios como true.
   // Retornar el arreglo.
   // Tu código:
   for (let i = 0; i < objetoMuchosUsuarios.length; i++) {
      objetoMuchosUsuarios[i]["esPremium"] = true;  
   }

   return objetoMuchosUsuarios;
}

// var resultado = pasarUsuarioAPremium([{"esPremium": "yeh"}, {"esPremium":"yeh"}]);
// console.log(resultado);

function sumarLikesDeUsuario(objetoUsuario) {
   // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es 
   // un arreglo.
   // Este arreglo contiene objetos (post).
   // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
   // Debes sumar los likes de todos los post y retornar el resultado.
   // Tu código:
   let sumalikes = 0


   for(i = 0; i<objetoUsuario["posts"].length; i++){
      sumalikes = sumalikes + objetoUsuario["posts"][i]["likes"];
   }
   return sumalikes;
}

// var resultado = sumarLikesDeUsuario({"posts":[{"likes":2},{"likes":3}]});
// console.log(resultado);

function agregarMetodoCalculoDescuento(objetoProducto) {
   // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
   // Esta propiedad debe ser una función que multiplique el precio del producto
   // por el porcentajeDeDescuento.
   // El "objetoProducto" posee una propiedad "precio" 
   // y una propiedad "porcentajeDeDescuento".
   // Luego debes restar del precio total del producto ese valor de descuento.
   // Retornar el precio final.
   // Ejemplo:
   // Precio ---> 10
   // PorcentajeDeDescuento ---> 0.2
   // Precio final ---> 8
   // Tu código:

   function precioProductoPorPorcentajeDescuento(precio,porcentajeDeDescuento){
      return precio * porcentajeDeDescuento;
   }
   objetoProducto["calcularPrecioDescuento"] = precioProductoPorPorcentajeDescuento;
   
   let precioFinal = objetoProducto["precio"] - objetoProducto["calcularPrecioDescuento"](objetoProducto["precio"], objetoProducto["porcentajeDeDescuento"]);
   return precioFinal; 
   

}

// var resultado = agregarMetodoCalculoDescuento({"precio":"10", "porcentajeDeDescuento":"0.2"});
// console.log(resultado);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearGato,
   nuevoUsuario,
   agregarPropiedad,
   invocarMetodo,
   multiplicarNumeroDesconocidoPorCinco,
   eliminarPropiedad,
   tieneEmail,
   tienePropiedad,
   verificarPassword,
   actualizarPassword,
   agregarAmigo,
   pasarUsuarioAPremium,
   sumarLikesDeUsuario,
   agregarMetodoCalculoDescuento,
};
