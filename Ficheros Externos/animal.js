class Animal {
    constructor (nombre, especie) {
        this.nombre = nombre;
        this.especie = especie;
    }

    hacerSonido() {
        return `${this.nombre} hace un sonido`;
    }
}