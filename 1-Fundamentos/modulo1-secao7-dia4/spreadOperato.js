// Faça uma lista com as suas frutas favoritas
const specialFruit = ['goiba', 'uva', 'pêra'];


// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['banana', 'mamão', 'ameixa'];

const fruitSalad = (fruit, additional) => {
  // Escreva sua função aqui

  const fruitSaladaWithAdditional = [...fruit, ...additional];
  return fruitSaladaWithAdditional;
};

console.log(fruitSalad(specialFruit, additionalItens));
