const ASCII_A = 65;
const ASCII_E = 69;
const ASCII_I = 73;
const ASCII_O = 79;
const ASCII_U = 85;
const ASCII_Z = 90;

function init() {
    const DIV_ALFABETO = document.querySelector('#alfabeto');
    const DIV_TECLADO = document.querySelector('#dentro_teclado');

    let userNumberCounter = prompt("Escribe la cantidad de teclas que quieres: ");
    let columnas = prompt("Escribe las columnas que quieres: ");

    DIV_TECLADO.style.width = calculateTotalWidth(100, 8, columnas);

    createAlphabet(DIV_ALFABETO);

    createKeyboard(DIV_TECLADO, userNumberCounter);
}

function calculateTotalWidth(keyWidth, margin, columns) {
    return (keyWidth * columns) + (margin * columns) + "px";
}

function createKeyboard(DIV_TECLADO, numberOfKeys) {
    if (numberOfKeys <= 30) {
        for (let i = 0; i <= numberOfKeys; i++) {
            if (i != 0) {
                let tecla = createKey(i);
                DIV_TECLADO.append(tecla);
            }
        }
        let tecla = createKey(0);
        DIV_TECLADO.append(tecla);
    }
    else {
        alert("Número demasiado grande, bobo.");
    }
}

function createKey(index) {
    let divTecla = document.createElement("div");
    divTecla.className = "divTecla";
    divTecla.textContent = index;

    if (index != 0) {
        if (index % 3 == 0 ) {
            divTecla.style.backgroundColor = "yellow";
        }
        else if (index % 2 == 0) {
            divTecla.style.backgroundColor = "blue";
        }
    }
    else {
        divTecla.style.width = "100%";
        divTecla.style.paddingLeft = "15px";
    }
    return divTecla;
}

function createAlphabet(DIV_ALFABETO) {
    for (let i = 65; i <= 90; i++) {

        if (i == 79) {
            let letraÑ = createLetter(i, 'Ñ');
            DIV_ALFABETO.append(letraÑ)
        }

        let letra = createLetter(i);
        DIV_ALFABETO.append(letra);
    }
}

function createLetter(ascii_code, letter = null) {
    let divLetra = document.createElement("div");
    divLetra.className = "divLetra";
    
    if (letter) {
        divLetra.textContent = letter;
    }
    else {
        divLetra.textContent = String.fromCharCode(ascii_code).toUpperCase();
    } 

    if (divLetra.textContent == 'A' || divLetra.textContent == 'E' ||divLetra.textContent == 'I' 
    || divLetra.textContent == 'O' ||divLetra.textContent == 'U') {
        divLetra.style.backgroundColor = 'grey';
    }

    return divLetra;
}