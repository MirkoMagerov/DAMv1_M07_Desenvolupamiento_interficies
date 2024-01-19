function init() {
    
}

/* EX 1
Copiar y pegar en el init
    let divLipsum = document.querySelector("#lipsum");
    let firstP = getFirstP(divLipsum);
    let secondP = getSecondP(divLipsum);
    let lastP = getLastP(divLipsum);
    let sexLabel = getLabel(divLipsum);

    console.log(firstP);
    console.log(secondP);
    console.log(lastP);
    console.log(sexLabel);
*/

function getFirstP(divLipsum) {
    return divLipsum.querySelector("p");
}

function getSecondP(divLipsum) {
    let arrayOfP = divLipsum.querySelectorAll("p");
    return arrayOfP[1];
}

function getLastP(divLipsum) {
    let arrayOfP = divLipsum.querySelectorAll("p");
    return arrayOfP[arrayOfP.length - 1];
}

function getLabel() {
    let articles = document.querySelectorAll("article");
    let thirdArticle = articles[2];
    let form = thirdArticle.querySelector("form");
    let labels = form.querySelectorAll("label");
    return labels[3];
}

/* EX 2 
Copiar y pegar en el init
    let divLipsum = document.querySelector("#lipsum");
    addP_IDs(divLipsum);
    modifyButtons();
    changeColorLabel();
*/

function addP_IDs(divLipsum) {
    let parrafos = divLipsum.querySelectorAll("p");
    
    // Bucle
    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].setAttribute("id", "$p_{i}");
    }

    // Accediendo de manera individual
    parrafos[0].setAttribute("id", "p_0");
    parrafos[1].setAttribute("id", "p_1");
    parrafos[2].setAttribute("id", "p_2");
}

function modifyButtons() {
    let articles = document.querySelectorAll("article");
    let thirdArticle = articles[2];
    let form = thirdArticle.querySelector("form");
    let pWithButtons = form.querySelector("p");
    let buttons = pWithButtons.querySelectorAll("input");
    let firstButton = buttons[0];
    let secondButton = buttons[1];

    firstButton.style.backgroundColor = "green";
    firstButton.style.cursor = "pointer";
    secondButton.style.backgroundColor = "red";
    secondButton.style.cursor = "pointer";
}

function changeColorLabel() {
    let articles = document.querySelectorAll("article");
    let thirdArticle = articles[2];
    let form = thirdArticle.querySelector("form");
    let labels = form.querySelectorAll("label");
    let labelForSecondInput;

    let found = false;
    let i = 0;
    while (i < labels.length && !found) {
        let inputs = labels[i].querySelectorAll("input");
        let j = 0;
        while (j < inputs.length && !found) {
            if (inputs[j].id == "input2") {
                found = true;
                labelForSecondInput = labels[i];
            }
            j++;
        }
        i++;
    }

    if (found) {
        labelForSecondInput.style.backgroundColor = "blue";
    }
    else {
        console.log("LABEL NO ENCONTRADO");
    }
}