//função sem retorno
function ImprimirSoma(a, b) {
    console.log(a + b)
}

ImprimirSoma(2,5)
ImprimirSoma(2)
ImprimirSoma(1, 0)
ImprimirSoma(1, 3, 4, 6, 7, 8)

//Função com retorno
function soma(a, b = 0) {
    return a + b
}

console.log(soma(2, 4))
console.log(soma(2))
console.log(soma())