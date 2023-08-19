let num = []; //precisas de um vetor para guardar teus números
let numeros = document.getElementById('numeros');//tua lista
let res = document.querySelector(`div#res`)

function adicionar() {
    let n = Number(document.getElementById('num1').value);
    
    if (n < 1 || n > 100) {
        alert('Digite um número entre 1 e 100!');
    } else if(num.includes(n)){
        alert('Número já está na lista')
    }
    else {
        num.push(n);
        numeros.innerHTML += `Número ${n} foi adicionado <br>`;
        document.querySelector(`div#num1`).value = ''
    }
}


function verificar(){
    if (num.length === 0){
        alert('Não há nenhum número');
        return;
    } 
    let totnum = num.length
    let mainum = Math.max(...num)
    let mennum = Math.min(...num)
    let soma = num.reduce((acc, curr) => acc + curr, 0)
    let med = soma / totnum

    res.innerHTML = `O total de números é ${totnum}<br>`
    res.innerHTML += `O maior número é ${mainum}<br>`
    res.innerHTML += `O menor número é ${mennum}<br>`
    res.innerHTML += `A soma dos números é ${soma}<br>`
    res.innerHTML += `A média dos números é ${med.toFixed(2)}`
}