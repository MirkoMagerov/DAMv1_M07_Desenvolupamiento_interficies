function Init() {
    GetDigits(10000);
}

function GetDigits(range) {
    for (let i = 1; i <= range; i++) {
        let digit1 = 0, digit2 = 0, digit3 = 0, digit4 = 0;

        digit4 = i % 10;
        digit3 = Math.floor((i / 10) % 10);
        digit2 = Math.floor(i / 100);
        digit1 = Math.floor(i / 1000);

        if (GetCubeSum(digit1, digit2, digit3, digit4) == i) {
            console.log(i, "encontrado");
        }
    }
}

function GetCubeSum(digit1, digit2, digit3, digit4) {

    let digitSum1 = 0, digitSum2 = 0, digitSum3 = 0, digitSum4 = 0, cubeMultiplication = 3;

    digitSum1 = Math.pow(digit1, cubeMultiplication);
    digitSum2 = Math.pow(digit2, cubeMultiplication);
    digitSum3 = Math.pow(digit3, cubeMultiplication);
    digitSum4 = Math.pow(digit4, cubeMultiplication);

    return + digitSum4 + digitSum3 + digitSum2 + digitSum1;
}