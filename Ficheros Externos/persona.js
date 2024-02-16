export default class Persona {
    #nombre;
    #edad;
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    set nombre(nom) { this.#nombre = nom; }

    get nombre() { return this.#nombre; }

    set edad(edad) { this.#edad = edad; }

    get edad() { return this.#edad; }

    edatMajor(edat) {
        switch (edat) {
            case this.edad:
                return 'Tenen la mateixa edat';
            case edat > this.edad:
                return `${this.nombre} és més petit`;
            default: return `${this.nombre} és més gran`;
        }
    }

    toString() {
        return `Nom: ${this.nombre} | Edat: ${this.edad}`;
    }

    valueOf() {
        return this.edad;
    }
}