export default class Figura {
    #color;

    constructor(color) {
        this.Color = color;
    }

    set Color (color) {
        this.#color = color;
    }

    get Color () {
        return this.#color;
    }

    info() {
        return `Figura de color ${this.#color}.`;
    }
}