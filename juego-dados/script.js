function Init() {
    let rounds = 2, userPoints = 0, computerPoints = 0;
    Game(rounds);
    userPoints += UserPointsCounter();
    computerPoints += ComputerPointsCounter();
    DisplayWinner(userPoints, computerPoints);
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

function UserPointsCounter() {
    const DADOS_JUGADOR = document.querySelectorAll('.dadoJugador');
    
    let points = 0;

    DADOS_JUGADOR.forEach(div => {
        points += parseInt(div.textContent);
    });

    return points;
}

function ComputerPointsCounter() {
    const DADOS_ORDENADOR = document.querySelectorAll('.dadoOrdenador');
    
    let points = 0;

    DADOS_ORDENADOR.forEach(div => {
        points += parseInt(div.textContent);
    });

    return points;
}

function DisplayWinner(userPoints, computerPoints) {
    const WINNER_SECTION = document.querySelector('#ganador');
    const WINNER_TEXT = document.createElement('h3');
    WINNER_TEXT.id = "winner";

    if (userPoints == computerPoints) {
        WINNER_TEXT.textContent = "EMPATE";
        WINNER_TEXT.style.borderBottom = "3px solid black";
        WINNER_TEXT.style.color = "black";
    }
    else if (userPoints > computerPoints) {
        WINNER_TEXT.textContent = "HAS GANADO";
        WINNER_TEXT.style.borderBottom = "3px solid green";
        WINNER_TEXT.style.color = "green";
    }
    else {
        WINNER_TEXT.textContent = "HAS PERDIDO";
        WINNER_TEXT.style.borderBottom = "3px solid red";
        WINNER_TEXT.style.color = "red";
    }

    WINNER_SECTION.append(WINNER_TEXT);
}

function Game(rounds) {
    for(rounds; rounds > 0; rounds--) {
        Round();
    }
}