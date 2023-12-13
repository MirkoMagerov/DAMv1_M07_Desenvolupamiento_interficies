const divPrincipal = document.querySelector('#contenedor');

let userNumberCounter = prompt("Escribe la cantidad de teclas que quieres: ");
let columnas = prompt("Escribe las columnas que quieres: ");

divPrincipal.className = "divPrincipal";

divPrincipal.style.width = (100 * columnas) + (5 * columnas) + "px";

if (userNumberCounter <= 30) {
    for (let i = 0; i <= userNumberCounter; i++) {
        let divTecla = document.createElement("divTecla");
        divTecla.className = "divTecla";
        divTecla.textContent = i;

        if (i % 3 == 0 ) {
            divTecla.style.backgroundColor = "yellow";
        }
        else if (i % 2 == 0 && i != 0) {
            divTecla.style.backgroundColor = "blue";
        }

        divPrincipal.appendChild(divTecla);
    }
}

else {
    alert("Número demasiado grande, bobo.");
}