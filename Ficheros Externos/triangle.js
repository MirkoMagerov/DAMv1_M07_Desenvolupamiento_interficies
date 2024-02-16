import Figura from './figura.js';

export default class Triangle extends Figura {
    #base;
    #altura;

    constructor(color, base, altura) {
        super(color);
        this.Base = base;
        this.Altura = altura;
    }

    set Base (base) {
        this.#base = base;
    }

    get Base () {
        return this.#base;
    }

    set Altura (altura) {
        this.#altura = altura;
    }

    get Altura () {
        return this.#altura;
    }

    calcularArea () {
        return this.Base * this.Altura / 2;
    }

    info() {
        return `Triangle de base ${this.Base} i altura ${this.Altura} | Color ${this.Color} | Área ${this.calcularArea()}.`;
    }
}