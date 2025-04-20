const $botonOscuro = document.getElementById("oscuro");
const $html = document.querySelector("body");

$botonOscuro.addEventListener("click", () => {
    $html.classList.toggle("modo-oscuro")
});