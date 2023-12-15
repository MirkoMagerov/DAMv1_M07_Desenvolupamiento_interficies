function Init() {
    let number = 3;
    console.log(GetCubeNumber(number));
}

function GetCubeNumber(number) {
    let cubeElevation = 3;

    if (isNaN(number)) {
        return 'Not a number';
    }

    if (Math.round(number) - number != 0) {
        return 'Not a integer';
    }
    else {
        return Math.pow(number, cubeElevation);
    }
}