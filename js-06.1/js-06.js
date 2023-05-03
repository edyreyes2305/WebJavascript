console.log("Sesion JS06");

// función definida
function findElementByIdFnc01 ( /*parametros*/ ){
    /* instrucciones */
    return 3*4;
}

// función expresada
const findElementByIdFnc02 = function ( /*parámetros*/) {
    return 3*4;
};

const findElementByIdFnc03 = (/*parámetros*/ ) => {
    return 3*4;
};

const findElementByIdFnc04 = () =>  3*4;

const findElementByIdFnc05 = variableParametro =>  3*4;

// const findElementById = ( nameOfDeveloper ) => {
//     const tituloRef = document.getElementById("titulo");

//     //tituloRef.innerHTML = tituloRef.innerHTML + nameOfDeveloper;
//     tituloRef.innerHTML += nameOfDeveloper;

// }
 // findElementById(", Sergio");

// const changeSubtitleById = ( newTxt ) => {
//     const subtitleRef = document.getElementById("subtitulo");
    
//     subtitleRef.innerHTML = ` ${subtitleRef.innerText}, <em>${newTxt}</em>`;

// }
// changeSubtitleById("viernes de cholos");

//------------ Encontrar elementos por su tag ----------------------------------
// getElementsByTagName()

const changeEmphasis = ( newTxt, url ) => {
    const emphasisRef = document.getElementsByTagName("em");
    //console.log(emphasisRef);
    for (element of emphasisRef){
        console.log(element);
        element.innerHTML = `<a href="${url}">${newTxt}</a>`;
    }

    

};

changeEmphasis("viernes friki", "https://www.youtube.com/");


const findElementsByQuerySelector = () => {
    const refElements = document.querySelector(".noticias");
    refElements.innerHTML = `La ch26 es la <strong>chida</strong>`;

}

findElementsByQuerySelector();

const newElement = () => {
    const newElementRef = document.createElement("p");
    newElementRef.innerHTML = `La CH26 le gusta: 
    <ul>
        <li>El pan de muerto</li>
        <li>El chisme</li>
        <li>El pozole</li>
        <li>Pizza</li>
        <li>El pulque</li>
    </ul>`;

    const articleRef = document.querySelector("article");
    articleRef.appendChild(newElementRef);
    // Clonar nodo anterior
    // const nodoClonado = articleRef.cloneNode(true);
    // document.querySelector("#articulo").appendChild(nodoClonado);
}
newElement();

const changeColor = (color) => {
    const refIntro = document.getElementById("noticias");
    refIntro.style.color = color;
}

changeColor("red");

const changeBorder = (border) => {
    const refIntro = document.getElementById("noticias");
    refIntro.style.border = border;
}

changeBorder(`thick solid`);

const changeColorBorder = (colorBorder) => {
    const refIntro = document.getElementById("noticias");
    refIntro.style.borderColor = colorBorder;
}

changeColorBorder("green");

const quitarBoton = () => {
    const refButton = document.getElementById("button-A");
    refButton.style.display = "none";
}

const ocultarBoton = () => {
    const refButton = document.getElementById("button-B");
    refButton.style.visibility = "hidden";
    
}