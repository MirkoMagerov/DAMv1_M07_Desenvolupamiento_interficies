function init() {
    const SECTION_TABLERO = document.getElementById("tablero");
    const CELL_STYLE = "celda-tablero";
    const GENERATE_BUTTON = document.querySelector('#generate-board-button');

    let tablero;

    GENERATE_BUTTON.addEventListener('click', () => {
        let dimensions = getDimensions();
        let bombsQuant = getBombs();

        if (verifyBombsQuant(dimensions, bombsQuant)) {
            tablero = new Tablero(getDimensions(), getBombs());
            tablero.detectBombs();

            printBoard(SECTION_TABLERO, CELL_STYLE, tablero);
        }

        else {
            alert("Que haces bobo, no puedes poner mas bombas que casillas.");
        }
    });
}

// ------------------------------ CONSEGUIR AJUSTES INCIALES ------------------------------

function getDimensions() {
    let slider = document.querySelector('#dimensionsSlider');
    return slider.value;
}

function getBombs() {
    let bombsQuantity = document.querySelector('#bombsQuantity');
    return bombsQuantity.value;
}

function verifyBombsQuant(dimensions, bombs) {
    return dimensions * dimensions >= bombs;
}

// ------------------------------ MOSTRAR GRAFICAMENTE ------------------------------

function printBoard(boardSection, cellStyle, tablero) {
    boardSection.innerHTML = "";

    boardSection.style.gridTemplateColumns = `repeat(${tablero.size}, 1fr)`;
    boardSection.style.gridTemplateRows = `repeat(${tablero.size}, 1fr)`;

    for (let i = 0; i < tablero.size; i++) {
        for (let j = 0; j < tablero.size; j++) {
            const cell = document.createElement("div");
            cell.classList.add(cellStyle);
            cell.id = i * 10 + j;

            const currentCell = tablero.matrizCasillas[i][j];

            if (currentCell.bomb) {
                cell.classList.add("bomb");
            }
            else {
                // cell.textContent = addAroundBombs(tablero, cell); -- Mostrar cuantas bombas hay alrededor de la celda
            }
            cell.addEventListener('click', () => toggleFlag(currentCell, cell));
            boardSection.appendChild(cell);
        }
    }
}

function addAroundBombs(tablero, cell) {
    let id = cell.id;
    let x = Math.floor(id / 10);
    let y = id % 10;
    let bombsAround = tablero.matrizCasillas[x][y].bombsAround;
    return bombsAround;
}

// ------------------------------ FUNCIONALIDADES JUEGO ------------------------------
function toggleFlag(cell, cellElement) {
    if (cell.revealed) return;
    cell.flag = !cell.flag;
    cellElement.style.backgroundColor = cell.flag ? "green" : "lightgray";
}