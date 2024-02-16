export default class Estudiant {
    #nom;
    #edat;
    #qualificacions;

    constructor(nom, edat, qualificacions) {
        this.Nom = nom;
        this.Edat = edat;
        this.Qualificacions = qualificacions;
    }

    set Nom(nom) {
        this.#nom = nom;
    }

    get Nom () {
        return this.#nom;
    }

    set Edat(edat) {
        this.#edat = edat;
    }

    get Edat() {
        return this.#edat;
    }

    set Qualificacions(qualificacions) {
        this.#qualificacions = qualificacions;
    }

    get Qualificacions() {
        return this.#qualificacions;
    }

    obtenerMedia() {
        let suma = 0;
        for (let i = 0; i < this.#qualificacions.length; i++) {
            suma += this.#qualificacions[i];
        }
        return suma / this.#qualificacions.length;
    }

    convertToJson() {
        return {
            nom: this.#nom,
            edat: this.#edat,
            qualificacions: this.#qualificacions
        };
    }
}