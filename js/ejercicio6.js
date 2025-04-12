/* ejercicio buclee */
let edades = [19,20,21,22,23,24,25,26];
suma = 0;

for(let i = 0; i<edades.length; i++){
    suma += edades[i] 
}

let promedio = suma / edades.length;
console.log("el promedio de las edades del array es: ",promedio);
