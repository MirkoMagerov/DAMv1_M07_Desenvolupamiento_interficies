function Init() {
    let word;

    word = prompt("Escribe una palabra para separar las vocales de consonantes").toUpperCase().replaceAll(" ", "");

    SepararVocalesDeConsonantes(word);
}

function SepararVocalesDeConsonantes(word) {
    const charA = 'A', charE = 'E', charI = 'I', charO = 'O', charU = 'U';
    
    let vowels = "", consonants = "";

    for (let char of word) {
        if (char == charA || char == charE || char == charI || char == charO || char == charU) {
            vowels += char;
        }
        else {
            consonants += char;
        }
    }

    console.log("Las vocales són: " + vowels);
    console.log("Las consonantes són: " + consonants);
}