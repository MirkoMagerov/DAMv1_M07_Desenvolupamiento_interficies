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
    let bombsQuantity = document.querySelector('#bombsQuantity').value;

    return bombsQuantity;
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

    const boardSize = calculateBoardSize(tablero.size);

    SECTION_TABLERO.style.width = `${boardSize}px`;
    SECTION_TABLERO.style.height = `${boardSize}px`;

    createBoard(SECTION_TABLERO, tablero);
}

function calculateBoardSize(boardSize) {
    const visualCellSize = 7; // Tamaño base de cada celda en píxeles
    const padding = 2.5; // Padding adicional para el borde
    const totalPadding = (boardSize + 1) * padding;
    const totalvisualCellSize = boardSize * visualCellSize;
    const boardSizeWithPadding = totalvisualCellSize + totalPadding;

    return boardSizeWithPadding;
}

// ------------------------------ MOSTRAR GRAFICAMENTE ------------------------------

function createBoard(boardSection, tablero) {
    boardSection.innerHTML = "";
    const VISUALCELL_SIZE = 100 / tablero.size;

    for (let i = 0; i < tablero.size; i++) {
        for (let j = 0; j < tablero.size; j++) {
            const visualCell = createVisualCell(i,j, VISUALCELL_SIZE);

            const boardCell = tablero.matrizCasillas[i][j];

            visualCell.addEventListener("contextmenu", (e) => {
                e.preventDefault();
                toggleFlag(boardCell, visualCell);
            });

            visualCell.addEventListener("click", () =>  {
                if (boardCell.bomb) {
                    alert("Perdiste");
                }
                else if (!boardCell.flag) {
                    tablero.revealAround(boardCell);
                    updatevisualCellsStyle(tablero);
                }
                if (checkWin(tablero)) {
                    alert("Ganaste");
                }
            });

            colorizeNumberOfBombs(visualCell, boardCell);

            boardSection.appendChild(visualCell);
        }
    }
}

function createVisualCell(i,j, VISUALCELL_SIZE) {
    const visualCell = document.createElement("div");
    visualCell.classList.add('not-revealed');
    visualCell.id = `visualCell-${i}-${j}`;
    visualCell.style.width = `${VISUALCELL_SIZE}%`;
    visualCell.style.height = `${VISUALCELL_SIZE}%`;
    return visualCell;
}

function colorizeNumberOfBombs(visualCell, boardCell) {
    switch (boardCell.bombsAround) {
        case 1:
            visualCell.classList.add('one-around');
            break;
        case 2:
            visualCell.classList.add('two-around');
            break;
        case 3:
            visualCell.classList.add('three-around');
            break;
        case 8:
            visualCell.classList.add('four-or-more-around');
            break;
    }
}

// ------------------------------ FUNCIONALIDADES JUEGO ------------------------------

// function assignListenersToCells(visualCell, boardCell, tablero) {
//     visualCell.addEventListener("contextmenu", (e) => {
//         e.preventDefault();
//         toggleFlag(boardCell, visualCell);
//     });

//     visualCell.addEventListener("click", () =>  {
//         if (boardCell.bomb) {
//             alert("Perdiste");
//         }
//         else if (!boardCell.flag) {
//             tablero.revealAround(boardCell);
//             updatevisualCellsStyle(tablero);
//         }
//         if (checkWin(tablero)) {
//             alert("Ganaste");
//         }
//     });
// }

function toggleFlag(boardCell, visualCell) {
    if (boardCell.revealed) return;
    boardCell.flag = !boardCell.flag;
    visualCell.textContent = boardCell.flag ? "🚩" : "";
}

function updatevisualCellsStyle(tablero) {
    for (let i = 0; i < tablero.size; i++) {
        for (let j = 0; j < tablero.size; j++) {
            const boardCell = tablero.matrizCasillas[i][j];
            const visualCell = document.getElementById(`visualCell-${i}-${j}`);

            if (boardCell.revealed && !boardCell.flag && !boardCell.bomb) {
                visualCell.classList.add('revealed');
                visualCell.classList.remove('not-revealed');

                if (boardCell.bombsAround > 0) {
                    visualCell.textContent = boardCell.bombsAround;
                }
            }
        }
    }
}

function checkWin(tablero) {
    let revealedvisualCells = 0;

    for (let i = 0; i < tablero.size; i++) {
        for (let j = 0; j < tablero.size; j++) {
            if (tablero.matrizCasillas[i][j].revealed) {
                revealedvisualCells++;
            }
        }
    }

    return tablero.size * tablero.size - tablero.bombs === revealedvisualCells;
}