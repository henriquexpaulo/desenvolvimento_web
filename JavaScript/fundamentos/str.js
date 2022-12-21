const escola = "cod3r"

console.log(escola.charAt(4)) //charAt = indice da letra
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3')) //indice associado digitado na variavel escola

console.log(escola.substring(1)) //substring é o indice por onde comeca e termina
console.log(escola.substring(0, 3))

console.log("Escola".concat(escola).concat("!")) //concata as palavras 
console.log(escola.replace(3, "e")) // replace muda indice

console.log("ana,maria,pedro".split(",")) //split = separador[array]
