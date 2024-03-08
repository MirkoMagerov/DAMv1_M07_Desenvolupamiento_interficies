function init() {
    const SECTION_TABLERO = document.getElementById("tablero");
    const GENERATE_BUTTON = document.querySelector('#generate-board-button');

    let tablero;

    GENERATE_BUTTON.addEventListener('click', () => {
        let dimensions = getDimensions();
        let bombsQuant = getBombs();

        if (verifyBombsQuant(dimensions, bombsQuant)) {
            tablero = new Tablero(getDimensions(), getBombs());
            tablero.detectBombs();

            printBoard(SECTION_TABLERO, tablero);
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

function printBoard(boardSection, tablero) {
    boardSection.innerHTML = "";

    boardSection.style.gridTemplateColumns = `repeat(${tablero.size}, 1fr)`;
    boardSection.style.gridTemplateRows = `repeat(${tablero.size}, 1fr)`;

    for (let i = 0; i < tablero.size; i++) {
        for (let j = 0; j < tablero.size; j++) {
            const cell = document.createElement("div");
            cell.classList.add('not-revealed');
            cell.classList.add('celda-tablero');
            cell.id = i * 10 + j;

            const currentCell = tablero.matrizCasillas[i][j];

            cell.addEventListener("contextmenu", (e) => {
                e.preventDefault();
                toggleFlag(currentCell, cell);
            });

            // if (currentCell.bomb) {
            //     cell.textContent = "💣";
            // }
            // else {
            //     cell.textContent = currentCell.bombsAround;
            // }

            cell.addEventListener("click", () =>  {
                if (currentCell.bomb) {
                    alert("Perdiste");
                }
                else if (!currentCell.flag) {
                    tablero.revealAround(currentCell);
                    updateCellsStyle(tablero);
                }
            });

            boardSection.appendChild(cell);
        }
    }
}

function addAroundBombs(tablero, cell) {
    let x = cell.x;
    let y = cell.y;
    let bombsAround = tablero.matrizCasillas[x][y].bombsAround;
    return bombsAround;
}

// ------------------------------ FUNCIONALIDADES JUEGO ------------------------------

function toggleFlag(cell, cellElement) {
    if (cell.revealed) return;
    cell.flag = !cell.flag;
    cellElement.textContent = cell.flag ? "🚩" : "";
}

function updateCellsStyle(tablero) {
    for (let i = 0; i < tablero.size; i++) {
        for (let j = 0; j < tablero.size; j++) {
            const currentCellUpdated = tablero.matrizCasillas[i][j];
            const cellElement = document.getElementById(i * 10 + j);

            if (currentCellUpdated.revealed && !currentCellUpdated.flag && !currentCellUpdated.bomb) {
                cellElement.classList.add('revealed');
                cellElement.classList.remove('not-revealed');

                if (currentCellUpdated.bombsAround > 0) {
                    cellElement.textContent = currentCellUpdated.bombsAround;
                }
            }
        }
    }
}