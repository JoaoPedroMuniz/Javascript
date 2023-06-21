//armazenando uma função dentro de uma variavel

const ImprimirSoma = function (a,b) {
    console.log(a + b)
}

ImprimirSoma(4, 5)

//armazenando uma função com arrow

const soma = (a,b) => {
    return a + b
}

console.log(soma(2, 10))

const subtracao = (a, b) => a - b

console.log(subtracao(9, 1))
