function init() {
    const SECTION_TABLERO = document.getElementById("tablero");
    const CELL_STYLE = "celda-tablero";

    let dimensiones = getDimensions();
    let bombsQuantity = getBombsQuantity();
    
    let tablero = new Tablero(dimensiones, bombsQuantity);

    printBoard(SECTION_TABLERO, CELL_STYLE, tablero);

    function getDimensions() {
        let filas = prompt("Introduce las filas del tablero: ");
        let columas = prompt("Introduce las columnas del tablero: ");
        let dimensiones = [filas, columas];
        return dimensiones;
    }

    function getBombsQuantity() {
        let quantity = prompt("Introduce la cantidad de bombas: ");
        return quantity;
    }

    function printBoard(boardSection, cellStyle, tablero) {
        boardSection.innerHTML = "";

        boardSection.style.gridTemplateColumns = `repeat(${tablero.columnas}, 1fr)`;
        boardSection.style.gridTemplateRows = `repeat(${tablero.filas}, 1fr)`;

        for (let i = 0; i < tablero.filas; i++) {
            for (let j = 0; j < tablero.columnas; j++) {
                const cell = document.createElement("div");
                cell.classList.add(cellStyle);
                cell.id = i * 10 + j;
                if (tablero.matrizCasillas[i][j].bomb)
                    cell.classList.add("bomb");
                    boardSection.appendChild(cell);
            }
        }
    }
}