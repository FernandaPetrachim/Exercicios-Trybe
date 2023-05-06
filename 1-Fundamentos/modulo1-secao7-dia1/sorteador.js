/* Desenvolva uma HOF que retorne o resultado de um sorteio. Essa HOF irá gerar um número aleatório 
entre 1 e 5, recebendo como parâmetros o número apostado e uma função que checa se o número apostado é
 igual ao número sorteado. O retorno da sua HOF deve ser uma 
string (Ex: “Tente novamente” ou “Parabéns, você ganhou”). */

/* let total = 20;
const numbers = [];
const maxValue = 100;

while (total > 0) {
  const number = Math.floor(Math.random() * maxValue);
  if (!numbers.includes(number)) {
    numbers.push(number)
    total -= 1
  }
}
 */
/* console.log(numbers) */


const numberChecker = (numeroMeu, number) => numeroMeu === number;

const lotteryResult = (numeroMeu, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return callback(numeroMeu, number) ? 'Tente novamente!' : 'Parabéns você ganhou!';
};

console.log(lotteryResult(2, numberChecker));