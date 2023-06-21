function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTV50 = trabalho1 && trabalho2
    const comprarTV32 = trabalho1 != trabalho2
    const mantersaudavel = !comprarSorvete

    return{ comprarSorvete: 'Tomou sorvete', comprarTV50: 'comprou a tv de 50 polegadas', comprarTV32: 'comprou a tv de 32 polegadas', mantersaudavel: 'Se manteve saúdavel'}
}

console.log('1) ', compras(true, false))
console.log('2)', compras(false, true))
console.log('3)', compras(true, true))
console.log('4)', compras(false, false))