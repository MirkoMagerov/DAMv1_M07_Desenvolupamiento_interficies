import Figura from './figura.js';

export default class Rectangle extends Figura {
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
        return this.#base * this.#altura;
    }

    info() {
        return `Rectangle de base ${this.Base} i altura ${this.Altura} | Color ${this.Color} | Área ${this.calcularArea()}.`;
    }
}