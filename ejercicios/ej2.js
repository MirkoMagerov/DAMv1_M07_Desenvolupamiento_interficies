function Init() {
    let firstNum = 5;
    let secondNum = 3;

    console.log(MultiplyNumber(firstNum, secondNum));
}

function MultiplyNumber(firstNumber, secondNumber) {
    let result = 0;
    for (firstNumber; firstNumber > 0; firstNumber--) {
        result += secondNumber;
    }
    return result;
}