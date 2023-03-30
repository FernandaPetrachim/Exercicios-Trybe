let array = ['java', 'javascript', 'python', 'html', 'css'];
let palavraMaior = '';
let palavraMenor = '';
for(let index = 0; index < array.length; index +=1){
if (index === 0){
palavraMaior = array[index]; 
palavraMenor = array[index];
} 
if (array[index].length > palavraMaior.length){
palavraMaior = array[index];
} 
if (array[index].length < palavraMenor.length){
palavraMenor = array[index];
}
}console.log(palavraMaior);
console.log(palavraMenor);