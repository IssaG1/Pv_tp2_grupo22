export const mostrarDatos = () => {
  const nombre = document.querySelector('#nombre').value;
  const apellido = document.querySelector('#apellido').value;
  const libreta = document.querySelector('#libreta').value;

  alert(`Datos del Alumno:\nNombre: ${nombre}\nApellido: ${apellido}\nLU: ${libreta}`);
};
