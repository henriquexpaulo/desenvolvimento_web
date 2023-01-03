const pessoa = {
    nome: "ana",
    idade: 5,
    endereco: {
        logradouro: "Rua ABC",
        nuemro: 1000
    }
}

const { nome, idade} = pessoa
console.log(nome, idade)

const{nome: n, idade: i} = pessoa
console.log(n, i)

const {endereco: {logradouro, nuemro} } = pessoa
console.log(logradouro, nuemro)