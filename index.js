let count = 1
const radio = document.querySelectorAll('.manual-btn')
const setas = document.querySelectorAll('button')

// setInterval(() => {
//     nextImage()
// },5000)

// for(let i = 0; i < setas.length; i++){
//     setas[i].addEventListener('')
// }

// Trasformar a variavel setas em um array, depois filtrar todas as setas da direita e da esquerda, assim armazenando em um array. Utilizamos o forEach para adicionar o evento em cas seta
const setasArray = Array.from(setas)

const setasEsquerda = setasArray.filter(esquerda => esquerda.classList.contains('esquerda'))
const setasDireita = setasArray.filter(direita => direita.classList.contains('direita'))


setasEsquerda.forEach(eventSeta => eventSeta.addEventListener('click', nextImage2))
setasDireita.forEach(eventSeta => eventSeta.addEventListener('click', nextImage))



setas[0].addEventListener('click', nextImage2)
setas[1].addEventListener('click', nextImage)

function nextImage(){
    count++

    if(count > 3){
        count = 1
    }
    
    document.getElementById('radio'+count).checked = true
}

function nextImage2(){
    count--
    if(count <= 3){
        // count = count
        document.getElementById('radio'+count).checked = true
    }
    
}