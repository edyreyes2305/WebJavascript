console.log("Tipos de dato Number: ",  12, -45, 45/0, -56/0, 56*"hola");

console.log("Valor maximo: ", Number.MAX_VALUE);
const misDatos = {
    nombre: "Edgar",
    apellido: "Reyes",
    edad: 22,
    isBelicoso: false,
    musicaPreferida: {
        rap: "Rich Flex",
        corridosTumbados: "Ella baila sola"
    },
    nombreCompleto: function fullName(){
        return this.nombre+" "+this.apellido+" Soy el belicon.";
    }
}
const misDatosInstagram = {
    nombre: "Edy",
    apellido: "Reyes",
    edad: 22,
    isBelicoso: true,
    musicaPreferida: {
        corridosTumbados: "Ella baila sola"
    },
    nombreCompleto: function fullName(){
        return this.nombre+" "+this.apellido+" Soy el belicon.";
    }
}



console.log("Datos completos: ", misDatos);
console.log("Musica de fin de semana: ", misDatos.musicaPreferida.corridosTumbados);
console.log("Nombre completo: ", misDatos.nombreCompleto());

console.log("Nombre completo: ", misDatosInstagram.nombreCompleto());

const cancionesPP = [
    "Soy el belicon",
    "El azul",
    "El tsurito",
    "AMG",
    {
        2020: 5,
        2021: 30,
        2022: 56,
        total: 91
    }
]

console.log(cancionesPP[1]);
console.log("Canciones hechas en el anio 2021: ", cancionesPP[4][2021]);

//Conversion de datos

const myNumber = 420;
console.log("Num. minutos de la sesion: " + myNumber);
const myNumberTxt = String(myNumber);
console.log("Num. minutos de la sesion: " + myNumberTxt);

// ToNumber
const myString = "420";
const sumatoria = 80 + Number(myString);

const myStringInteger = "420.2020";
const sumatoriaEntera = 80 + parseInt(myStringInteger);
console.log("Valor de sumatoria: "+sumatoriaEntera);