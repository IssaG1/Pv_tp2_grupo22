/* funciones ejercicio */
/*  */
/* 8.Declarar una función con nombre calcularMayor() y pasarle como
parámetros (numero1,numero2). Dentro de la función mostrar un alert que diga cuál de los
números ingresados es mayor. En caso de ser iguales, tendrá que indicarlo a través de un
alert también.
Invocar la función y enviar los argumentos con diferentes números para probar.
 */


const numero1 = 40;
const numero2 = 30;

const calcularMayor = (numero1, numero2) => {
    if (numero1 > numero2) {
        alert(`el numero mayor es ${numero1}`);
    } else if (numero1 < numero2) {
        alert(`el numero mayor es ${numero2}`)
    } else {
        alert(`los numeros ${numero1} y ${numero2} son iguales`);
    }
};

calcularMayor(numero1,numero2);
