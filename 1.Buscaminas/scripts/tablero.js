class Tablero {
    #filas;
    #columnas;
    #matrizCasillas;
    #bombs;
    
    constructor(dimensiones, quantityBombs) {
        this.filas = dimensiones[0];
        this.columnas = dimensiones[1];
        this.matrizCasillas = this.generateBoard();
        this.bombs = quantityBombs;
        this.generateBombs();
    }

    get filas() {
        return this.#filas;
    }
    set filas(filas) {
        this.#filas = filas;
    }

    get columnas() {
        return this.#columnas;
    }

    set columnas(columnas) {
        this.#columnas = columnas;
    }

    get matrizCasillas() {
        return this.#matrizCasillas;
    }

    set matrizCasillas(matriz) {
        this.#matrizCasillas = matriz;
    }

    get bombs() {
        return this.#bombs;
    }
    set bombs(bombs) {
        this.#bombs = bombs;
    }

    generateBoard() {
        const board = [];
        for (let i = 0; i < this.filas; i++) {
            const row = [];
            for (let j = 0; j < this.columnas; j++) {
                row.push(new Casilla(i, j));
            }
            board.push(row);
        }
        return board;
    }

    generateBombs() {
        let bombsGenerated = 0;
        while (bombsGenerated < this.bombs) {
            let x = Math.floor(Math.random() * this.filas);
            let y = Math.floor(Math.random() * this.columnas);
            if (!this.matrizCasillas[x][y].bomb) {
                this.matrizCasillas[x][y].bomb = true;
                bombsGenerated++;
            }
        }
    }
}