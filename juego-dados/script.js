function Init() {
    let rounds = 2;
    Game(rounds);
}

function GenerateBetween1And6() {
    let number;

    number = Math.floor(Math.random() * 6) + 1;

    return number;
}

function Round() {
    const SECTION_JUEGO = document.querySelector('#juego');

    let userDiv = document.createElement("div");
    userDiv.className = "dadoJugador";
    let computerDiv = document.createElement("div");
    computerDiv.className = "dadoOrdenador";

    let userNumber = GenerateBetween1And6();
    let computerNumber = GenerateBetween1And6();

    userDiv.textContent = userNumber;
    computerDiv.textContent = computerNumber;

    SECTION_JUEGO.append(userDiv, computerDiv);
}

function Game(rounds) {
    for(rounds; rounds > 0; rounds--) {
        Round();
    }
}