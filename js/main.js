const divNoticiaPrincipal = document.querySelector('.noticia-principal')
console.log(divNoticiaPrincipal)

const createH = document.createElement('h2')
const createP = document.createElement('p')

function editarTituloNoticiaPrincipal() {
    const textoH = prompt('Ingresa el texto del titulo')
    divNoticiaPrincipal.insertAdjacentElement("beforeend", createH)
    createH.innerText = textoH
    createH.style = 'color: white'
}

function editarParrafoNoticiaPrincipal() {
    const textoP = prompt('Ingresa el texto del parrafo')
    divNoticiaPrincipal.insertAdjacentElement("afterend", createP)
    createP.innerText = textoP
}

