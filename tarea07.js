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

// crear Objeto auto
const auto = {
    marca: 'Toyota',
    mostrarMarca: function() {
        return `La marca del auto es ${this.marca}.`;
    }
};

// crear objeto moto
const moto = {
    marca: 'Honda'
};

/* Llamar al metodo mostrarMarca del objeto auto con el contexto de 
moto usando call()*/
const mensaje = auto.mostrarMarca.call(moto);

// Imprimir el mensaje
console.log("*************** Problema II ***************");
console.log(mensaje); 
console.log(" ");
console.log("==========================================================");



//-----------------------------------------------------------------------------------
/**
 * Problema III ( 10 Puntos)
Crea dos objetos, `persona1` y `persona2`, cada uno con una propiedad
`nombre`. Define una función `saludar` que devuelva un mensaje de
saludo utilizando la propiedad `nombre`. Usa `call()` para invocar la
función `saludar` con el contexto de `persona2`.
// Objeto persona1
const xxxxxxxx = {
xxxxxx: 'Juan'
};
// Objeto persona2
const xxxxxxxx= {
xxxxxx: 'María'
};
// Función saludar
function xxxxxxx() {
return `Hola, mi nombre es ${this.nombre}.`;
}
// Usar call() para invocar saludar con el contexto de persona2
const saludo = saludar.xxxx(persona2);
// Imprimir el saludo
console.log(saludo); // Debe imprimir: Hola, mi nombre es María.
 */

// creacion de objeto 'persona1'
const persona1 = {
    nombre:'Juan',
};

// creacion de objeto 'persona2'
const persona2 = {
    nombre: 'Maria'
};

// creacion de funcion saludar
function saludar () {
    return `Hola, mi nombre es ${this.nombre}`;
}

// Usar call() para invocar saludar con el contexto de persona2
const saludo1 = saludar.call(persona2);


// Imprimir el área del cuadrado
console.log("*************** Problema III ***************");
console.log(saludo1);
console.log(" ");
console.log("==========================================================");

//-----------------------------------------------------------------------------------

/**
 * Problema IV ( 10 Puntos)
Crea un objeto `rectangulo` con propiedades `ancho` y `alto`, y un
método `area` que calcule el área del rectángulo. Luego, crea un objeto
`cuadrado` con una propiedad `lado`. Usa `call()` para invocar el método
`area` del objeto `rectangulo` con el contexto del objeto `cuadrado`.

// Objeto rectangulo
const xxxxxxxxxx = {
xxxxx: 0,
xxxx: 0,
xxxx: function() {
return this.ancho * this.alto;
}
};

// Objeto cuadrado
const xxxxxxxx = {
xxxx: 5
};

// Usar call() para invocar area con el contexto de cuadrado
const areaCuadrado = rectangulo.area.call({ ancho: cuadrado.lado, alto:
cuadrado.lado });

// Imprimir el área del cuadrado
console.log(areaCuadrado); // Debe imprimir: 25
 */

//creacion de objeto 'rectangulo'
const rectangulo = {
    ancho: 0,
    alto: 0,
    area: function () {
        return this.ancho*this.alto;
    }
};

// creacion de objeto 'cuadrado'
const cuadrado = {
    lado: 5,
}

// Usar call() para invocar area con el contexto de cuadrado
const areaCuadrado = rectangulo.area.call({ancho: cuadrado.lado, alto: cuadrado.lado});

// Imprimir el área del cuadrado
console.log("*************** Problema IV ***************");
console.log(areaCuadrado);
console.log(" ");
console.log("==========================================================");

