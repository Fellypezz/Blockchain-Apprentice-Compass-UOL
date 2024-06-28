// Exercicio 1 - Max
// Escreva uma função que receba um array de números e retorne o maior número.
// Bônus: Faça em uma linha usando recursos da linguagem.

function maxSemBonus(array) {
    let resultado = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > resultado) {
            resultado = array[i];
        }
    }
    return resultado;
}
console.log("Exercicio 2 ------\n");
console.log(maxSemBonus([1, 2, 100, 4, -500])); // 100

function maxBonus(array) {
    return array.reduce((acc, cur) => acc > cur ? acc : cur, array[0]);
}
// Aqui chamamos o método reduce do array, que recebe uma função de callback e um valor inicial e os usa pra "reduzir" o array a um elemento.
// A função de callback recebe dois parâmetros, o acumulador e o valor atual.
// O valor inicial é o primeiro elemento do array, que será o acumulador na primeira iteração. O valor inicial neste caso também pode ser -Infinity.
// A função de callback compara o acumulador com o valor atual e retorna o maior dos dois usando operador ternário.
// O valor retornado é o acumulador da próxima iteração.
// Ao final, o método reduce retorna o acumulador, que é o maior valor do array.

console.log(maxBonus([1, 2, 100, 4, -500])); // 100

// Exercicio 2 - Média e notas
// Escreva uma função que receba um array de números e retorne a média deles.
// Usando essa função de média, calcule a nota de um aluno.
// Métricas: A - 90 a 100, B - 80 a 89, C - 70 a 79, D - 60 a 69, F - 0 a 59.

function media(array) {
    return array.reduce((acc, cur) => acc + cur, 0) / array.length;
}

// Mesma ideia do exercício anterior, mas agora a função de callback soma os elementos do array.

function notaAluno(media) {
    if (media >= 90) return 'A';
    if (media >= 80) return 'B';
    if (media >= 70) return 'C';
    if (media >= 60) return 'D';
    return 'F';
}

console.log("Exercicio 3 ------\n");

const notas = [100, 90, 80, 70, 60];
const mediaNotas = media(notas);
console.log(mediaNotas); // 80
console.log(notaAluno(mediaNotas)); // B

// Exercicio 3 - Ordene um array de números
// Utilize o método sort() e faça uma versão crescente e decrescente.

const numeros = [1, 5, 3, 2, 4];

const crescente = numeros.slice().sort((a, b) => a - b);
const decrescente = numeros.slice().sort((a, b) => b - a);
// É usado o método slice() para criar uma cópia do array original, pois o método sort() modifica o array original.
// O método sort() recebe uma função de callback que compara dois elementos do array e retorna um número negativo, zero ou positivo, 
// dependendo dos argumentos.

console.log("Exercicio 5 ------\n");

console.log(crescente); // [1, 2, 3, 4, 5]
console.log(decrescente); // [5, 4, 3, 2, 1]

// Exercicio 4 - Verificar se um Número é Par ou Ímpar
// Crie uma função em JavaScript que verifique se um número é par ou ímpar.
// Passo 1: Criando a função para verificar se um número é par ou ímpar
function verificarParOuImpar(numero) {
    // Passo 2: Usando o operador de módulo para determinar se o número é par ou ímpar
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "ímpar";
    }
}

// Passo 4: Testando a função com alguns exemplos
let numero1 = 4;
let numero2 = 7;

console.log(`O número ${numero1} é`, verificarParOuImpar(numero1)); // O número 4 é par
console.log(`O número ${numero2} é`, verificarParOuImpar(numero2)); // O número 7 é ímpar

numero1 = 10;
numero2 = 15;

console.log(`O número ${numero1} é`, verificarParOuImpar(numero1)); // O número 10 é par
console.log(`O número ${numero2} é`, verificarParOuImpar(numero2)); // O número 15 é ímpar

// Exercicio 5 - Calcular a Área de um Retângulo
//Crie uma função em JavaScript que calcule a área de um retângulo com base em sua largura e altura.
// Passo 1: Criando a função para calcular a área de um retângulo
function calcularAreaRetangulo(largura, altura) {
    // Passo 2: Calculando a área do retângulo
    let area = largura * altura;

    // Passo 3: Retornando o valor da área
    return area;
}

// Passo 4: Testando a função com alguns exemplos
let largura1 = 5;
let altura1 = 10;
console.log(`A área do retângulo com largura ${largura1} e altura ${altura1} é:`,
    calcularAreaRetangulo(largura1, altura1)); // A área do retângulo com largura 5 e altura 10 é: 50

largura1 = 7;
altura1 = 3;
console.log(`A área do retângulo com largura ${largura1} e altura ${altura1} é:`,
    calcularAreaRetangulo(largura1, altura1)); // A área do retângulo com largura 7 e altura 3 é: 21

largura1 = 8;
altura1 = 6;
console.log(`A área do retângulo com largura ${largura1} e altura ${altura1} é:`,
    calcularAreaRetangulo(largura1, altura1)); // A área do retângulo com largura 8 e altura 6 é: 48

