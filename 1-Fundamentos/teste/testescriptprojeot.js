
const botao = document.querySelector('#button-random-color');
const color = document.querySelectorAll('.color');
//const novaCor = 'rgb('+ Math.round(Math.random() * 255) + ','+ Math.round(Math.random() * 255) + ',' + Math.round(Math.random)+ ',' + Math.round(Math.random) +')'

botao.addEventListener('click', () => {
    for (let index = 1; index < color.length; index += 1) {
        const novaCor = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')'
        color[index].style.backgroundColor = novaCor;
    }
})

//exercicio5

const salvarStorage = (cor1, index) => {
    let colorPalette = {
        [`color-${index}`]: cor1
    };
    const guardarStorage = JSON.parse(localStorage.getItem('colorPalette'));
    localStorage.setItem('colorPalette', JSON.stringify({ ...guardarStorage, ...colorPalette }))
}
const valorGuardado = (index) => {
    let recuperar = JSON.parse(localStorage.getItem('colorPalette'));
    return recuperar[`color-${index}`];
}
const armazenarPixel = (color, index) => {
const valorPixel = JSON.parse(localStorage.getItem('pixelBoard'));
valorPixel[index] = color;
localStorage.setItem('pixelBoard', JSON.stringify(valorPixel));
}

const todasCores = () => {
    if(!localStorage.getItem('colorPalette')){
        localStorage.setItem('colorPalette', JSON.stringify({
            "color-0": 'black', 
            "color-1": 'pink', 
            "color-2": 'red', 
            "color-3": 'blue', 
        }))
    }
    if(!localStorage.getItem('pixelBoard')){
        localStorage.setItem('pixelBoard', JSON.stringify(Array(25).fill('white')))
}
}
const iniciarCor = () => {
    Array.from(document.querySelectorAll('.color')).forEach((valor, index) => {
        valor.style.backgroundColor = valorGuardado(index);
    })
}

//exercicio8

const selecionar = () => {
    Array.from(document.querySelectorAll('.color')).forEach((valor) => {
        valor.addEventListener('click', (evento) => {
            tirarSelect();
            evento.target.classList.add('selected');
        })
    })
    const tirarSelect = () => {
        Array.from(document.querySelectorAll('.color')).forEach(valor => {
            valor.classList.remove('selected');
        })
    }
}
const corSelecionada = () => {
    return document.querySelector('.selected').style.backgroundColor;
}
const comecarPreto = () => {
    document.querySelector('.color').classList.add('selected');

}

const corPixel = () => {
    Array.from(document.querySelectorAll('.pixel')).forEach((valor, index) => {
        valor.addEventListener('click', (evento) => {
            const pixelCor = corSelecionada();
            evento.target.style.backgroundColor = pixelCor;
            armazenarPixel(color, index) 
        })
    })
}
window.addEventListener("load", function (event) {
    selecionar();
    corPixel();
    iniciarCor();
    todasCores();
    comecarPreto();
})


