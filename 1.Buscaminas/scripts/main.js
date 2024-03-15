function init() {
    openForm();
    //play();
}

function openForm() {
    const width = 750;
    const height = 900;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;
    
    const features = `width=${width}px,height=${height}px,left=${left}px,top=${top}px`;
    
    window.open("../login.html", "Login", features);
}

function play() {
    // const GENERATE_BUTTON = document.querySelector('#generate-board-button');
    // GENERATE_BUTTON.addEventListener('click', () => generateBoard());
    generateBoard();
}

// ------------------------------ CONSEGUIR AJUSTES INCIALES ------------------------------

function getDimensions() {
    let slider = document.querySelector('#dimensionsSlider');
    return slider.value;
}

function getBombs() {
    let bombsQuantity = document.querySelector('#bombsQuantity');
    if (bombsQuantity.value < bombsQuantity.min) {
        bombsQuantity.value = bombsQuantity.min;
    }

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
    const boardSize = calculateBoardSize(tablero.size);

    SECTION_TABLERO.style.width = `${boardSize}px`;
    SECTION_TABLERO.style.height = `${boardSize}px`;

    createBoard(SECTION_TABLERO, tablero);
}

function calculateBoardSize(boardSize) {
    const visualCellSize = 7;
    const padding = 3; // Padding adicional para el borde
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
                    showBombs(tablero);
                    alert("Perdiste");
                }
                else if (!boardCell.flag) {
                    tablero.revealAround(boardCell);
                    updatevisualCellsStyle(tablero);

                    if (checkWin(tablero)) {

                        alert("Ganaste");
                        showBombs(tablero);
                    }
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
    visualCell.classList.add('celda-tablero');
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
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
            visualCell.classList.add('four-or-more-around');
            break;
    }
}

// ------------------------------ FUNCIONALIDADES JUEGO ------------------------------

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
    let revealedCells = 0;
    for (let i = 0; i < tablero.size; i++) {
        for (let j = 0; j < tablero.size; j++) {
            if (tablero.matrizCasillas[i][j].revealed) {
                revealedCells++;
            }
        }
    }
    return revealedCells === tablero.size * tablero.size - tablero.bombs;
}

function showBombs(tablero) {
    for(let i = 0; i < tablero.size; i++) {
        for(let j = 0; j < tablero.size; j++) {
            const visualCell = document.getElementById(`visualCell-${i}-${j}`);
            const boardCell = tablero.matrizCasillas[i][j];

            if (boardCell.bomb) {
                visualCell.textContent = "💣";
            }
        }
    }
}