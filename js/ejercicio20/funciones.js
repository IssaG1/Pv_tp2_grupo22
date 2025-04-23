export let paisesYCapitales = {
    Argentina: "Buenos Aires",
    Brasil: "Brasilia",
    Chile: "Santiago",
    Colombia: "Bogota",
    México: "Ciudad de México",
    Perú: "Lima"
  };
  
  export const llenarSelect = (selectElement, opciones) => {
    selectElement.innerHTML = "";
  
    opciones.forEach(opcion => {
      let option = document.createElement("option");
      option.value = opcion;
      option.textContent = opcion;
      selectElement.appendChild(option);
    });
  };
  