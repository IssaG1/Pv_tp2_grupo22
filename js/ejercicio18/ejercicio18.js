import { cambiarTexto } from "./funciones.js";

let parrafo = document.getElementById("miParrafo");
let boton = document.getElementById("cambiarTexto");

boton.addEventListener("click", () => {
  cambiarTexto(parrafo);
});
