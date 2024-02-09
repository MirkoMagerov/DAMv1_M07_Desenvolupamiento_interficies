function init() {

}

class Personaje {
    #nombre;
    #vida;
    #daño;
    #defensa;

    constructor (nombre, vida, daño, defensa) {
        this.#nombre = nombre;
        this.#vida = vida;
        this.#daño = daño;
        this.#defensa = defensa;
    }

    set Nombre(nombre) {
        this.#nombre = nombre;
    }

    get Nombre() {
        return this.#nombre;
    }

    set Vida(vida) {
        this.#vida = vida;
    }

    get Vida() {
        return this.#vida;
    }

    set Daño(daño) {
        this.#daño = daño;
    }

    get Daño() {
        return this.#daño;
    }

    set Defensa(defensa) {
        this.#defensa = defensa;
    }

    get Defensa() {
        return this.#defensa;
    }

    info() {
        return `Nombre: ${this.#nombre} | Vida: ${this.#vida} | Daño: ${this.#daño} | Defensa: ${this.#defensa}`;
    }

    atacar(target) {
        target.Vida -= Math.toFixed(this.#daño - (this.#daño * target.#defensa / 100),2);
    }
}

class Jugador extends Personaje {
    #nivel;
    constructor(nombre, vida, daño, defensa, nivel) {
        super(nombre, vida, daño, defensa);
        this.#nivel = nivel;
    }

    set Nivel(nivel) {
        this.#nivel = nivel;
    }

    get Nivel() {
        return this.#nivel;
    }

    info() {
        return super.info() + ` | Nivel: ${this.#nivel}`;
    }
}

class Enemic extends Personaje {
    #tipoEnemigo;
    constructor(nombre, vida, daño, defensa, tipoEnemigo) {
        super(nombre, vida, daño, defensa);
        this.#tipoEnemigo = tipoEnemigo;
    }

    set TipoEnemigo(tipoEnemigo) {
        this.#tipoEnemigo = tipoEnemigo;
    }

    get TipoEnemigo() {
        return this.#tipoEnemigo;
    }
}