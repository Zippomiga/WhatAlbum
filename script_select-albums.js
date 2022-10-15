import { Aux } from "./aux-functions.js";

const ALBUMS = JSON.parse(localStorage.getItem('ALBUMS'))

let contAux = ALBUMS.length
const minAlbums = 4

const listaAlbums = document.querySelector('.lista-albums')
const albumNodes = document.querySelector('.lista-albums').childNodes

const btnBack = document.querySelector('.back')
const btnEnableAll = document.querySelector('.reset-albums')
const btnDisableAll = document.querySelector('.disable-albums')
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

function enableAll() {
    albumNodes.forEach(element => {
        element.classList.remove('disabled')
    })

    btnPlay.classList.remove('off')
    contAux = ALBUMS.length
}

function disableAll() {
    albumNodes.forEach(element => {
        element.classList.add('disabled')
    })

    btnPlay.classList.add('off')
    contAux = 0
}

function play() {
    const albumsLS = JSON.stringify(Aux.addAlbums(albumNodes))

    if(Object.values(albumsLS).length < minAlbums) {
        alert(`Selecciona al menos ${minAlbums} albums`)
    } else {
        localStorage.setItem('Filtered', albumsLS)
        window.location.href = "./app.html"
    }
}

btnBack.addEventListener('click', () => {window.location.href = "./index.html"})
btnEnableAll.addEventListener('click', enableAll)
btnDisableAll.addEventListener('click', disableAll)
btnPlay.addEventListener('click', play)