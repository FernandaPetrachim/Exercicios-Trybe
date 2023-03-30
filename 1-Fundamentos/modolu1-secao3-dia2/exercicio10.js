let word = 'tryber'.split('');
const indiceFinal = word.length -1;
for(let variacao = 0; variacao < word.length / 2; variacao +=1){
const indiceEsquerdo = variacao;
const indiceDireito = indiceFinal - variacao;
const temporaria = word[indiceEsquerdo];
word[indiceEsquerdo] = word[indiceDireito];
word[indiceDireito] = temporaria;
}
console.log(word.join(''));
