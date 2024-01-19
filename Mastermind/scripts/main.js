function init() {
    const COLORES = ["azul","rojo","verde","amarillo","naranja","rosa","cyan","blanco"];
    const MASTER = createMaster(COLORES);

    let userColors, result;

    // do {
    //     userColors = getUserCombination(COLORES);

    // } while(!validUserCombination(COLORES, userColors));

    userColors = getUserCombination(COLORES);
    result = checkUserCombination(MASTER, userColors);

    console.log("Master = " + MASTER);
    console.log("User = " + userColors);
    console.log("Result = " + result);
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

function getUserCombination(COLORES) {
    let userPrompt = prompt("Escribe los cuatro colores separados por comas en minúscula.").trim().replace(/ /g, "").toLowerCase();
    let userColors = userPrompt.split(",");

    return userColors;  
}

function validUserCombination(COLORES, userColors) {
    for (let i = 0; i < userColors.length; i++) {
        for (let j = 0; j < COLORES.length; j++) {
            if (userColors[i] != COLORES[j]) {
                return false;
            }
        }
    }
    return true;
}

function checkUserCombination(MASTER, userColors) {
    let result = ["","","",""];

    for (let i = 0; i < result.length; i++) {
        if (MASTER[i] == userColors[i]) result[i] = "negro";
        else if (MASTER.includes(userColors[i])) {
            result[i] = "blanco";
        }
        else {
            result[i] = " X ";
        }
    }
    return result;
}