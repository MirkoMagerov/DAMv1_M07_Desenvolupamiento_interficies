class Text {
    #texto;

    constructor(texto = "") {
        this.Texto = texto;
    }

    set Texto(caracteres) { 
        this.#texto = caracteres; 
    }

    get Texto() { 
        return this.#texto; 
    }

    añadirTexto(caracteres) {
        this.Texto += caracteres;
    }

    establecerTexto(caracteres) {
        this.Texto = caracteres;
    }

    mostrarTexto() {
        return this.Texto;
    }
}