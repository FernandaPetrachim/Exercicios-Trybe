//1. Produza o mesmo resultado acima, porém utilizando array destructuring
const primeNumbers = [17, 23, 37]
const [zero, one, two] = primeNumbers; // quando eu quero a terceira posição tenho que declara todas, sempre declarar todas

const sum = (a, b) => {
  console.log(a + b);
}

sum(zero, two); // 54

//2.Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';
 [comida, animal, bebida] = [bebida, comida, animal]; 
 
console.log(comida, animal, bebida);  // arroz gato água


//3. Utilize array destructuring para produzir o resultado esperado pelo console.log acima

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[a, b, c, ...numerosPares] = numerosPares; // eu exclui o 1, 3, 5 (os 3 primeiros números exclui e me da o restante que são os pares)


console.log(numerosPares); // [6, 8, 10, 12]; 

 