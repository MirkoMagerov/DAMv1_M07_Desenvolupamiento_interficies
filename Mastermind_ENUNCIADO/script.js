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
let victory = false;
let pInfo;
let master = [];
let userCombi = [];
let intentoActual = 0;
let colorsSelected = 0;

function init() {
    pInfo = document.querySelector('#info');

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
        let resultArray = [];
        let copyMaster = MASTER;
        for (let i = 0; i < copyMaster.length; i++) {
            let resultColor = correctColorPosition(copyMaster, userColors, i);
            if (resultColor == "black") revealMaster(i, userColors[i]);
            resultArray.push(resultColor);
        }

        if (!resultArray.includes("grey") && !resultArray.includes("white")) victory = true;

        printResult(resultArray, intentoActual);
        resetVariables();
    }

    let userInfo = updateInfoSection(intentoActual, MAX_INTENTOS, victory);
    pInfo.textContent = userInfo;
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
    let row = result.querySelectorAll(".rowResult");
    return row;
}

function getActualRow(intento) {
    let row = getAllResultRows();
    return row[intento];
}

function getActualColor(intento) {
    let actRow = getActualRow(intento);
    let divsInRow = actRow.querySelector(".rowUserCombi");
    return divsInRow;
}

function getActualResults(intento) {
    let actRow = getActualRow(intento);
    let divsInRow = actRow.querySelector(".rowCercleResult");
    return divsInRow;
}

function printResult(resultArray, intento) {
    let cercleResultRow = getActualResults(intento);
    let cercleResultDivs = cercleResultRow.querySelectorAll('.cercleResult');
    for (let i = 0; i < cercleResultDivs.length; i++) {
        console.log(cercleResultDivs[i]);
        cercleResultDivs[i].style.backgroundColor = resultArray[i];
    }
}

function colorizeActualColor(intento, numeroColor) {
    let actColor = getActualColor(intento);
    let userColorRow = actColor.querySelectorAll(".celUserCombi");
    let indvColorDiv = userColorRow[numeroColor];
    return indvColorDiv;
}

function correctColorPosition(master, userCombiColor, index) {
    if (master[index] == userCombiColor[index]) return "black";
    else if (master.includes(userCombiColor[index])) return "white";
    return "grey";
}

function revealMaster(index, color) {
    let masterRow = document.querySelector('#master');
    let masterDivs = masterRow.querySelectorAll('.cel');
    console.log(masterDivs);
    masterDivs[index].style.backgroundColor = color;
}

function resetVariables() {
    const INPUT_ZONE = document.querySelector("#combiText");
    INPUT_ZONE.value = "";
    intentoActual += 1;
    colorsSelected = 0;
    userCombi = [];
}

function updateInfoSection(intento, maxIntentos, victory) {
    if (victory) return "¡Has acertado todos los colores! ¡Enhorabuena!";

    if (intento < maxIntentos) return "Intento número " + (intento + 1) + ". ¡Suerte!";

    return "Te has quedado sin intentos. ¡La próxima vez te saldrá mejor!";
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