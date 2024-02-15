class Libro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }

    mostrar() {
        return `Título: ${this.titulo} | Autor: ${this.autor}`;
    }
}