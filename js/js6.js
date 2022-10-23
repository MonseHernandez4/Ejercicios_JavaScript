function verTabla(){
    let numerotabla = parseInt(document.getElementById("numerotabla").value);
    let tipo = parseInt(document.getElementById("tipo").value);
    let longi = parseInt(document.getElementById("longi").value); 
    let resultado = document.getElementById("resultado");
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
            resultado.innerHTML = "";
            resultado.appendChild(push);
            break;

        case 2:
            for (let i = longi; i >= 0 ; i--) 
            {
                let renglon = document.createElement("tr")
                renglon.innerHTML = `<td>${numerotabla}</td><td>x</td><td>${i}</td><td>=</td><td>${(numerotabla * i)}</td>`;
                push.appendChild(renglon);
            };
            resultado.innerHTML = "";
            resultado.appendChild(push);
            break;
    };  
    }

