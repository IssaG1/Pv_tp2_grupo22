

import { paisesYCapitales, llenarSelect } from "./funciones.js";


let selectPaises = document.getElementById("paises");
let selectCapitales = document.getElementById("capitales");


llenarSelect(selectPaises, Object.keys(paisesYCapitales));


let primerPais = selectPaises.value;
llenarSelect(selectCapitales, [paisesYCapitales[primerPais]]);


selectPaises.addEventListener("change", () => {
  let paisSeleccionado = selectPaises.value;
  let capitalCorrespondiente = paisesYCapitales[paisSeleccionado];

  llenarSelect(selectCapitales, [capitalCorrespondiente]);


  console.log(`Pais: ${paisSeleccionado}`);
  console.log(`Capital: ${capitalCorrespondiente}`);
});
