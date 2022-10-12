import { Aux } from "./aux-functions.js";

const ALBUMS = JSON.parse(localStorage.getItem('ALBUMS'))

let albumsLS;
let contAux = ALBUMS.length
const minAlbums = 4

const listaAlbums = document.querySelector('.lista-albums')
const albumNodes = document.querySelector('.lista-albums').childNodes

const btnBack = document.querySelector('.back')
const btnEnableAll = document.querySelector('.reset-albums')
const btnDisableAll = document.querySelector('.disable-albums')
const btnPlay = document.querySelector('.play')

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
    albumsLS = {}
    Aux.addAlbums(albumNodes, albumsLS)

    albumNodes.forEach(element => {
        element.classList.remove('disabled')
    })

    btnPlay.classList.remove('off')
    contAux = ALBUMS.length
}

function disableAll() {
    albumsLS = {}
    Aux.addAlbums(albumNodes, albumsLS)

    albumNodes.forEach(element => {
        element.classList.add('disabled')
    })

    btnPlay.classList.add('off')
    contAux = 0
}

function play() {
    albumsLS = {}
    Aux.addAlbums(albumNodes, albumsLS)

    if(Object.values(albumsLS).length < minAlbums) {
        alert(`Selecciona al menos ${minAlbums} albums`)
    } else {
        localStorage.removeItem('ALBUMS')
        localStorage.setItem('ALBUMS', JSON.stringify(albumsLS))
        window.location.href = "./app.html"
    }
}

btnBack.addEventListener('click', () => {window.location.href = "./index.html"})
btnEnableAll.addEventListener('click', enableAll)
btnDisableAll.addEventListener('click', disableAll)
btnPlay.addEventListener('click', play)