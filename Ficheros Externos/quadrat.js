import Figura from './figura.js';

export default class Quadrat extends Figura {
    #costat;

    constructor(color, costat) {
        super(color);
        this.Costat = costat;
    }

    set Costat (costat) {
        this.#costat = costat;
    }

    get Costat () {
        return this.#costat;
    }

    calcularArea () {
        return this.Costat * this.Costat;
    }

    info() {
        return `Quadrat de costat ${this.Costat} | Color ${this.Color} | Área ${this.calcularArea()}.`;
    }
}