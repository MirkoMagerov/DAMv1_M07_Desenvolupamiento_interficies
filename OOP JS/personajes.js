function init() {
    class Personaje {
        #nombre;
        #vida;
        #daño;
        #defensa;
    
        constructor (nombre, vida, daño, defensa) {
            this.Nombre = nombre;
            this.Vida = vida;
            this.Daño = daño;
            this.Defensa = defensa;
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
            return `Nombre: ${this.Nombre} | Vida: ${this.Vida} | Daño: ${this.Daño} | Defensa: ${this.Defensa}`;
        }

        showHP() {
            return `Vida de ${this.Nombre}: ${this.Vida}`;
        }
    
        atacar(target) {
            const porcentajeDefensa = target.Defensa / 100;
            const daño = this.Daño * (1 - porcentajeDefensa);
            target.Vida -= daño;
            console.log(`El ${this.Nombre} ha atacado a ${target.Nombre} y le ha causado ${daño} puntos de vida.`);
        }
    }
    
    class Jugador extends Personaje {
        #nivel;
        constructor(nombre, vida, daño, defensa, nivel) {
            super(nombre, vida, daño, defensa);
            this.#nivel = nivel;
        }
    
        set Nivel(nivel) {
            this.Nivel = nivel;
        }
    
        get Nivel() {
            return this.#nivel;
        }
    
        info() {
            return super.info() + ` | Nivel: ${this.Nivel}`;
        }
    }
    
    class Enemigo extends Personaje {
        #tipoEnemigo;
        constructor(nombre, vida, daño, defensa, tipoEnemigo) {
            super(nombre, vida, daño, defensa);
            this.TipoEnemigo = tipoEnemigo;
        }
    
        set TipoEnemigo(tipoEnemigo) {
            this.#tipoEnemigo = tipoEnemigo;
        }
    
        get TipoEnemigo() {
            return this.#tipoEnemigo;
        }
    }

    let heroe = new Jugador('Héroe', 100, 20, 15, 1);
    let monstruo = new Enemigo('Monstruo', 100, 15, 20, 'Orco');

    do {
        heroe.atacar(monstruo);
        monstruo.atacar(heroe);
        console.log(heroe.showHP());
        console.log(monstruo.showHP());
    } while (heroe.Vida > 0 && monstruo.Vida > 0);

    let winner = displayWinner(heroe.Vida);

    if (winner === "heroe") {
        console.log("El héroe ha ganado");
    }
    else {
        console.log("El monstruo ha ganado");
    }

    function displayWinner(vidaHeroe) {
        if (vidaHeroe <= 0) {
            return "monstruo";
        }
        return "heroe";
    }
}