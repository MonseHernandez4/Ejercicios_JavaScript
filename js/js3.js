/* Escribir un programa que imprima los horarios en que debe tomar los medicamentos un paciente.
Solicitar al usuario la hora de la toma inicial (0-23) 
y la frecuencia de la toma diaria (1-12)*/

let hora_ini = 5;
let frecuencia = 2;

console.log("Ejercicio de los horarios del paciente");
console.log("Hora incial de la toma: ", hora_ini);
console.log("Frecuencia: ", frecuencia);
let num_tomas = (24/frecuencia);
console.log("El paciente debe tomar:" , num_tomas, "tomas en total")
console.log("Horarios");

let horario = hora_ini;
for (let i = 1;i <= num_tomas; i++) {
    console.log("Toma " + i + " - " + (horario) + ":00");
    horario = horario + frecuencia;
    if (horario >= 24) {horario = horario - 24;};
};

/* Escribir un programa en java que permita
imprimir en pantalla n numeros perfectos. 
El usuario podra indicar cuantos numeros perfectos es aquel que la suma de sus divisiones excepto el mismo,
da como resultado el mismo numero.
Ejemplo: para el 6 sus divisiones son 1,2,3,6 
Sumando todos excepto el 6: 1+2+3= 6, 6 es perfecto. */


let cantidad_nums = prompt("Ingresa la cantidad de numeros perfectos que desea ver");
let numeros = 0;
let num = 0;


document.write(`Son ${cantidad_nums} numeros perfectos: <br><br>`);

while (cantidad_nums!= numeros){
    num = num + 1;
    let suma = 0;

    for (let i = 1; i < num; i++)
    {
        if(num % i == 0 ){
            suma = suma + i;
        };
    };
    if (suma == num) 
    {
        document.write(num + "<br>");
        numeros = numeros + 1;
    };
}
