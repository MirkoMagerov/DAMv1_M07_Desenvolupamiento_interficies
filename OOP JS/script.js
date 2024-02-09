function init() {
    // var coches = [
    //     ["seat","Codoba",1997,10000],
    //     ["Kia","Sorento",1994,1000],
    //     ["seat","Todelo",2000,10000],
    //     ["Fiat","Bravo",2010,10200],
    //     ["Fiat","500",2010,10000],
    //     ["Mercedes","Calse B",2001,39000],  
    //     ["seat","Ibiza",1993,10100],
    //     ["Alfa Romeo","Julieta",2002,10000],
    //     ["Alfa Romeo","159",2002,10400],
    //     ["Mercedes","Calse C",2001,1000],  
    //     ["Alfa Romeo","147",1990,10500],
    //     ["Fiat","Punto",1990,999],
    //     ["Citroen","Saxo",1980,10300],
    //     ["Renault","Superc 5",1980,12000],
    //     ["BWM","M3",2020,1000],
    //     ["Kia","Picanto",1990,1000],
    //     ["Alfa Romeo","spider",1970,14500],
    //     ["Mercedes","Calse A",1994,60100],  
    //     ["Mercedes","Calse D",2011,21221]  
    // ];
    
    // let cochesObjetos = coches.map(coche => new Coche(coche[0], coche[1], coche[2], coche[3]));

    let libro1 = new LlibrePrivada("El señor de los anillos", "J.R.R. Tolkien", 20);
    let libro2 = new LlibrePrivada("Cien años de soledad", "Gabriel García Márquez", 15);
    let libro3 = new LlibrePrivada("Crónica de una muerte anunciada", "Gabriel García Márquez", 18);

    let libros = [libro1, libro2, libro3];

    let descLibros = libros.map(libro => libro.obtenirDescripcio());
    let precioLibros = libros.reduce((acc, libro) => acc + libro.preu, 0);

    console.log(descLibros);
    console.log(precioLibros);
}

class TarjetaCredito {
    constructor(entidad, numero, ccv, fechaCaducidad, titular) {
        this.entidad = entidad;
        this.numero = numero;
        this.ccv = ccv;
        this.fechaCaducidad = fechaCaducidad;
        this.titular = titular;
    }

    info() {
        return `Entidad: ${this.entidad} | Numero: ${this.numero} | CCV: ${this.ccv} | FechaCaducidad: ${this.fechaCaducidad} | Titular: ${this.titular}`;
    }
}

class Impresora {
    constructor(marca, modelo, numSerie, connexion) {
        this.marca = marca;
        this.modelo = modelo;
        this.numSerie = numSerie;
        this.connexion = connexion;
    }

    info() {
        return `Marca: ${this.marca} | Modelo: ${this.modelo} | NumSerie: ${this.numSerie} | Connexion: ${this.connexion}`;
    }

    imprimir() {

    }

    escanear() {

    }
}

class Operacio {

    constructor(valor1, valor2) {
        setValor1(valor1);
        setValor2(valor2);
    }

    setValor1(valor) {
        this.valor1 = valor;
    }

    getValor1() {
        return this.valor1;
    }

    setValor2(valor) {
        this.valor2 = valor;
    }

    getValor2() {
        return this.valor2;
    }
}

class Suma extends Operacio {
    constructor(valor1, valor2) {
        super(valor1, valor2);
    }

    resultado() {
        return this.getValor1() + this.getValor2();
    }
}

class Resta extends Operacio {
    constructor(valor1, valor2) {
        super(valor1, valor2);
    }

    resultado() {
        return this.getValor1() - this.getValor2();
    }
}

class Persona {
    constructor(nombre = "", edad = 0, dni = "") {
        this.nombre = nombre;
        this.edad = edad;
        this.dni = dni;_
    }

    mostrar() {
        return `Nombre: ${this.nombre} | Edad: ${this.edad} | DNI: ${this.dni}`;
    }

    esMajorEdat() {
        return this.edad >= 18;
    }
}

class CompteBancari {
    constructor (titular, quantitat = "") {
        if (!(titular instanceof Persona)) {
            throw new Error("ERROR: El titular ha de ser un objeto de la clase Persona.");
        }
        this.titular = titular;
        this.quantitat = quantitat;
    }

    mostrarDatos() {
        return `Titular: ${this.titular.mostrar()} | Quantitat: ${this.quantitat}`;
    }

    ingressar(quantitat) {
        this.quantitat += quantitat;
    }

    retirar(quantitat) {
        this.quantitat -= quantitat;
    }
}

class Coche {
    constructor(marca, modelo, añoMatriculacion, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.añoMatriculacion = añoMatriculacion;
        this.precio = precio;
    }
}

class Llibre {
    constructor (titol, autor, preu) {
        this.titol = titol;
        this.autor = autor;
        this.preu = preu;
    }

    obtenirDescripcio() {
        return `Titol: ${this.titol} | Autor: ${this.autor} | Preu: ${this.preu}`;
    }
}

class LlibrePrivada {
    #titol;
    #autor;
    #preu;

    constructor (titol, autor, preu) {
        this.titol = titol;
        this.autor = autor;
        this.preu = preu;
    }

    set titol(titol) {
        this.#titol = titol;
    }

    get titol() { return this.#titol; }

    set autor(autor) {
        this.#autor = autor;
    }

    get autor() { return this.#autor; }

    set preu(preu) {
        this.#preu = preu;
    }

    get preu() { return this.#preu; }

    obtenirDescripcio() {
        return `Titol: ${this.titol} | Autor: ${this.autor} | Preu: ${this.preu}`;
    }
}