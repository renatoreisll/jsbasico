
//Loops!

// for (var a = 0; a < 10; a++) {
//     console.log(`Repetindo porque ${a} eh menor que 10.`)
// }

// var i = 0
// while (i <= 10) {
//     console.log(`Repetindo porque ${i} eh menor que 10.`)
//     i++;
// }

var avengers = ['Ironman', 'Spiderman', 'Thor', 'Capitao America', 'Pantera Negra', 'Black Window']

avengers.forEach(function(value, key) {
    console.log(`${value} na posiçao ${key}`)
});