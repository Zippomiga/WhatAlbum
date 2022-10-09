import { Api } from './api-spotify.js'
import { Aux } from './aux-functions.js'

const ARTISTAS = {
    TheBeatles: ['3WrFJ7ztbogyGnTHbHJFl2', 10],
    SodaStereo: ['7An4yvF7hDYDolN4m5zKBp', 7],
    LosRedondos: ['6byQKddO1b34lXC2ZEjehQ', 0]
}

let ALBUMS;
let albumR;
let trackR;

const artists = document.querySelectorAll('.artist')
const conts = document.querySelectorAll('.cont')

artists.forEach(element => {
    element.addEventListener('click', async(event) => {
        const [, x] = event.target.className.split(' ')
        ALBUMS = await Api.REQ_ALBUMS(...ARTISTAS[x])
        init()
    })
})

conts.forEach(element => {
    element.addEventListener('click', event => {
        if(ALBUMS[albumR].id === event.target.className || ALBUMS[albumR].name === event.target.className) {
            alert('JESUS')
            init()
        } else {
            alert('SATANAS')
            init()
        }
    })
})

async function init() {
    const arr = Aux.nsRandoms(ALBUMS)
    albumR = arr[Aux.random(conts)]

    Aux.buildDivs(ALBUMS, arr, conts)

    const TRACKS = await Api.REQ_TRACKS(ALBUMS[albumR].id)
    trackR = Aux.random(TRACKS)

    Aux.repSpotify(TRACKS[trackR].id)
}