export let paisesYCapitales = {
    Argentina: "Buenos Aires",
    Brasil: "Brasilia",
    Chile: "Santiago",
    Colombia: "Bogota",
    México: "Ciudad de México",
    Perú: "Lima"
  };
  
    export function llenarSelect(selectElement, opciones) {

        selectElement.innerHTML = "";
      
        for (let opcion of opciones) {
          let option = document.createElement("option");
          option.value = opcion;
          option.textContent = opcion;
          selectElement.appendChild(option);
        }
      }