import { Api } from "./api-spotify.js";

const TheBeatles = '3WrFJ7ztbogyGnTHbHJFl2'
const LosRedondos = '6byQKddO1b34lXC2ZEjehQ'
const SodaStereo = '7An4yvF7hDYDolN4m5zKBp'
const Coldplay = '4gzpq5DPGxSnKTe4SA8HAU'
const LedZeppelin = '36QJpDe2go2KgaRleHCDTp'
const Queen = '1dfeR4HaWDbWqFHLkxsg1d'

 
const ALBUMS = await Api.REQ_ALBUMS(TheBeatles)
console.log(ALBUMS)
const listaAlbums = document.querySelector('.lista-albums')

for(let i = ALBUMS.length-1; i >= 0; i--) {
    const li = document.createElement('li')
    li.classList.add('album', `${ALBUMS[i].id}`)
    listaAlbums.appendChild(li)
    li.innerHTML = `
        <img src="${ALBUMS[i].images[0].url}">
        <span>${ALBUMS[i].name}</span>
    `
}

const albumNodes = document.querySelectorAll('.album')
// console.log(albumNodes)

albumNodes.forEach(element => {
    element.addEventListener('click', event => {
        event.target.parentNode.classList.toggle('album-disabled')
    })
})

const filtrarAlbums = () => {
    const albums = {}
    for(let i = 0; i < albumNodes.length; i++) {
        if(!albumNodes[i].classList.contains('album-disabled')) {
            albums[i] = {
                album: albumNodes[i].innerText, 
                id: albumNodes[i].classList[1], 
                tapa: albumNodes[i].children[0].currentSrc
            }
        }
    }
    console.table(albums)
    return albums
}

function resetAlbums() {
    for(let i = 0; i < albumNodes.length; i++) {
        albumNodes[i].classList.remove('album-disabled')
    }
}

document.querySelector('.get-albums').addEventListener('click', filtrarAlbums)
document.querySelector('.reset-albums').addEventListener('click', resetAlbums)