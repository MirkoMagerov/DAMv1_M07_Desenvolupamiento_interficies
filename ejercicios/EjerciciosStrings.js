// Los comentarios son lo que hay que copiar de cada función después del prompt en el Init.

function Init() {
    let word = "";

    word = prompt().toLowerCase();

    console.log(replaceFirstAndLastLetterOfString(word));
}

// EJ-1
function stringBeginsWithAS(word) {
    // console.log(stringBeginsWithAS(word));

    if (word[0] == "a" && word[1] == "s") {
        return word;
    }
    else {
        let newWord = "As" + word;
        return newWord;
    }
}

// EJ-2
function deleteIndexLetterFromString(word, indexNumber) {
    // let indexNumber = prompt();

    // console.log(deleteIndexLetterFromString(word, indexNumber));

    if (indexNumber > word.length - 1 || indexNumber < 0) {
        console.log("El índice de la palabra no puede ser más largo que la palabra");

        return word;
    }
    else {
        let newWord = word.replace(word[indexNumber], '');

        return newWord;
    }
}

// EJ-3
function replaceFirstAndLastLetterOfString(word) {
    // console.log(replaceFirstAndLastLetterOfString(word));

    if (word.length > 0) {
        return (word[word.length-1] + word.substring(1, word.length-1) + word[0]);
    }
    else {
        return "TIENES QUE PONER UNA PALABRA BOBO";
    }
}