function init() {
    const SECTION_TABLERO = document.getElementById("tablero");
    const CELL_STYLE = ".celda-tablero";

    let dimensiones = getDimensions();
    let bombsQuantity = getBombsQuantity();
    
    let tablero = new Tablero(dimensiones, bombsQuantity);

    tablero.printBoard(SECTION_TABLERO, CELL_STYLE);

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
}