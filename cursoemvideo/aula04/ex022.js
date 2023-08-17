function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *= c 
        // 5 x 4 x 3 x 2 x 1 ou seja é obrigatório ter o fat = 1,
        // ele vai alterando a partir do programa virando 5, 20, 60,
        // e por fim 120 ** n = 5
    }
    return fat
}

console.log(fatorial(5))