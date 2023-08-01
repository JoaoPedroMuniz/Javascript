/*function Gerar(){
    var n1 = document.Number(getElementById('numtxt1').value)

    var res = document.getElementById('res')

    if (n1 != Number){
        alert('Digite um número por favor!')
    } 
    
    else{



        for (var n2 = 1 ; n2 <= 10 ; n2++)
        {
        var mult = n1 * n2;
        res.innerHTML += `${n1} x ${n2} = ${mult}<br>`;
    }
}
}*/
function Gerar() {
        var n1 = Number(document.getElementById('numtxt1').value);
        var res = document.getElementById('res');
    
        // Verifica se o valor inserido é um número válido
        if (isNaN(n1)) {
        alert('Digite um número por favor!');
        } else {
        // Limpa o conteúdo da caixa de resposta antes de gerar a nova tabuada
        res.innerHTML = '';
    
        // Gera a tabuada e insere cada linha na caixa de resposta
        for (var n2 = 1; n2 <= 10; n2++) {
            var mult = (n1 * n2);
            res.innerHTML += `${n1} x ${n2} = ${mult}<br>`;
        }
        }
    }
  