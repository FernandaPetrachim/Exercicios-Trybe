const circleArea = (radius) => {
    let area = typeof radius === 'number' ?
      `Essa é a área do círculo: ${3.14 * Math.pow(radius, 2)}` :
      `O parâmetro radius deve ser um número`;
    return area;
  };