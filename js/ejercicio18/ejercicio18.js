import { cambiarTexto } from "./funciones.js";

const parrafo = document.getElementById("miParrafo");
const boton = document.getElementById("cambiarTexto");

boton.addEventListener("click", () => {
  cambiarTexto(parrafo);
});
