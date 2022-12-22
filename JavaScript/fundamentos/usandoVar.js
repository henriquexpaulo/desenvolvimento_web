//var pode ser usado em escopo global

function teste() {
    var local = 123
    console.log()
}


var numero = 1
{
    var numero = 2
    console.log(`dentro = ${numero}`)
}
console.log(`fora = ${numero}`)