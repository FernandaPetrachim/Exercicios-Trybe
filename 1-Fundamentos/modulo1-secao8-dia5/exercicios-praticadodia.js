//Exercício 1
//Escreva a função swap, que, dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. 
//Detalhe: você precisa fazer essa função gastando apenas 1 linha.
 //O retorno da função utilizando o array myList deve ser [3, 2, 5].

/* const myList = [5, 2, 3];
myList.reverse();

console.log(myList);     ---- de outra maneira, podia ser assim.*/

// escreva swap abaixo
const myList = [5, 2, 3];
const swap = ([a, b, c]) => [c, b, a];

console.log(myList);

//Exercício 2
//Suponha que você esteja trabalhando em projeto de um site de carros, onde cada carro é representado dentro de um array.
//Então sua liderança pede que seja mudado o formato de array para objeto. Para isso, crie uma função chamada toObject que, 
//dada uma lista, retorna um objeto representando o carro:


// escreva toObject abaixo

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = ([name, brand, year]) => ({ name, brand, year });


//Exercício 3
//Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento. 
//Um parâmetro adicional pode ser passado para alterar o cumprimento utilizado:
const greet = (name, msg = 'Hi') => `${msg} ${name}`;