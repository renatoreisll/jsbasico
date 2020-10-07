var idade = prompt("Qual sua idade?");
if (idade >= 18) {
    console.log('Pode ir no show do Iron Maiden!')
} else if (idade >15) {
    console.log('Pode ir no show da Sandy & Junior!')
} else {
    console.log('Pode ir no show da Xuxa!')
}

var ingresso = prompt("Qual seu ingresso?");

switch (ingresso) {
    case 'vip':
        console.log('Irei ficar no camarote');
        break;
    case 'premium':
        console.log('Irei ficar na pista PREMIUM');
        break;
    case 'comum':
        console.log('Irei ficar na arquibancada');
        break;
    default:
        console.log('Tipo de ingresso invalido!')
}