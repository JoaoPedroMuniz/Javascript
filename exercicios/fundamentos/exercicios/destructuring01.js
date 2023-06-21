const pessoa = {
    nome: "Pedro",
    idade: 17,
    endereco: {
        rua: "Rua ABC",
        numero: "182"
    }
}

console.log(pessoa.nome)

const {nome: n, idade: i} = pessoa

console.log(n, i)

const { sobrenome, bemhumorada = true} = pessoa

console.log(sobrenome, bemhumorada)

const { endereco:{rua:r, numero:nu, cep} } = pessoa

console.log(r, nu, cep)