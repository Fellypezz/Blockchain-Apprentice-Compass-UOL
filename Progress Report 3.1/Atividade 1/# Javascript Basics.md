# Javascript Basics
Conceitos, fundamentos e exercícios sobre Javascript.

## Variáveis
```javascript
var name = 'Fellype';
let age = 24;
const pi = 3.14159;
```
## Nomeação de variáveis

- Não devem conter palavras reservadas.
- Não devem começar com números.
- Não devem conter espaços ou hífens.
- Existem diferença entre letras maiúsculas e minúsculas.
- Váriaveis devem ter um significado, evitando nomes sem sentido.

## Declaração de variáveis
- var: Declara variável
- let: Declara variável com escopo no bloco, ou seja, ela estará disponível dentro do grupo de chaves, função, if-else, for-loop, mais próximo em que foi criada.
- const: Declara uma constante.

## Tipos de dados

- Tipos primitivos de dados são aqueles que são copiados por valor.
- Em Javascript, temos apenas number e não int e float como visto em outras linguagens.

```javascript
let hello = 'World!'; // String 
let year = 2024; // Number 
let isTrue = true; // Boolean 
let name = undefined;
let lastName = null;
```
## Tipos de referência
- São tipos que são copiados por referência.
- Incluem objetos, arrays e funções (funções em javascript são objetos).

```javascript  
// Objeto
let pessoa = {
    nome: 'Fellype'
    email: 'fellps@compass'
};

// Array
let numeros = [1, 3, 2, 5, 4];

// Função
let helloWorld = function () {
    console.log('Hello, World!');
}
```
## Operador typeof
- Usando o operador "typeof" podemos saber o tipo de uma variável.
```javascript 
typeof 10; // number
typeof 'Hello, World!'; // string
```

## Objetos
- Objetos podem conter tanto variáveis quanto métodos.
```javascript 
let person = {
    firstName: 'Julia',
    lastName: 'Oliveira',
    age: 20,
    greet: function() {
        console.log(`Hello I am ${this.nome}`);
    }
}
```
- Após ser declarado, só é possível acessar seu conteúdo das seguintes maneiras:  
```javascript 
person.firstName;
person['lastName'];
person.greet();
```

## Arrays
- São usados para armazenar listas de itens, ex: variáveis ou objetos.
- São dinâmicos, ou seja, o conteudo pode ser removido ou alterado a qualquer momento.
- Seu índice começa a ser contado a partir do 0.

```javascript 
let selectedColors = ['red','blue'];
console.log(selectedColors[1]);

selectedColors.push(5);
console.log(selectedColors); 

selectedColors[2] = 'green';
console.log(selectedColors[2]);
```

## Funções

- São blocos de código que são executados quando são chamados.

```javascript 
function greet(name) {
    console.log('Hello, ' + name + '!');
}

greet('John'); // Hello John!

function fizzBuzz(numero) {
    let resultado = '';
    if (numero % 3 === 0) {
        resultado += 'Fizz';
    }
    if (numero % 5 === 0) {
        resultado += 'Buzz';
    }
    return resultado;
}

console.log(fizzBuzz(3)); // "Fizz"
console.log(fizzBuzz(5)); // "Buzz"
console.log(fizzBuzz(15)); // "FizzBuzz"
console.log(fizzBuzz(4)); // ""
```

## Operadores

- Assim como outras em outras linguages de programação, no Javascript possuimos vários tipos de operadores para operações aritméticas, de atribuição e lógicas.

## Aritméticos
```javascript
let a = 1 + 2;
let b = 2 - 1;
let c = 2 * 8;
let d = 10 / 5;
let e = 10**2;
```
## Atribuição
```javascript
let a += 5;
let b -= 10;
let c *= 2;
```

## Lógicos
```javascript
// AND = &&
console.log(true && true);
console.log(false && true);

// OR = ||
console.log(true || true);
console.log(false || true);
console.log(false || false);

// NOT = !
console.log(!true);
console.log(!false);

// Operador Ternário
// condition ? value_if_true : value_if_false
// Exemplo:

let a = 10;
let b = 20;
let maior = (a > b) ? a : b
console.log(maior) // 20
```
## Controle de Fluxo

- If-else:
  
```javascript
if (a > 100)
    console.log('a is greater than 100');
else
    console.log('a is not greater than 100');
Switch-case
let fruit = 'Apple';

switch (fruit) {
    case 'Banana':
        console.log('Banana is good for digestion.');
        break;
    case 'Apple':
        console.log('An apple a day keeps the doctor away.');
        break;
    default:
        console.log('Unknown fruit.');
        break;
}
For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}
While loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}
Do-While loop
let i = 0;

do {
    console.log(i);
    i++;
} while (i < 5);
```

## Programação Assíncrona
- Em programação assíncrona, as operações não são executadas de forma linear, seguindo o fluxo tradicional de cima para baixo no código. Em vez disso, elas dependem da disponibilidade de recursos e das diretrizes definidas pelo negócio. 
- Um exemplo disso são as Promises, que oferecem uma maneira de lidar com valores que podem estar disponíveis em algum momento futuro, permitindo que o código prossiga sua execução de forma que não seja bloquado.

```javascript
let promessa = Promise.resolve(5);

console.log("Outras linhas de código");

console.log(promessa);

promessa.then((value) => {console.log(`O valor é ${value}`)});
```