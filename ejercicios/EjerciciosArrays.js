function Init() {
    
}

/* EX 1 */
    // let numbers = [1, 3, 2, 5, 7, 4]; 
    //console.log(AddEvenNum(numbers));

function AddEvenNum(array) {
    let sum = 0;
    
    for(let i in array) {
        if (array[i] % 2 == 0) {
            sum+= array[i];
        }
    }

    return sum;
}


/* EX 2 */
    // let array = ["Rodriguez", "8", 9, '5', 4, 'Clara'];
    // console.log(OrderStudentData(array));

function OrderStudentData(studentArray) {
    let sum = 0, numbers = 0;

    studentArray.unshift(studentArray.pop());

    for (let value of studentArray) {
        if (typeof value === 'number') {
            sum += value;
            numbers++;
        }
    }

    median = sum / numbers;
    studentArray.push(median);

    return studentArray;
}


/* EX 3 */
    // let array = ["Leon", "Zebra", "Puma", 3, "Gato", 5];
    // console.log(DeleteZWords(array));

function DeleteZWords(array) {
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'string' && (array[i].startsWith("Z") || array[i].startsWith("z"))){
            array.splice(i,1);
        }
    }
    return array;
}


/* EX 4 */
    // let index = 1;
    // let array = [1, 3, 5, 7, 9];
    // let finalArrayWithoutSpecifiedElements = TheBestSplice(array, index);
    // console.log(finalArrayWithoutSpecifiedElements);
    // // console.log(array.splice(2));

function TheBestSplice(array, index) {
    let newArr = [];

    if (index >= array.length) {
        return newArr;
    }
    else {
        for (let i = index; i < array.length; i++) {
            newArr.push(array[i]);
        }
    }
    
    return newArr;
}

function TheBestSplice(array, index, toDeleteElements) {

}


/* Reverse */
    // let array = [3, 5, 1, 7, 12, 10, 22, 7, 30];
    // console.log(ReverseSort(array));

function ReverseSort(array) {
    let aux = 0;

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] <array[j]) {
                aux = array[i];
                array[i] = array[j];
                array[j] = aux;
            }
        }
    }

    return array;
}