//Declaración de constantes.
const MAX_INTENTOS = 10;
const MAX_COMBI_COLORES = 4;
const COLORS = ['white', 'blue', 'green', 'violet', 'yellow', 'red', 'orange', 'cyan'];
const GREY = "grey";
const WHITE = "white";
const BLACK = "black";

//Declaración de variables globales.
let master = [];
let userCombi = [];
let intento = 0;
let aciertos = 0;

function init() {
    const RESULT_SECTION = document.querySelector("#Result")

    master = createMaster(COLORS);

    //2. Crea todas las filas según el número de intentos.
}

function createMaster(COLORES) {
    const MASTER_LENGTH = 4;
    let MASTER = [];

    for (let i = 0; i < MASTER_LENGTH; i++) {
        let position = Math.round(Math.random() * 7);
        MASTER[i] = COLORES[position];
    }

    return MASTER;
}

/* Llamaremos a esta función desde el botón HTML de la página para comprobar la propuesta de combinación que nos ha introducido el usuario. Informamos al usuario del resultado y del número de intentos que lleva*/
function Comprobar(userColor, MASTER) {
    
}

/** Procedimiento que se ejecuta cada vez que el usuario selecciona un color, hasta el número máximo de colores permitidos en la combinación. */
function añadeColor(color) {
    const INPUT_ZONE = document.querySelector("#combiText");
    let colors = INPUT_ZONE.value.split(",");

    if (colors.length < 4) INPUT_ZONE.value += color + ", "; 
    else INPUT_ZONE.value += color;

    console.log(INPUT_ZONE.value);
}


/** Template con el código HTML que corresponde a cada fila de juego/intento. */
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