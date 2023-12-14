function init() {
    const divAlfabeto = document.querySelector('#alfabeto');
    const divTeclado = document.querySelector('#teclado');

    let userNumberCounter = prompt("Escribe la cantidad de teclas que quieres: ");
    let columnas = prompt("Escribe las columnas que quieres: ");

    divTeclado.style.width = calculateTotalWidth(100, 5, columnas);

    createAlphabet(divAlfabeto, 25);

    createKeyboard(divTeclado, userNumberCounter);
}

function calculateTotalWidth(keyWidth, margin, columns) {
    return (keyWidth * columns) + (margin * columns) + "px";
}

function createKeyboard(divTeclado, numberOfKeys) {
    if (numberOfKeys <= 30) {
        for (let i = 0; i <= numberOfKeys; i++) {
            if (i != 0) {
                let tecla = createKey(i);
                divTeclado.append(tecla);
            }
        }
        let tecla = createKey(0);
        divTeclado.append(tecla);
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
        divTecla.style.paddingRight = "25px";
    }
    return divTecla;
}

function createAlphabet(divAlfabeto, numberOfLetters) {
    for (let i = 0; i <= numberOfLetters; i++) {
        const ascii_converter = 65;
        let ascii_code = i + ascii_converter;

        if (ascii_code == 79) {
            let letraÑ = createLetter(ascii_code, 'Ñ');
            divAlfabeto.append(letraÑ)
        }

        let letra = createLetter(ascii_code);
        divAlfabeto.append(letra);
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