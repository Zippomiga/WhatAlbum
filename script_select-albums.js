import { Api } from "./api-spotify.js";

const ID = localStorage.getItem('ID')
const ALBUMS = await Api.REQ_ALBUMS(ID)

let albumsLS;

const listaAlbums = document.querySelector('.lista-albums')
const albumNodes = document.querySelector('.lista-albums').childNodes

const btnEnableAll = document.querySelector('.reset-albums')
const btnDisableAll = document.querySelector('.disable-albums')
const btnFiltrar = document.querySelector('.filter-albums')
const btnPlay = document.querySelector('.play')

btnEnableAll.addEventListener('click', enableAll)
btnDisableAll.addEventListener('click', disableAll)
btnFiltrar.addEventListener('click', filtrarAlbums)
btnPlay.addEventListener('click', () => {window.location.href = "./app.html"})

for(let i = ALBUMS.length-1; i >= 0; i--) {
    const li = document.createElement('li')
    li.classList.add('album', `${ALBUMS[i].id}`)
    listaAlbums.appendChild(li)
    li.innerHTML = `
        <img src="${ALBUMS[i].images[0].url}">
        <span>${ALBUMS[i].name}</span>
    `
}

albumNodes.forEach(element => {
    element.addEventListener('click', event => {
        event.target.parentNode.classList.toggle('album-disabled')
        btnFiltrar.innerText = 'Filtrar Albums'
        btnFiltrar.classList.remove('filtered')
    })
})

function enableAll() {
    localStorage.removeItem('ALBUMS')
    albumsLS = []
    for(let i = 0; i < albumNodes.length; i++) {
        albumNodes[i].classList.remove('album-disabled')
        albumsLS.push({
            album: albumNodes[i].innerText, 
            id: albumNodes[i].classList[1], 
            tapa: albumNodes[i].children[0].currentSrc
        })
    }
    btnFiltrar.innerText = 'Filtrar Albums'
    btnFiltrar.classList.remove('filtered')
    localStorage.setItem('ALBUMS', JSON.stringify(albumsLS))
}

function disableAll() {
    localStorage.removeItem('ALBUMS')
    albumsLS = []
    albumNodes.forEach(element => {
        element.classList.add('album-disabled')
    })
    btnFiltrar.innerText = 'Filtrar Albums'
    btnFiltrar.classList.remove('filtered')
}

function filtrarAlbums() {
    localStorage.removeItem('ALBUMS')
    albumsLS = []
    for(let i = 0; i < albumNodes.length; i++) {
        if(!albumNodes[i].classList.contains('album-disabled')) {
            albumsLS.push({
                album: albumNodes[i].innerText, 
                id: albumNodes[i].classList[1], 
                tapa: albumNodes[i].children[0].currentSrc
            })
        }
    }
    btnFiltrar.innerText = 'Filtrado!'
    btnFiltrar.classList.add('filtered')
    localStorage.setItem('ALBUMS', JSON.stringify(albumsLS))
}



// function btnFilterText() {
//     if() {
//         btnFiltrar.innerText = 'Filtrado!'
//         btnFiltrar.classList.add('filtered')
//     } else {
//         btnFiltrar.innerText = 'Filtrar Albums'
//         btnFiltrar.classList.remove('filtered')
//     }
// }