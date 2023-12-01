const divPrincipal = document.getElementById("contenedor");

let counter = 1;

divPrincipal.className = "divPrincipal";

for (let i = 0; i < 9; i++) {
    let divTecla = document.createElement("div");
    divTecla.className = "divTecla";
    divTecla.textContent = counter;
    divPrincipal.appendChild(divTecla);
    counter++;
};

console.log("5" == 5)