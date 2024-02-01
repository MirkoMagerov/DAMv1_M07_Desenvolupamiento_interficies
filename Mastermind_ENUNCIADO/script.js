//Declaración de constantes.
const MAX_INTENTOS = 10;
const MAX_COMBI_COLORES = 4;
const MAX_COLORS_SELECTED = 4;
const COLORS = ['white', 'blue', 'green', 'violet', 'yellow', 'red', 'orange', 'cyan'];
const GREY = "grey";
const WHITE = "white";
const BLACK = "black";

//Declaración de variables globales.
let master = [];
let userCombi = [];
let intento = 0;
let aciertos = 0;
let colorsSelected = 0;

function init() {
    const RESULT_SECTION = document.querySelector("#Result")

    master = createMaster(COLORS);
    console.log(master);

    //2. Crea todas las filas según el número de intentos.
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
function añadeColor(color) {
    const INPUT_ZONE = document.querySelector("#combiText");
    let colors = INPUT_ZONE.value.split("-");

    if (colorsSelected < MAX_COLORS_SELECTED) {
        if (colors.length == 4) INPUT_ZONE.value += color;
        else if (colors.length < 5) INPUT_ZONE.value += color + "-";
        colorsSelected++;
    }

    console.log(INPUT_ZONE.value);
}

/* Llamaremos a esta función desde el botón HTML de la página para comprobar la propuesta de combinación que nos ha introducido el usuario. Informamos al usuario del resultado y del número de intentos que lleva*/
function Comprobar(userCombi) {
    const INPUT_ZONE = document.querySelector("#combiText");
    let colors = INPUT_ZONE.value.split("-");
    console.log(colors);

    if (correctNumberOfColors()) {
        saveUserCombination(userCombi);
        console.log(userCombi);
    }
}

function saveUserCombination(userCombi) {
    const INPUT_ZONE = document.querySelector("#combiText");
    let colors = INPUT_ZONE.value.split("-");

    for (let color of colors) {
        userCombi.push(color);
    }
}

function correctNumberOfColors() {
    const INPUT_ZONE = document.querySelector("#combiText");
    let colors = INPUT_ZONE.value.split("-");

    if (colors.length == 4) return true;
    return false;
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
    </div>alis/Mastermind_CODIGO
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