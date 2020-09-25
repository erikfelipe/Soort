function sort_button(){
    var quantidade = parseInt(document.getElementById('quant_num').value);
    const valor_max = parseInt(document.getElementById('valor_max').value);
    const valor_min = parseInt(document.getElementById('valor_min').value);
    var resultado = document.getElementById('div_result');
    
    numeros = [];

    for(var i = 0;i < quantidade;i++){
        var aleatorio = Math.floor(Math.random() * (valor_max - valor_min + 1) + valor_min);
        if(numeros[i] != aleatorio && numeros.includes(aleatorio) == false){
            numeros.push(aleatorio);
        }
        else if(numeros.includes(aleatorio) == true){
            quantidade++;
        }

        var numeros_sort = numeros.sort(function(a,b){return a-b});

        resultado.innerHTML = numeros_sort.join(' - ');
    }
}
