const divPrincipal = document.getElementById("contenedor");
const body = document.getElementById("body");

let counter = 1;

let saltoLinea = document.createElement("br");
let userNumberCounter;

userNumberCounter = prompt("Escribe la cantidad de teclas que quieres: ");

divPrincipal.className = "divPrincipal";

for (let i = 0; i < userNumberCounter; i++) {
    let divTecla = document.createElement("divTecla");
    divTecla.className = "divTecla";
    divTecla.textContent = counter;
    divPrincipal.appendChild(divTecla);
    counter++;
}

if (userNumberCounter > 0) {
    let j = 0;
    counter = 1;
    while (j < userNumberCounter) {
        let divTecla = document.createElement("divTecla");
        divTecla.className = "divTecla";
        divTecla.textContent = counter;
        divPrincipal.appendChild(divTecla);
        counter++;
        j++;
    }
}