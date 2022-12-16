const peso1 = 1.0
const peso2 = Number("2.0")

console.log(peso1, peso2)
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString()) // em binario 
console.log(typeof Number)

//---------------------------------------------//
console.log("10" / 2) //dentro da str pode ser divisivel, tipagem 
console.log((10).toFixed())
//--------------------------------------------//
/*
*math
*/
const raio = 5.6
const area = Math.PI * Math.pow(raio, 2)
console.log(area.toFixed(2))    