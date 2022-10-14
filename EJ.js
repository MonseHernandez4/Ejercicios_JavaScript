/* Escribir un programa que imprima los horarios en que debe tomar los medicamentos un paciente.
Solicitar al usuario la hora de la toma inicial (0-23) 
y la frecuencia de la toma diaria (1-12)*/

let hora_ini = 5;
let frecuencia = 2;

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