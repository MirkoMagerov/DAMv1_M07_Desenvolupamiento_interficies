function init() {
    // COPIAR Y PEGAR LOS COMENTARIOS DE CADA FUNCIÓN PARA COMPROBAR SI FUNCIONA
    // Sample arrays
    const stringArray = ["apple", "banana", "cherry"];
    const numberArray = [2, 4, 6, 8, 10];
    const mixedArray = ["apple", 3, "cherry", 6];

    // EX 1
    console.log("EX 1: ", equalTypeArray(stringArray));

    // EX 2
    console.log("EX 2: ", checkEven(numberArray));

    // EX 3
    console.log("EX 3: ", longTwo(stringArray));

    // EX 4
    console.log("EX 4: ", atLeastOneEven(numberArray));

    // EX 5
    console.log("EX 5: ", getAllLengths(stringArray));

    // EX 6
    console.log("EX 6: ", multiplyArray(numberArray, 3));

    // EX 7
    console.log("EX 7: ", onlyZFilter(mixedArray));

    // EX 8
    console.log("EX 8: ", onlyFiveMultiples(numberArray));

    // EX 9
    console.log("EX 9: ", firstLengthFive(stringArray));

    // EX 10
    console.log("EX 10: ", lastWithP(mixedArray));

    // EX 11
    console.log("EX 11: ", firstWithT(stringArray));

    // EX 12
    console.log("EX 12: ", lastEven(numberArray));

    // EX 13
    console.log("EX 13: ", addAll(numberArray));

    // EX 14
    console.log("EX 14: ", minusFirstAndSecondAsc(numberArray));

    // EX 15
    console.log("EX 15: ", minusFirstAndSecondDesc(numberArray));

}

// ************** TODOS *************
// EX 1
function equalTypeArray(array) {
    for (let element of array) {
        if (typeof element !== "string") {
            return false;
        }
    }
    return true;
}

// EX 2
function checkEven(array) {
    for (let element of array) {
        if (element % 2 != 0) {
            return false;
        }
    }
    return true;
}

// ************** AL MENOS UNO *************

// EX 3
function longTwo(array) {
    for (let element of array) {
        if (element.length > 2) {
            return true;
        }
    }
    return false;
}

// EX 4
function atLeastOneEven(array) {
    for (let num of array) {
        if (num % 2 == 0) {
            return true;
        }
    }
    return false;
}

// ************** TRANSFORMA *************

// EX 5
function getAllLengths(array) {
    let lengthArray = [];

    for (let element of array) {
        lengthArray.push(element.length);
    }

    return lengthArray;
}

// EX 6
function multiplyArray(array, num) {
    let newArr = [];

    for (let element of array) {
        for (let i = num; i > 0; i--) {
            newArr.push(element);
        }
    }

    return newArr;
}

// ************** FILTRO *************

// EX 7
function onlyZFilter(array) {
    let newArr = [];
    let minusElement = "";

    for (let element of array) {
        if (typeof element === "string") {
            minusElement = element.toLowerCase();
        }
        if (element.startsWith('z')) newArr.push(element);
    }

    return newArr;
}

// EX 8
function onlyFiveMultiples(array) {
    let newArr = [];

    for (let num of array) {
        if (num % 5 == 0) {
            newArr.push(num);
        }
    }

    return newArr;
}

// ************** BUSCA *************

// EX 9
function firstLengthFive(array) {
    for (let element of array) {
        if (element.length >= 5) return element;
    }
    return "NINGÚN ELEMENTO TIENE UNA LONGITUD DE 5 O MÁS.";
}

// EX 10
function lastWithP(array) {
    let minusElement = "";
    for (let i = array.length; i > 0; i--) {
        if (typeof array[i] === "string") {
            minusElement = array[i].toLowerCase();
        }
        if (minusElement.startsWith('p')) return array[i];
    }
    return "NINGÚN ELEMENTO EMPIEZA POR 'P'.";
}

// EX 11
function firstWithT(array) {
    let minusElement = "";
    for (let element of array) {
        if (typeof element === "string") {
            minusElement = element.toLowerCase();
        }
        if (minusElement.startsWith('t')) return element;
    }
    return "NINGÚN ELEMENTO EMPIEZA POR 'T'.";
}

// EX 12
function lastEven(array) {
    for (let i = array.length; i > 0; i--) {
        if (array[i] % 2 == 0) return array[i];
    }
    return "NINGÚN ELEMENTO ES PAR.";
}

// ************** ACUMULA *************

// EX 13
function addAll(array) {
    let sum = 0;
    for (let num of array) {
        sum += num;
    }
    return sum;
}

// EX 14
function minusFirstAndSecondAsc(array) {
    let result = array[0] - array[1];

    for (let i = 2; i < array.length; i++) {
        result -= array[i];
    }

    return result;
}

// EX 15
function minusFirstAndSecondDesc(array) {
    let result = array[array.length - 1] - array[array.length - 2];

    for (let i = array.length - 3; i >= 0; i--) {
        result -= array[i];
    }

    return result;
}