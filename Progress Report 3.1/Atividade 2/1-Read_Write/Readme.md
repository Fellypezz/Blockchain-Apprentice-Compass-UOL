## Ler e Escrever Arquivos
Para manipular arquivos, primeiro devemos importar o módulo apropriado.

```javascript
Copiar código
const fs = require('fs');
// Importa o módulo file system para operações de arquivo
let textInput = fs.readFileSync('./simple_text.txt', 'utf-8');
// Lê o conteúdo do arquivo simple_text.txt e armazena na variável textInput
console.log(textInput);
// Exibe o conteúdo do arquivo no console
```
- Agora, podemos modificar o conteúdo e gravá-lo de volta no arquivo.

```javascript
Copiar código
let counter = textInput.match(/(\d+)/);
// Localiza o número no texto do arquivo usando uma expressão regular
if (counter) {
    counter = parseInt(counter[0]);
} else {
    counter = 0;
}
counter++;
// Incrementa o valor do contador

textOutput = textInput.replace(/\d+/, counter.toString());
// Substitui o número antigo pelo novo

fs.writeFileSync('./simple_text.txt', textOutput);
```

Este código assume que o texto dentro do arquivo "simple_text.txt" seja algo como:
"Hello World from a txt file!
This file was written 2 times."
Ele incrementa o número de vezes que o arquivo foi escrito sempre que ele é lido e depois salva o novo valor no arquivo.