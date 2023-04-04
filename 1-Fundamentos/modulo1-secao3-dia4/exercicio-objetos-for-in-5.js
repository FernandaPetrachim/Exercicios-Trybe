let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  info['recorrente'] = 'Sim';
  let info1 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
    nota: 'O último MacPatinhas'
  };
  Object.keys(info).forEach(function (key) {
  const texto = key === 'recorrente'? 'Ambos recorrentes': `${info[key]} e ${info1[key]}`
  console.log(texto);
  })
        

  
