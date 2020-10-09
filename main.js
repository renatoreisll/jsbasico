var welcome = "Hello Javascript - Automacao Full Stack from QA Ninja"
document.getElementById("welcome").append(welcome)
console.log("Helo Javascript - Automacao Full Stack from QA Ninja")


var avengers = ['Homem de Ferro', 'Capitão Amėrica', 'Thor']

console.log(avengers)

avengers.push('Hulk')

console.log(avengers)

avengers.push('Homem Aranha')
// avengers.pop(); //remove o ultimo registro
// avengers.shift(); //remove o primeiro registro

console.log(avengers)

var indice = avengers.indexOf('Homem Aranha')
avengers.splice(indice)

avengers.push('Viuva Negra')
avengers.push('Gaviao Arqueiro')

console.log(avengers)

var newavengers = ['Homem Aranha', 'Capitã Marvel', 'Miss Marvel', 'Pantera Negra']

var result = avengers.concat(newavengers)

console.log(result)