//Declaración de constantes.
const MAX_INTENTOS = 10;
const MAX_COMBI_COLORES = 4;
const MAX_COLORS_SELECTED = 4;
const COLORS = ['white', 'blue', 'green', 'violet', 'yellow', 'red', 'orange', 'cyan'];
const GREY = "grey";
const WHITE = "white";
const BLACK = "black";
const ROW_USER_POSITION = 0;
const ROW_CERCLE_RESULT_POSITION = 1;
const MAX_TRIES = 10;

//Declaración de variables globales.
let master = [];
let userCombi = [];
let intentoActual = 0;
let colorsSelected = 0;

function init() {
    // 1. Crear master
    master = createMaster(COLORS);
    console.log(master);

    // 2. Imprimir todas las filas según los intentos máximos
    printResultRows(ROW_RESULT, MAX_TRIES);
}

function createMaster(COLORES) {
    const MASTER_LENGTH = 4;
    let master = [];

    for (let i = 0; i < MASTER_LENGTH; i++) {
        let position = Math.round(Math.random() * 7);
        master[i] = COLORES[position];
    }

    return master;
}

/* Procedimiento que se ejecuta cada vez que el usuario selecciona un color, hasta el número máximo de colores permitidos en la combinación. */
function añadeColor(color, intento) {
    const INPUT_ZONE = document.querySelector("#combiText");
    let colors = INPUT_ZONE.value.split("-");

    if (colorsSelected < MAX_COLORS_SELECTED) {
        userCombi.push(color);
        if (colors.length == 4) INPUT_ZONE.value += color;
        else if (colors.length < 5) INPUT_ZONE.value += color + "-";
        let indvColor = colorizeActualColor(intento, colorsSelected);
        indvColor.style.backgroundColor = color;
        colorsSelected++;
    }
}

/* Llamaremos a esta función desde el botón HTML de la página para comprobar la propuesta de combinación que nos ha introducido el usuario. Informamos al usuario del resultado y del número de intentos que lleva*/
function comprobar(userColors, MASTER) {
    if (correctNumberOfColors(userColors)) {
        let copyMaster = MASTER;
        for (let i = 0; i < copyMaster.length; i++) {
            let resultColor = correctColorPosition(copyMaster, userColors, i);
            console.log(resultColor);
            switch (resultColor) {
                case "black":
                    copyMaster[i] = "";
                    break;
            }
        }
        console.log(copyMaster);
7
        const INPUT_ZONE = document.querySelector("#combiText");
        INPUT_ZONE.value = "";
        intentoActual += 1;
        colorsSelected = 0;
        userCombi = [];
    }
}

function correctNumberOfColors(colors) {    
    if (colors.length == 4) return true;
    return false;
}

function printResultRows(ROW_RESULT, TRIES) {
    for (let i = 0; i < TRIES; i++) {
        let RESULT = getResultSection();
        RESULT.innerHTML += ROW_RESULT;
    }
}

function getResultSection() {
    const RESULT_SECTION = document.querySelector("#Result");
    return RESULT_SECTION;
}

function getAllResultRows() {
    let result = getResultSection();
    let rows = result.querySelectorAll(".rowResult");
    return rows;
}

function getActualRow(intento) {
    let rows = getAllResultRows();
    return rows[intento];
}

function getActualColor(intento) {
    let actRow = getActualRow(intento);
    let divsInRow = actRow.querySelectorAll("div");
    let colorsDiv = divsInRow[0];
    return colorsDiv;
}

function colorizeActualColor(intento, numeroColor) {
    let actColor = getActualColor(intento);
    let userColorRow = actColor.querySelectorAll("div");
    let majorDivIndvColor = userColorRow[numeroColor * 2];
    let indvColorDiv = majorDivIndvColor.querySelector("div");
    return indvColorDiv;
}

function correctColorPosition(master, userCombiColor, index) {
    if (master[index] == userCombiColor[index]) return "black";
    else if (master.includes(userCombiColor[index])) return "white";
    return "grey";
}

function colorizeResultColor() {

}

/* Template con el código HTML que corresponde a cada fila de juego/intento. */
const ROW_RESULT = `<div class="rowResult w100 flex wrap">
    <div class="rowUserCombi w75 flex wrap">
       <div class="w25">
           <div class="celUserCombi flex"></div>
       </div>
       <div class="w25">
           <div class="celUserCombi flex"></div>
       </div>
       <div class="w25">
           <div class="celUserCombi flex"></div>
       </div>
       <div class="w25">
           <div class="celUserCombi flex"></div>
       </div>
    </div>
    <div class="rowCercleResult w25 flex wrap center">
       <div class="w40 h40">
            <div class="cercleResult flex"></div>
       </div>
       <div class="w40 h40">
           <div class="cercleResult flex"></div>
       </div>
       <div class="w40 h40">
           <div class="cercleResult flex"></div>
       </div>
       <div class="w40 h40">
           <div class="cercleResult flex"></div>
       </div>
    <div>
</div>`;