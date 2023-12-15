function Init() {
    let firstNum = 5;
    let secondNum = 10;

    console.log(GetBiggerNumber(firstNum, secondNum));
}

function GetBiggerNumber(firstNum, secondNum) {
    if (firstNum == secondNum) {
        return 'Números iguales';
    }
    else {
        if (firstNum > secondNum) {
            return 'El primer número es mas grande.';
        }
        else if (secondNum > firstNum) {
            return 'El segundo número es mas grande.';
        }
    }
}