// Questão 1
const paresArray = (array = [], cont = 0) => {
    if (cont != array.length - 1){
        paresArray(array, cont+1)
    }
    if(array[cont] % 2 == 0){
        console.log(array[cont])
    }
}

let nums = [2,1, 2, 3, 4, 5, 6, 7, 8, 9, 14, 34 , 24 , 54, 64, 45, 23, 76, 13, 67, 87]
paresArray(nums)


// Questão 2
function fibonacci(num) {
    if(num <= 1){
        return 1
    }else{
        return fibonacci(num -1) + fibonacci(num -2)
    }
}
console.log(fibonacci(5));

// Questão 3
const paises = [
    {pais: "Brasil", populacao: 828212},
    {pais: "Argentina", populacao: 3723419},
    {pais: "Venezuela", populacao: 274343},
    {pais: "México", populacao: 158951},
    {pais: "Inglaterra", populacao: 334942}
];

function mostraPopulacao(paises) {
    return paises.map((valor) => {
        return valor.populacao;
    })
}
let populacao = mostraPopulacao(paises)
console.log(populacao);
console.log()

const maisDe300Mil = (paises) =>{
    return paises.populacao > 300000;
}


console.log(paises.filter(maisDe300Mil))

const somaDasPopulações = paises.reduce ((acc, val) => acc + val.populacao, 0);

console.log(somaDasPopulações);
