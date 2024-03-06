class Jugador {
    #nombre;
    #apellido;
    #nick;
    #fechaNacimiento;
    #edad;
    #contraseña;
    #score;
    #fechaScore;

    constructor(nombre, apellido, nick, fechaNacimiento, edad, contraseña, score, fechaScore) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nick = nick;
        this.fechaNacimiento = fechaNacimiento;
        this.edad = edad;
        this.contraseña = contraseña;
        this.score = score;
        this.fechaScore = fechaScore;
    }

    get nombre() {
        return this.#nombre;
    }
    set nombre(nombre) {
        this.#nombre = nombre;
    }

    get apellido() {
        return this.#apellido;
    }
    set apellido(apellido) {
        this.#apellido = apellido;
    }

    get nick() {
        return this.#nick;
    }
    set nick(nick) {
        this.#nick = nick;
    }

    get fechaNacimiento() {
        return this.#fechaNacimiento;
    }
    set fechaNacimiento(fechaNacimiento) {
        this.#fechaNacimiento = fechaNacimiento;
    }

    get edad() {
        return this.#edad;
    }
    set edad(edad) {
        this.#edad = edad;
    }

    get contraseña() {
        return this.#contraseña;
    }
    set contraseña(contraseña) {
        this.#contraseña = contraseña;
    }

    get score() {
        return this.#score;
    }
    set score(score) {
        this.#score = score;
    }

    get fechaScore() {
        return this.#fechaScore;
    }
    set fechaScore(fechaScore) {
        this.#fechaScore = fechaScore;
    }

    calcularEdad() {

    }
}