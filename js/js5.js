function calcular(){
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);
    let operacion = document.getElementById("operacion").value; 
    let resultado = document.getElementById("resultado");

    switch (operacion) 
    {
        case '1':
            resultado.value = numero1 + numero2;
            break;

        case '2':
            resultado.value = numero1 - numero2;
            break;

        case '3':
            resultado.value = numero1 * numero2;
            break;
            
        case '4':
            resultado.value = numero1 / numero2;
            break;

        default:
            break;
    }
}