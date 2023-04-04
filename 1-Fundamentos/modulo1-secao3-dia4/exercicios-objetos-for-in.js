let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  console.log('Bem-vinda,' + info.personagem);
  info['recorrente'] = 'Sim';
for (let chave in info){
    console.log(Object.keys(info))
    for (let chave in info){
        console.log(Object.values(info))
    }
}
