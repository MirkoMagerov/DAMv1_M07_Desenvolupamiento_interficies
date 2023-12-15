function Init() {
    let firstNum = 5;
    let secondNum = 7.9;
    let thirdNum = 6.55;

    console.log(CalculateMedia(firstNum, secondNum, thirdNum));
}

function CalculateMedia(firstNum, secondNum, thirdNum) {
    const numberOfDecimals = 1;
    
    let sum = firstNum + secondNum + thirdNum;

    return (sum / CalculateMedia.length).toFixed(numberOfDecimals);
}