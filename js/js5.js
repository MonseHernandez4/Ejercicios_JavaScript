//Programa Calculadora

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

//Programa Tabla de Multiplicar

function verTabla(){
    let numerotabla = parseInt(document.getElementById("numerotabla").value);
    let tipo = parseInt(document.getElementById("tipo").value);
    let longi = parseInt(document.getElementById("longi").value); 
    let resultado2 = document.getElementById("resultado2");
    let push = document.createDocumentFragment();
    
    switch (tipo) 
    {
        case 1:
            for (let i = 0 ; i <= longi; i++) 
            {
               let renglon = document.createElement("tr")
               renglon.innerHTML = `<td>${numerotabla}</td><td>x</td><td>${i}</td><td>=</td><td>${(numerotabla * i)}</td>`;
               push.appendChild(renglon);
            };
            resultado2.innerHTML = "";
            resultado2.appendChild(push);
            break;

        case 2:
            for (let i = longi; i >= 0 ; i--) 
            {
                let renglon = document.createElement("tr")
                renglon.innerHTML = `<td>${numerotabla}</td><td>x</td><td>${i}</td><td>=</td><td>${(numerotabla * i)}</td>`;
                push.appendChild(renglon);
            };
            resultado2.innerHTML = "";
            resultado2.appendChild(push);
            break;
    };  
    }

