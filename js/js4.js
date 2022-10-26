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
    let num_imagen = parseInt(document.getElementById("num_imagen").value);
    console.log(num_imagen);

    switch (num_imagen) {
        case 1:
            document.getElementById("tamañoimg").src="https://images.pexels.com/photos/1870302/pexels-photo-1870302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
            document.getElementById("tamañoimg").style.display = "block";
            break;
        case 2:
            document.getElementById("tamañoimg").src="https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
            document.getElementById("tamañoimg").style.display = "block";
            break
        case 3:
            document.getElementById("tamañoimg").src="https://images.pexels.com/photos/2065357/pexels-photo-2065357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
            document.getElementById("tamañoimg").style.display = "block";
            break
        case 4:
            document.getElementById("tamañoimg").src="https://images.pexels.com/photos/3512800/pexels-photo-3512800.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
            document.getElementById("tamañoimg").style.display = "block";
            break
    }
}

/* Escribir un programa que pida al usuario
cuantos numeros perfectos desea ver.
Un numero perfecto es aquel que la suma de sus divisores excepto
el mismo numero da como resultado el numero.
Ejemplo: 6 sus divisores son 1,2,3 y 6, sumando 1+2+3 = 6

Numeros en la lista: 2
Resultado: 6-28*/

function Mostrar(){
    let cant = parseInt(document.getElementById("numeros").value);
    console.log(cant);
    
    let resultado = document.getElementById("resultado");
    console.log(document.getElementById("resultado"));
    resultado.value = nums_result(cant);
    console.log(resultado.value = nums_result(cant));
}

function nums_result (cant_nums) 
{
    let numero = 1;
    num_perfecto = []
    while (num_perfecto.length < cant_nums) 
    {
        lista_nums = [];
        let suma = 0;
    
        for (i=1 ; i<= numero; i++) 
        {
            if ( numero % i == 0 ) {
                lista_nums.push(i);
            }
            else {}
        }
    
        for ( i=0 ; i<= lista_nums.length-2; i++) 
        {
            suma += lista_nums[i];
        }
    
        if ( suma == numero ) 
        {
            num_perfecto.push(suma);
        }
        numero ++;
    }
    return num_perfecto;
}