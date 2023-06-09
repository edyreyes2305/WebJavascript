console.log("Sesion JS02");

// -------- Función declarada ------
// function declaration, function statement
// Una características es que las funciones declaradas tiene hoisting
//console.log("El resultado de 5*10= " + multiplica(5,10)); // invocando la función
multiplica(5, 10); // invocando la función sin retorno
multiplica(8, 8);
multiplica(-4, 2);

/* Sintaxis
 function nombreFuncionCamelCase ( parametros ){
   instrucciones;
 }
*/
function multiplica(operandoA, operandoB) {
  const resultado = operandoA * operandoB;
  console.log(resultado);
}

function divide(dividendo, divisor) {
  return dividendo / divisor;
}

console.log(divide(5, 2)); // 2.5
console.log(divide(5, "2")); // 2.5
console.log(divide("5", "2")); // 2.5
console.log(divide("5 0", "2")); // NaN

/* 
{ // este es un bloque de código
 const operandoA = 5
 const operandoB = 10
 const resultado = operandoA * operandoB;
 console.log(resultado);
} */

//--------------Funciones expresadas-----------------
// Function expressions
// Son declaradas dentro de la asignación de una variable
// Estas funciones pueden ser anónimas (no tienen nombre)
// Las funciones expresadas no tiene hoisting, por que no se
// carga en memoria hasta que se utilice.

/*Sintaxis
const nombreVariable = function nombreFuncion( parámetros) {
    instrucciones;
}
*/

const sum = function sumatoria(a, b) {
  return a + b;
};

const resta = function (a, b) {
  return a - b;
};

const potencia = function (a, b) {
  return a ** b;
};

console.log(sum(9, 9)); // 18
console.log(resta(90, 20)); // 70

//---------- Funciones autoinvocadas ----------------
// self-invoking functions
// se autoinvocan, se pueden definir con funciones anónimas

(function () {
  console.log("Me autoinvoco en la función");
})();

// ---------- Funciones Flecha -----------------------
// Arrow Functions
// Son funciones similares a las funciones expresada, pero:
// No requieren la palabra function
// Si tiene una sola instrucción no requiere las {}
// Si la instrucción es el mismo retorno, no requiere la palabra return

/*
const areaRectangulo = function(base, altura){
    return base * altura;
  }*/

const areaRectangulo = (base, altura) => base * altura;

console.log("Área de rectangulo 5x3: " + areaRectangulo(5, 3));

// ------------- Parámetros default ----------------------------

/**
 * Este comentario es la documentación de la función
 * @param {number} base esto es la descripción de base
 * @param {number} altura esto es la descripción de altura
 * @returns área del rectángulo
 */
const areaTriangulo = (base = 1, altura = 1) => (base * altura) / 2;

console.log("Área de triángulo b:5 a:10 = " + areaTriangulo(5, 10));
console.log("Área de triángulo b:8 = " + areaTriangulo(8));

// --------------- Parámetros rest ------------------------------
// Rest Parameters   Sintaxis:  ...nombreParametro
// Nos permite representar una serie de valores indefinidos en los argumentos
// Estos se presentan como un array.
// Debe estar al final de la lista de parámetros

function sumatoriaVariosNumeros(a, b, ...restoDatos) {
  let suma;
  suma = a + b;

  for (let index = 0; index < restoDatos.length; index++) {
    suma += restoDatos[index]; // suma = suma + restoDatos[index]
  }

  return suma;
}

console.log("Sumatoria de varios números: " + sumatoriaVariosNumeros(5, 6));
console.log(
  "Sumatoria de varios números: " + sumatoriaVariosNumeros(5, 6, 9, 10)
);
console.log("Sumatoria: " + sumatoriaVariosNumeros(5, 6, 9, 10, 20, 50)); //100

// --------------- Funciones de Callback --------------------
// Función que se pasa a otra función como argumento, para luego invocarse
// para completar algún tipo de rutina o acción.

// 3 funciones, una que imprima en consola, alert, DOM h1.
// 1 parámetro de entrada.
// no tiene return.

// Función que imprime un mensaje en la consola
function printToConsole(mensaje) {
  console.log(mensaje);
}

// Función que muestra una alerta en la pantalla
function showAlert(mensaje) {
  alert(mensaje);
}

// Función que agrega un encabezado h1 al DOM
function addH1ToDOM(mensaje) {
  const h1 = document.createElement("h1");
  h1.innerText = mensaje;
  document.body.appendChild(h1);
}

const addH1 = (mensaje) =>{
    document.querySelector("#div").innerHTML = `<h1>${mensaje}</h1>`
};

function getNamePrintToConsole(   ){
    const name = prompt("Dime tu nombre");
    const text = `Hola ${name}, espero tengas un gran día`;
    printToConsole(text);
}
function getNamePrintToDOM(   ){
    const name = prompt("Dime tu nombre");
    const text = `Hola ${name}, espero tengas un gran día`;
    addH1(text);
}
function getNameAndPrint( opcion   ){ // Esta es la buena
    const name = prompt("Dime tu nombre");
    const text = `Hola ${name}, espero tengas un gran día`;
    if (opcion === 1)
      printToConsole(text);
    else if(opcion===2)
      addH1(text);
    else
      showAlert(text);
}


const student1Courses = ["Math", "English", "Programming", "Biology", "Physics", "Music"];
const student2Courses = ["Geography", "Spanish", "Programming", "Music"];
//Dos for
function cursosEnComun (arr,arr1) {
    for (let i=0; i < arr.length; i++) {
        for (let j=0; j < arr1.length; j++) {
            if (arr[i] == arr1[j]){
            console.log ("Cursos en común: " + arr[i]);
            }
        }
    } 
}

// filter e includes

function cursosEnComunV2(student1Courses,student2Courses) {
    return student1Courses.filter(course => student2Courses.includes(course) );
}


cursosEnComun( student1Courses, student2Courses );
console.log("Cursos en comun: "+String(cursosEnComunV2(student1Courses, student2Courses)));

//Ejercicio
/* const frase = "pepe pecas pica papas con un pico y una pala"
const contarChar = (frase) => {
    const result = frase.split(" ");
    return result;
}
const resultado = contarChar(frase);
console.log("El total de caracteres de la frase es: "+contarChar(frase).join("").length);
console.log(" El total de P's en esta frase es: "+resultado);
 */
//otra forma
phrase = 'Pepe Pecas Pica Papas Con Un Pico y Una Pala'

const countChar = (p, phrase) => phrase.toLowerCase().split("").filter(c => c == p).length;

console.log("Cantidad de letras 'p':", countChar('p', phrase));


const recursiva = (numero) => {
    if (numero === 1) {
        console.log("Saludo "+numero);
    } else {
        recursiva(numero - 1);
        console.log("Saludo "+numero);
        
    }
}

console.log(recursiva(10));

//getNameAndPrint(1);
//getNameAndPrint(2);
//getNameAndPrint(3);
// getNamePrintToConsole();
// getNamePrintToDOM();