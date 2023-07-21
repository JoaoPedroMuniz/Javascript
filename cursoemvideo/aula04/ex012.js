
var hora = Number(12.555)

if (hora >= 12 && hora < 18){
    console.log(`Agora são ${hora}h. Boa tarde!`)
} else if ( hora >= 18 && hora <= 23.59){
    console.log(`Agora são ${hora}h. Boa noite!`)
} else if ( hora >= 0 && hora <= 6.00){
    console.log(`Agora são ${hora}h. Boa madrugada!`)
} else{
    console.log(`Agora são ${hora}h. Bom dia!`)
}