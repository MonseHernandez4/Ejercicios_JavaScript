function calcular(){
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);
    let operacion = document.getElementById("operacion").value; 
    let resultado = document.getElementById("resultado");

    if(operacion == '+'){
        resultado.value = numero1 + numero2;
    }
    else if(operacion == "-"){
        resultado.value = numero1 - numero2;
    }
    else if(operacion == "/"){
        resultado.value = numero1 / numero2;
    }
    else if(operacion == "*"){
        resultado.value = numero1 * numero2;
    }

}