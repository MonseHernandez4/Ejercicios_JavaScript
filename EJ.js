/* Escribir un programa que imprima los horarios en que debe tomar los medicamentos un paciente.
Solicitar al usuario la hora de la toma inicial (0-23) 
y la frecuencia de la toma diaria (1-12)*/

let hora_ini = 5;
let frecuencia = 2;

console.log("Hora incial de la toma: ", hora_ini);
console.log("Frecuencia: ", frecuencia);
console.log("Horarios")
let num_tomas = (24/frecuencia);
console.log("El paciente debe tomar al dia:", num_tomas);


