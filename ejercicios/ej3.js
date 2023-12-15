function Init() {
    let firstNum = 5;
    let secondNum = 3;
    let thirdNum = 5;

    console.log(MultiplyNumber(thirdNum, MultiplyNumber(firstNum, secondNum)));
}

function MultiplyNumber(firstNumber, secondNumber) {
    let result = 0;
    for (firstNumber; firstNumber > 0; firstNumber--) {
        result += secondNumber;
    }
    return result;
}