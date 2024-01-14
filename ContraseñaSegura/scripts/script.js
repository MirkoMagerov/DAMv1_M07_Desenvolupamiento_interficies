function init() {
    const MIN_LENGTH = document.querySelector("#min_length");
    const MAX_LENGTH = document.querySelector("#max_length");
    const NUMBERS = document.querySelector("#numbers");
    const LOWER_CASE = document.querySelector("#lower_case");
    const UPPER_CASE = document.querySelector("#upper_case");
    const WHITE_SPACES = document.querySelector("#white_spaces");
    const SPECIAL_CHARACTERS = document.querySelector("#special_characters");
    const REPETITIVE_CHARACTERS = document.querySelector("#repetitive_characters");
    const CHECK_BUTTON = document.querySelector("#check_button");
    const TOGGLE_VISIBILITY_EYE = document.querySelector("#toggle_visibility_eye");
    const PASSWORD_INPUT = document.querySelector("#password");

    CHECK_BUTTON.addEventListener("click", () => checkPassword(PASSWORD_INPUT, MIN_LENGTH, MAX_LENGTH, NUMBERS, LOWER_CASE, UPPER_CASE, WHITE_SPACES, SPECIAL_CHARACTERS, REPETITIVE_CHARACTERS));
    TOGGLE_VISIBILITY_EYE.addEventListener("click", () => togglePasswordVisibility(PASSWORD_INPUT, TOGGLE_VISIBILITY_EYE));
}

function checkPassword(PASSWORD_INPUT, MIN_LENGTH, MAX_LENGTH, NUMBERS, LOWER_CASE, UPPER_CASE, WHITE_SPACES, SPECIAL_CHARACTERS, REPETITIVE_CHARACTERS) {
    const PASSWORD = PASSWORD_INPUT.value;
    
    checkMinLength(PASSWORD) ? matchReq(MIN_LENGTH) : notMatchReq(MIN_LENGTH);
    checkMaxLength(PASSWORD) ? matchReq(MAX_LENGTH) : notMatchReq(MAX_LENGTH);
    checkNumber(PASSWORD) ? matchReq(NUMBERS) : notMatchReq(NUMBERS);
    hasLowercaseLetters(PASSWORD) ? matchReq(LOWER_CASE) : notMatchReq(LOWER_CASE);
    hasUppercaseLetters(PASSWORD) ? matchReq(UPPER_CASE) : notMatchReq(UPPER_CASE);
    hasWhiteSpaces(PASSWORD) ? notMatchReq(WHITE_SPACES) : matchReq(WHITE_SPACES);
    hasSpecialCharacters(PASSWORD) ? matchReq(SPECIAL_CHARACTERS) : notMatchReq(SPECIAL_CHARACTERS);
    hasRepetitiveCharacters(PASSWORD) ? notMatchReq(REPETITIVE_CHARACTERS) : notMatchReq(REPETITIVE_CHARACTERS);
}

function matchReq(req) {
    req.style.color = "rgb(23, 197, 0)";
    req.style.fontWeight = "normal";
}

function notMatchReq(req) {
    req.style.color = "red";
    req.style.fontWeight = "bold";
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
    let equalLetterCounter = 1;

    for (let i = 0; i < pass.length - 1; i++) {
        if (pass[i] == pass[i+1]) {
            equalLetterCounter++;

            if (equalLetterCounter == 3) {
                return true;
            }
        }
        else {
            equalLetterCounter = 1;
        }
    }
    return false;
}

function togglePasswordVisibility(password, eye_image) {
    const OPENED_EYE_PATH = "images/open_eye.png";
    const CLOSED_EYE_PATH = "images/closed_eye.png";

    if (password.type == "password") {
        password.type = "text";
        eye_image.src = OPENED_EYE_PATH;
    }
    else {
        password.type = "password";
        eye_image.src = CLOSED_EYE_PATH;
    }
}