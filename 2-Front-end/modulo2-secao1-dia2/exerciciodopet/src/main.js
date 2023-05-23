// PODE SER ASSIM COM VARIAVEL const BASE_URL = `https://dog.ceo/api/breeds/image/random`;
const dog = document.querySelector('#getDog')
const img = document.querySelector('#imagem')
const cat = document.querySelector('#getCat')

dog.addEventListener('click', () => {
    // para então (de uma promisse)o then
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((result)=> result.json()
    )
    .then((data) => img.src = data.message
    )});
cat.addEventListener('click', () => {
    fetch('https://aws.random.cat/meow')
    .then((resultado) => resultado.json()
    )
    .then((data) => img.src = data.message
    )
})
const surpresa = document.querySelector('#surpresi')
surpresa.addEventListener('click', () => {
    Promise.any([
        fetch(), fetch()
    ])
    .then((resul) => resul.json()
    )
    .then((data) => data.message || data.message
    )
})


