function init() {
    const GENERATE_BUTTON = document.querySelector('#generate-board-button');

    GENERATE_BUTTON.addEventListener('click', () => generateBoard());
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

function generateBoard() {
    const SECTION_TABLERO = document.getElementById("tablero");
    const dimensions = getDimensions();
    const bombsQuant = getBombs();

    if (!verifyBombsQuant(dimensions, bombsQuant)) {
        alert("No puedes poner más bombas que casillas.");
        return;
    }

    const tablero = new Tablero(dimensions, bombsQuant);
    tablero.detectBombs();

    // Calcular el tamaño del tablero basado en la cantidad de casillas
    const boardSize = calculateBoardSize(tablero.size);

    // Establecer el tamaño del tablero dinámicamente
    SECTION_TABLERO.style.width = `${boardSize}px`;
    SECTION_TABLERO.style.height = `${boardSize}px`;

    createBoard(SECTION_TABLERO, tablero);
}

function calculateBoardSize(boardSize) {
    const cellSize = 7; // Tamaño base de cada celda en píxeles
    const padding = 2.5; // Padding adicional para el borde
    const totalPadding = (boardSize + 1) * padding;
    const totalCellSize = boardSize * cellSize;
    const boardSizeWithPadding = totalCellSize + totalPadding;

    return boardSizeWithPadding;
}

// ------------------------------ MOSTRAR GRAFICAMENTE ------------------------------

function createBoard(boardSection, tablero) {
    boardSection.innerHTML = "";

    const CELL_SIZE = 100 / tablero.size;

    for (let i = 0; i < tablero.size; i++) {
        for (let j = 0; j < tablero.size; j++) {
            const cell = document.createElement("div");

            cell.classList.add('not-revealed');
            cell.classList.add('celda-tablero');

            cell.id = i * 10 + j;

            cell.style.width = `${CELL_SIZE}%`;
            cell.style.height = `${CELL_SIZE}%`;

            const currentCell = tablero.matrizCasillas[i][j];

            cell.addEventListener("contextmenu", (e) => {
                e.preventDefault();
                toggleFlag(currentCell, cell);
            });

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