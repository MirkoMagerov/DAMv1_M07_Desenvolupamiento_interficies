function init() {
    // ************ PRIMERA DIAPOSITIVA *****************
    // console.log(printBiggerNum([3,27,95,7,25,95,81]));
    // console.log(printLargerString(["first", "second", "third", "fourth", "reallyLongString", "sixth"]));
    // console.log(printMDays(["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]));
    // console.log(printVowelMonths([
    //     "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    //     "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    // ]));

    // ************ SEGUNDA DIAPOSITIVA *****************
    // const diasDeLaSemana = [
    //     "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"
    // ];
    // console.log("Primer día que empieza con 'M':", firstDayWithM(diasDeLaSemana));
    // console.log("Posición del primer día que empieza con 'V':", positionWithV(diasDeLaSemana));
    // console.log("¿Algun día empieza con 'S'?", someDayStartsWithS(diasDeLaSemana));
    // console.log("¿Todos los días terminan con 's'?", allDaysEndWithS(diasDeLaSemana));

    // ************ TERCERA DIAPOSITIVA *****************
    // const notas = [3.4, 7.9, 8.0, 2.5, 5.6, 5.4, 9.0];
    // console.log(calculateMedian(notas));
    // console.log(firstMajorThan5(notas));
    // console.log(convertTo20(notas));

    var coches = [
        ["seat","Codoba",1997,10000],
        ["Kia","Sorento",1994,1000],
        ["seat","Todelo",2000,10000],
        ["Fiat","Bravo",2010,10200],
        ["Fiat","500",2010,10000],
        ["Mercedes","Calse B",2001,39000],  
        ["seat","Ibiza",1993,10100],
        ["Alfa Romeo","Julieta",2002,10000],
        ["Alfa Romeo","159",2002,10400],
        ["Mercedes","Calse C",2001,1000],  
        ["Alfa Romeo","147",1990,10500],
        ["Fiat","Punto",1990,999],
        ["Citroen","Saxo",1980,10300],
        ["Renault","Superc 5",1980,12000],
        ["BWM","M3",2020,1000],
        ["Kia","Picanto",1990,1000],
        ["Alfa Romeo","spider",1970,14500],
        ["Mercedes","Calse A",1994,60100],  
        ["Mercedes","Calse D",2011,21221]  
    ];

    console.log(notAlfaRomeoNorKia20Years(coches));
}

function printBiggerNum(array) {
    let biggerNum = array[0];

    array.forEach(numero => {if(biggerNum < numero) biggerNum = numero});

    return biggerNum;
}

function printLargerString(array) {
    let largerString = array[0];

    array.forEach(palabra => {if(largerString.length < palabra.length) largerString = palabra});

    return largerString;
}

function printMDays(array) {
    let copyArray = [];
    for (let day of array) {
        copyArray.push(day.toUpperCase());
    }

    let mDays = [];

    copyArray.forEach(day => {if(day.startsWith("M")) mDays.push(day) });

    return mDays;
}

function printVowelMonths(array) {
    const VOWELS = ["A", "E", "I", "O", "U"];

    let vowelMonths = [];

    array.forEach(month => {
        for(let vowel of VOWELS) {
            if (month.startsWith(vowel)) vowelMonths.push(month);
        }
    });

    return vowelMonths;
}

function firstDayWithM(array) {
    let copyArray = [];
    for (let day of array) copyArray.push(day.toUpperCase());

    let dayWithM = copyArray.find(day => day.startsWith("M"));

    if (dayWithM === undefined) dayWithM = "NINGÚN DIA EMPIEZA POR M";

    return dayWithM;
}

function positionWithV(array) {
    let copyArray = [];
    for (let day of array) copyArray.push(day.toUpperCase());

    let dayWithV = copyArray.findIndex(day => day.startsWith("V"));

    if (dayWithV === undefined) dayWithV = "NINGÚN DIA EMPIEZA POR M";

    return dayWithV;
}

function someDayStartsWithS(array) {
    let copyArray = [];
    for (let day of array) copyArray.push(day.toUpperCase());

    return copyArray.some(day => day.startsWith("S"));
}

function allDaysEndWithS(array) {
    let copyArray = [];
    for (let day of array) copyArray.push(day.toUpperCase());

    return copyArray.every(day => day.endsWith("S"));
}

function calculateMedian(array) {
    let sum = array.reduce((add, num) => add + num);

    return (sum / array.length).toFixed(2) ;
}

function firstMajorThan5(array) {
    let firstMajorThan5 = array.find(nota => nota > 5);

    return firstMajorThan5;
}

function convertTo20(array) {
    let newArr = array.map(num => num * 2);

    return newArr;
}

function notAlfaRomeoNorKia20Years(array) {
    const cochesFiltrados = array.filter(coche => coche[0] != 'Alfa Romeo' && coche[0] != 'Kia');
    return cochesFiltrados;
}