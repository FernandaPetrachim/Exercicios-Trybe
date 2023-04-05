let status = 'desligado'; // o status padrão é deslogado

function ligarDesligar() { // aqui criamos uma função para verificar o status
  if (status === 'desligado') { // se a pessoa usuária estiver deslogada, alteramos o status para logado
    status = 'ligado';
  } else { // caso esteja logado, alteramos para deslogado
    status = 'desligado';
  }
}

console.log(status); // deslogado

ligarDesligar();
console.log(status); // logado

ligarDesligar();
console.log(status); // deslogado

console.log('O carro de Fernanda está ' + status + ' na garagem!'); // O usuário está deslogado no sistema TrybeBank


//const ligarDesligar =  (funcionando) =>{
   // funcionando = funcionando === `desligado` ? `ligado` : `desligado` ;
     //console.log(`O morto está ${funcionando}`);
     //return funcionando;
    //}