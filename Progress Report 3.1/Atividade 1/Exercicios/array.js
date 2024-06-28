// Exercicio 1 - Inverta um array

function inverterArray(array) {
    if (!Array.isArray(array)) {
        throw new Error('O argumento deve ser um array.');
    }
    return array.slice().reverse();
}

console.log("Exercicio 1 ------\n");

try {
    console.log(inverterArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
    console.log(inverterArray(['a', 'b', 'c'])); // ['c', 'b', 'a']
    console.log(inverterArray('a')); // Error: O argumento deve ser um array.
}
catch (error) {
    console.log(error.message);
}

// Exercicio 2 - Somar elementos de um array

function somarArray(array) {
    if (!Array.isArray(array)) {
        throw new Error('O argumento deve ser um array.');
    }
    return array.reduce((acc, cur) => acc + cur, 0);
}

console.log("Exercicio 2 ------\n");

try {
    console.log(somarArray([1, 2, 3, 4, 5])); // 15
    console.log(somarArray(1)); // Error: O argumento deve ser um array.
}

catch (error) {
    console.log(error.message);
}

// Exercicio 3 - Filtrar pares

function filtrarPares(array) {
    if (!Array.isArray(array)) {
        throw new Error('O argumento deve ser um array.');
    }
    return array.filter((elemento) => elemento % 2 === 0);
}

console.log("Exercicio 3 ------\n");

try {
    console.log(filtrarPares([1, 2, 3, 4, 5])); // [2, 4]
    console.log(filtrarPares([1, 3, 5])); // []
    console.log(filtrarPares(['a', 'b', 'c'])); // [].
    console.log(filtrarPares('a')); // Error: O argumento deve ser um array.
}
catch (error) {
    console.log(error.message);
}

// Exercicio 4 - Contar números

function contarNumeros(array) {
    if (!Array.isArray(array)) {
        throw new Error('O argumento deve ser um array.');
    }
    return array.filter((elemento) => typeof elemento === 'number').length;
}

console.log("Exercicio 4 ------\n");

try {
    console.log(contarNumeros([1, 'a', 2, 'b', 3])); // 3
    console.log(contarNumeros(['a', 'b', 'c'])); // 0
    console.log(contarNumeros('a')); // Error: O argumento deve ser um array.
}

catch (error) {
    console.log(error.message);
}

// Exercicio 5- Média de Números em um Array

// Passo 1: Definindo o array
let numeros = [10, 20, 30, 40, 50];

// Passo 2 e 3: Criando a função para calcular a média
function calcularMedia(array) {
    let soma = 0;
    for (let numero of array) {
        soma += numero;
    }
    let media = soma / array.length;
    return media;
}

// Passo 4: Chamando a função e exibindo o resultado
let mediaCalculada = calcularMedia(numeros);
console.log("A média dos números no array é:", mediaCalculada);