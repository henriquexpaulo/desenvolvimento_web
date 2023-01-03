//let pode ser usado dentro do escopo de acordo com a variavel
let numero = 1
{
    let numero2 = 2
    console.log(`dentro = ${numero}`)
}
{
    let numero = 2
    console.log(`dentro = ${numero}`)
}
console.log(`fora = ${numero} `)