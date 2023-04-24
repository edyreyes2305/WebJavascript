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