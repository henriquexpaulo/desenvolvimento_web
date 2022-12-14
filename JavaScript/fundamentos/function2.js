// Armazenando uma função em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variavel 

const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno implicito

const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

// pratica

const soma1 = (a, b) => {
    return a * b
}

const nome = a => console.log(a)
nome("paulo")

const nomeeidade = ("paulo", 18)
console.log(nomeeidade)