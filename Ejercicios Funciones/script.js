function init() {
    console.log(saludar("mirko"));
    console.log("");
    console.log(calcular(5, 3));
    console.log("");
    console.log(calcularPromedio(5, 3, "a", 4));
    console.log("");
    console.log(concatenarNombres(5, "ae", "a", 4));
}

function saludar(nombre, saludo = "Hola") {
    return saludo + " " + nombre;
}

function calcular(num1, num2, operacion = "suma") {
    switch(operacion) {
        case "suma":
            return num1 + num2;

        case "resta":
            return num1 - num2;

        case "multiplicacion":
            return num1 * num2;

        case "division":
            if (num2 == 0) {
                return "No se puede divir por 0 bobo.";
            }
            return num1 / num2;
    }
}

function calcularPromedio() {
    let numDividir = 0;
    let sum = 0;
    for (let num of arguments) {
        if (typeof num === 'number') {
            numDividir++;
            sum += num;
        }
    }
    return sum / numDividir;
}

function concatenarNombres() {
    let nombres = "";

    for (let name of arguments) {
        if (typeof name === 'string') {
            nombres += name + ", ";
        }
    }

    return nombres;
}