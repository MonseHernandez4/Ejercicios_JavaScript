//function nombre(){};
//const nombre = function(){};
//const nombre = ()  => {};


//Ejemplos funciones

function divisores(numero){
    let total = 0;

    for(let i=1; i <=numero; i++){
        if(numero % i == 0){
            total++;

        }
    }
    return total;
};

const divisoresV2 = function(numero){
    let total = 0;

    for(let i=1; i <=numero; i++){
        if(numero % i == 0){
            total++;

        }
    }
    return total;

};

const divisoresV3 = (numero) => {
    let total = 0;

    for(let i=1; i <=numero; i++){
        if(numero % i == 0){
            total++;

        }
    }
    return total;
};

//
function calcular(){ 
    let numero = 
    parseInt(document.getElementById("numero").value);

    let resultado =
    document.getElementById("resul");

    resultado.value = divisores(numero);
}

console.log("Total divisores",divisores(32));
console.log("Total divisores",divisoresV2(32));
console.log("Total divisores",divisoresV3(32));

//Ejercicio Imagenes

function imagen(){ 
    let num_imagen = parseInt(document.getElementById("numero").value);

    let imagen = document.getElementById("imagen");

    switch (num_imagen) {
        case 1:
            break;
    
        default:
            break;
    }
}

/* Escribir un programa que pida al usuario
cuantos numeros perfectos desea ver.
Un numero perfecto es aquel que la suma de sus divisores excepto
el mismo numero da como resultado el numero.
Ejemplo: 6 sus divisores son 1,2,3 y 6, sumando 1+2+3 = 6

Numeros en la lista: 2
Resultado: 6-28*/
