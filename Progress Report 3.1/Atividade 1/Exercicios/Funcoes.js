// Exercicio 1 - Hello world
// Escreva uma função que recebe um nome e retorna "Hello, [nome]!".
// Bônus: Faça a função ser uma arrow function.

function helloWorld(nome) {
    return `Hello, ${nome}!`;
}

console.log("Exercicio 1 ------\n");

console.log(helloWorld('World')); // "Hello, World!"

const helloWorldBonus = (nome) => `Hello, ${nome}!`;

console.log(helloWorldBonus('World Bonus')); // "Hello, World Bonus!"


// Exercicio 2 - Soma e operador Rest
// Escreva uma função que receba uma quantidade qualquer de números e retorne a soma deles.
// Essa quantidade qualquer deve ser passada como argumento na chamada da função da seguinte maneira:
// funcaoSoma(3, 4, 5) -> retorna 12

function funcaoSoma(...numeros) {
    return numeros.reduce((acc, cur) => acc + cur, 0);
}

console.log("Exercicio 2 ------\n");

console.log(funcaoSoma(3, 4, 5)); // 12


// Exercicio 3 - Desconto e valor padrão
// Escreva uma função que recebe o valor de um produto e um desconto, retornando o valor com desconto.
// O desconto padrão deve ser 5%.
// Bonus: Faça tratamento de erros para o valor do produto.

function desconto(valor, desconto = 0.05) {
    if (typeof valor !== 'number' || valor < 0) {
        throw new Error('O valor do produto deve ser um número positivo.');
    }
    return valor * (1 - desconto);
}

console.log("Exercicio 5 ------\n");

try {
    console.log(desconto(100)); // 95
    console.log(desconto(100, 0.1)); // 90
    console.log(desconto(-100)); // Error: O valor do produto deve ser um número positivo.
    console.log(desconto('a')); // Error: O valor do produto deve ser um número positivo.
}
catch (error) {
    console.log(error.message);
}

// Exercicio 4 - Verificar Número Primo
//Crie uma função em JavaScript que verifica se um número é primo ou não. 
//Um número primo é aquele que é divisível apenas por 1 e por ele mesmo.
function verificarNumeroPrimo(numero) {
    if (numero <= 1) {
        return false;
    }

    // Verificando se o número é divisível por algum número além de 1 e ele mesmo
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

// Passo 2: Testando a função com alguns exemplos
let numero1 = 7;
let numero2 = 12;

console.log(`${numero1} é primo?`, verificarNumeroPrimo(numero1)); // true
console.log(`${numero2} é primo?`, verificarNumeroPrimo(numero2)); // false

//Exercicio 5: Conversor de Temperatura
//Crie uma função em JavaScript que converta uma temperatura de Celsius 
//para Fahrenheit e outra função que faça a conversão de Fahrenheit para Celsius.

// Passo 1: Criando a função para converter Celsius para Fahrenheit
function celsiusParaFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Passo 2: Criando a função para converter Fahrenheit para Celsius
function fahrenheitParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Passo 3: Testando as funções com alguns exemplos
let tempCelsius = 25;
let tempFahrenheit = 77;

console.log(`${tempCelsius}°C é igual a ${celsiusParaFahrenheit(tempCelsius)}°F`); // 25°C é igual a 77°F
console.log(`${tempFahrenheit}°F é igual a ${fahrenheitParaCelsius(tempFahrenheit)}°C`); // 77°F é igual a 25°C