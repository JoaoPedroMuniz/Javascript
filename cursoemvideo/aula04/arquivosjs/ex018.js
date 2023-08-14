function ativar(){
    var inicio = parseInt(document.querySelector("input#ini").value)

    var fim = Number(document.querySelector("input#fim1").value)

    var passo = Number(document.querySelector("input#passo1").value)

    var res = document.querySelector("div#res")

    if (isNaN(inicio)|| isNaN(fim) || isNaN(passo)){
        alert("Digite um número!!!")
    }

    else if ( inicio == ' ' || fim == ' ' || passo == ' '){
        alert("Digite um número!")
    }

    else{
        res.innerHTML = 'Contagem: <br>'

        if (inicio < fim){
            for (inicio ; inicio <= fim; inicio += passo){
                res.innerHTML += ` => ${inicio}`
            }
        } 
        else if (passo == 0 ){
            alert('Erro! Considerando Passo = 1')
            passo = 1
        }
        else if(inicio > fim){
            for (inicio ; inicio >= fim; inicio -= passo)
            res.innerHTML += ` => ${inicio}`
        }
        res.innerHTML += ` !Chegada! =)`
    }
}