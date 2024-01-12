function init() {
    const GOOD_MIN_LENGTH = "La contraseña cumple con la longitud mínima requerida. ✅";
    const BAD_MIN_LENGTH = "La contraseña no cumple con la longitud mínima requerida. ❌";

    const GOOD_MAX_LENGTH = "La contraseña cumple con la longitud máxima permitida. ✅";
    const BAD_MAX_LENGTH = "La contraseña excede la longitud máxima permitida. ❌";

    const GOOD_NUMBERS = "La contraseña contiene con al menos un dígito. ✅";
    const BAD_NUMBERS = "La contraseña no contiene ningún dígito. ❌";

    const GOOD_LOWER_CASE = "La contraseña contiene al menos dos letras minúscula. ✅";
    const BAD_LOWER_CASE = "La contraseña no contiene al menos dos letras minúsculas. ❌";

    const GOOD_UPPER_CASE = "La contraseña contiene al menos una letra mayúscula. ✅";
    const BAD_UPPER_CASE = "La contraseña no contiene letras mayúsculas. ❌";

    const GOOD_WHITE_SPACES = "La contraseña no contiene espacios en blanco. ✅";
    const BAD_WHITE_SPACES = "La contraseña no debe contener espacios en blanco. ❌";

    const GOOD_SPECIAL_CHARACTERS = "La contraseña contiene al menos 3 carácteres especial. ✅";
    const BAD_SPECIAL_CHARACTERS = "La contraseña no contiene carácteres especiales. ❌";

    const GOOD_REPETITIVE_CHARACTERS = "La contraseña no contiene repeticiones consecutivas de caracteres. ✅";
    const BAD_REPETITIVE_CHARACTERS = "La contraseña contiene repeticiones consecutivas de caracteres. ❌";

    let password = getPass();
    
    console.log((checkMinLength(password)) ? GOOD_MIN_LENGTH : BAD_MIN_LENGTH);
    console.log((checkMaxLength(password)) ? GOOD_MAX_LENGTH : BAD_MAX_LENGTH);
    console.log((checkNumber(password)) ? GOOD_NUMBERS : BAD_NUMBERS);
    console.log((hasLowercaseLetters(password)) ? GOOD_LOWER_CASE : BAD_LOWER_CASE ); 
    console.log((hasUppercaseLetters(password)) ? GOOD_UPPER_CASE : BAD_UPPER_CASE); 
    console.log((hasWhiteSpaces(password)) ? BAD_WHITE_SPACES : GOOD_WHITE_SPACES);
    console.log((hasSpecialCharacters(password)) ? GOOD_SPECIAL_CHARACTERS : BAD_SPECIAL_CHARACTERS); 
    console.log((hasRepetitiveCharacters(password)) ? BAD_REPETITIVE_CHARACTERS : GOOD_REPETITIVE_CHARACTERS);
}

function getPass() {
    let pass = prompt("Escribe tu contraseña: ");
    return pass;
}

// Check min length
function checkMinLength(pass) {
    return pass.length < 8 ? false : true;
}

// Check max length
function checkMaxLength(pass) {
    return pass.length > 20 ? false : true;
}

// Check at least one number
function checkNumber(pass) {
    const NUMBERS_ARRAY = ["0","1","2","3","4","5","6","7","8","9"];

    for (let i = 0; i < pass.length; i++) {
        for (let j = 0; j < NUMBERS_ARRAY.length; j++) {
            if (pass[i] == NUMBERS_ARRAY[j]) {
                return true;
            }
        }
    }

    return false;
}

// Check lowercase letters
function hasLowercaseLetters(pass) {
    let lowercaseCounter = 0;

    for (let char of pass) {
        if (char.match(/[a-zA-Z]/) && char == char.toLowerCase()) {
            lowercaseCounter++;
            if (lowercaseCounter == 2) {
                return true;
            }
        }
    }
    return false;
}

// Check uppercase letters
function hasUppercaseLetters(pass) {
    for (let char of pass) {
        if (char.match(/[a-zA-Z]/) && char == char.toUpperCase()) {
            return true;
        }
    }
    return false;
}

// Check white spaces
function hasWhiteSpaces(pass) {
    for (let i = 0; i < pass.length; i++) {
        if (pass[i] == " ") {
            return true;
        }
    }
    return false;
}

// Check special characters
function hasSpecialCharacters(pass) {
    const specialChar = [",", ".", "-", "_", "#", "$", "%", "&", "/"];

    for (let i = 0; i < pass.length; i++) {
        for (let j = 0; j < specialChar.length; j++) {
            if (pass[i] == specialChar[j]) return true;
        }
    }

    return false;
}

// Check three equal characters
function hasRepetitiveCharacters(pass) {
    let actualChar = "";
    let equalLetterCounter = 0;

    for (let i = 0; i < pass.length-1; i++) {
        actualChar = pass[i];
        if (equalLetterCounter < 3) {
            for (let j = 1; j < pass.length; j++) {
                if (equalLetterCounter < 3) {
                    if (actualChar == pass[j]) {
                        equalLetterCounter++;
                    }
                }
                
            }
        }
        else {
            return true;
        }
    }
    return false;
}