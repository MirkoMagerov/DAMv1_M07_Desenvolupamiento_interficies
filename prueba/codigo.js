let tituloPrincipal = document.getElementById("titulo_principal");
let titulosArticulos = document.getElementsByClassName("titulo_articulo");
let textosArticulos = document.getElementsByClassName("texto_articulo");

let nombreUsuario = prompt("Introduce tu nombre: ");

tituloPrincipal.textContent = nombreUsuario;

let userDecisionColorText = confirm("Quieres pintar el texto de color rojo?");
let userDecisionBGColor = confirm ("Quieres pintar el fondo de color verde?");

if (userDecisionColorText) {
    tituloPrincipal.style.color = "red";
};

if (userDecisionBGColor) {
    tituloPrincipal.style.backgroundColor = "green";
};