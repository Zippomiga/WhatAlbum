import { Aux } from "./aux-functions.js";

const ALBUMS = JSON.parse(localStorage.getItem('Albums'))
const minAlbums = 4

let contAux = ALBUMS.length

const listaAlbums = document.querySelector('.lista-albums')
const albumNodes = document.querySelector('.lista-albums').childNodes

const btnBack = document.querySelector('.back')
const btnDisableAll = document.querySelector('.disable-albums')
const btnEnableAll = document.querySelector('.reset-albums')
const btnPlay = document.querySelector('.play')

Aux.buildAlbumsList(ALBUMS, listaAlbums)

albumNodes.forEach(element => {
    element.addEventListener('click', event => {
        event.target.parentNode.classList.toggle('disabled')
        
        if(event.target.parentNode.classList.contains('disabled')) {
            contAux--
        } else {
            contAux++
        }
        if(contAux < minAlbums) {
            btnPlay.classList.add('off')
        } else {
            btnPlay.classList.remove('off')
        }
    })
})

function disableAll() {
    albumNodes.forEach(element => {
        element.classList.add('disabled')
    })

    btnPlay.classList.add('off')
    contAux = 0
}

function enableAll() {
    albumNodes.forEach(element => {
        element.classList.remove('disabled')
    })

    btnPlay.classList.remove('off')
    contAux = ALBUMS.length
}

function play() {
    const albumsLS = Aux.addAlbums(albumNodes)
    if(Object.values(albumsLS).length < minAlbums) {
        alert(`Seleccione al menos ${minAlbums - contAux} ${(contAux === 3)? 'album' : 'albums'}`)
    } else {
        localStorage.setItem('Filtrados', JSON.stringify(albumsLS))
        window.location.href = "./app.html"
    }
}

btnBack.addEventListener('click', () => {window.location.href = "./index.html"})
btnDisableAll.addEventListener('click', disableAll)
btnEnableAll.addEventListener('click', enableAll)
btnPlay.addEventListener('click', play)