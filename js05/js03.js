console.log("Sesion Js03");

// ----- Declaración de bloque --------------------

{
    /*
    Las variables declaradas con let y const
    solo tendrán alcance(scope) dentro del bloque
    o bloques anidados.
    */
 let nombre = "Sergio";
 const apellido = "Torres";
 let edadSergio = 39, edadLuis = 25; 
 // let edadSergio = 39;
 // let edadLuis = 25;
 let numCohorteSergio = numCohorteLuis = 26;
 // var numCohorteLuis = 26
 // let numCohorteSergio = numCohorteLuis;

   {
    /*
     bloque anidado
     Si una variable local tiene el mismo nombre de
     una varible global o de bloque superior, la varible
     local oculta las otras variables, para que la variable
     local sea usada.
     */
    let nombre = "Luis";
    const apellido = "SP";  
    console.log(`Me llamo ${nombre} ${apellido}`);
    console.log(`Sergio: ${edadSergio} años`); // 39
    console.log(`Luis ${edadLuis} años`) // 25
    console.log(`Sergio cohorte: ${numCohorteSergio} `); // 26
    console.log(`Luis cohorte ${numCohorteLuis} `) // 26

}
console.log(`Me llamo ${nombre} ${apellido}`);
console.log(`Sergio: ${edadSergio} años`); // 39
console.log(`Luis ${edadLuis} años`) // 25
console.log(`Sergio cohorte: ${numCohorteSergio} `); // 26
console.log(`Luis cohorte ${numCohorteLuis} `) // 26
}
//console.log(`Me llamo ${nombre} ${apellido}`); Las variables no estaán definidas
//console.log(`Sergio: ${edadSergio} años`); // Las variables no estaán definidas
//console.log(`Luis ${edadLuis} años`) // Las variables no estaán definidas
console.log(`Luis cohorte ${numCohorteLuis} `) // 26
//console.log(`Sergio cohorte: ${numCohorteSergio} `); //  Las variables no estaán definidas


//---------------- Condicional if-else ----------------------------
/*
La condicional if ejecuta una sentencia si una condición especificada es evaluada
como verdadera.
sintaxis:
    if(condición) sentencia;
    if(condición) {
      sentencias;
    }
    if(condicion) sentencia;
    else sentencia;
    if(condición) {
      sentencia;
    } else {
      sentencia;
    }
    if(condición) {
      sentencia;
    } else if(condición 2) {
      sentencia;
    } else if(condición 3) {
      sentencia;
    } else if(condición n) {
      sentencia;
    } else {
      sentencia
    }
*/

const temperatura = 100;
let mensaje;
//if (temperatura === 21) mensaje = `Temperatura ideal ${temperatura}`;
//else mensaje = `${temperatura} grados no es ideal`;
/* if (temperatura === 21) 
  mensaje = `Temperatura ideal ${temperatura}`; 
else if( temperatura > 21 && temperatura < 40) 
  mensaje = `Temperatura de ${temperatura} grados es caliente`;
else if( temperatura > 40) 
  mensaje = `Temperatura de ${temperatura} grados es super caliente, bendiciones`;
else if( temperatura < 21) 
  mensaje = `Temperatura de ${temperatura} grados es fría`;
else 
  mensaje = `Temperatura de ${temperatura} grados no existe`;

console.log(mensaje); */

// --------------------- Ejercicio -----------------------------------------
/*
 Preguntar por el númer de mes, del 1 al 12 (prompt o DOM)
 de acuerdo al mes desplegar en un Alert (o en el DOM) la estación del año.
 mes 12, 1, 2 = invierno
 mes 3, 4, 5 = Primavera
 mes 6, 7, 8 = Verano
 mes 9, 10, 11 = Otoño
 Usar if-else
*/

const getEstacion = (mes=document.getElementById("mes").value) => {
    switch(parseInt(mes)) {
        case 1: case 12: case 2:
            alert("INVIERNO");
            break;
        case 3: case 4: case 5:
            alert("PRIMAVERA");
            break;
        case 6: case 7: case 8:
            alert("VERANO");
            break;
        case 9: case 10: case 11:
            alert("OTOÑO");
            break;
        default:
            alert("Es otro planeta");
            break;
    }

}

function saludo(numero) {
  if (numero > 1) {
    saludo(numero - 1);
  }
  console.log("Saludo " + numero);
}

//saludo(10);

const saludo2 = (numero) => {(numero>1) ? saludo(numero - 1) : {}; console.log("Saludo "+numero);};


saludo2(5);