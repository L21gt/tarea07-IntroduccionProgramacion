/**
 * Uso de .call( )
 * 
Problema I (15 puntos)
Cambiar el contexto de `this`

Escribe una función llamada `saludar` que tome un parámetro
`nombre` y devuelva un saludo personalizado. Luego, crea un objeto
`persona` con una propiedad `nombre`. Utiliza el método `call()` para
llamar a la función `saludar` con el contexto del objeto `persona`.

Si lo deseas apoyate en la siguiente estructura:
// Función saludar
function xxxxx(xxxxxx) {
return `Hola, ${xxxxx}!`;
}

// Objeto persona
const xxxxx = {
xxxxxx: 'Juan'
};

// Llamar a la función saludar con el contexto de persona usando call()
const saludo = xxxxxx.call(persona, persona.nombre);

// Imprimir el saludo
console.log(saludo); // Debe imprimir: Hola, Juan!
 */

// crear la funcion de saludar que tome el parametro 'nombre'
function saludar (nombre) {
    return `Hola, ${nombre}!`;
}

// crear el objeto 'persona' con la propiedad 'nombre'
const persona = {
    nombre: 'Juan'
};

// Llamar a la función saludar con el contexto de persona usando call()
const saludo = saludar.call(persona, persona.nombre);

//imprimir el saludo
console.log("*************** Problema I ***************");
console.log(saludo); 
console.log(" ");
console.log("==========================================================");



//-----------------------------------------------------------------------------------
/**
 * Problema II (15 puntos)
Cambiar el contexto de `this` en un método de objeto
Crea un objeto `auto` con una propiedad `marca` y un método
`mostrarMarca` que devuelva un mensaje con la marca del auto. Luego,
crea otro objeto `moto` con una propiedad `marca`. Utiliza el método
`call()` para llamar al método `mostrarMarca` del objeto `auto` con el
contexto del objeto `moto`.

// Objeto auto
const xxxx = {
xxxxx: 'Toyota',
xxxxxxxxxxxx: function() {
return `La marca del auto es ${this.marca}.`;
}
};

// Objeto moto
const xxxx = {
marca: 'Honda'
};

// Llamar al método mostrarMarca del objeto auto con el contexto de
//moto usando call()
const mensaje = auto.xxxxxxxxxxxx.xxxx(moto);

// Imprimir el mensaje
console.log(mensaje); // Debe imprimir: La marca de la moto es Honda.
 */