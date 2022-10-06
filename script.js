import {Api} from './api-spotify.js'
import {Aux} from './aux-functions.js'

const TheBeatles = ['3WrFJ7ztbogyGnTHbHJFl2', 10]
const SodaStereo = ['7An4yvF7hDYDolN4m5zKBp', 7]
const LosRedondos = ['6byQKddO1b34lXC2ZEjehQ', 0]

const conts = document.querySelectorAll('.cont')
const ALBUMS = await Api.REQ_ALBUMS(...TheBeatles)

let albumR;
let trackR;

async function init() {
    const arr = Aux.nsRandoms(ALBUMS)
    albumR = arr[Aux.random(conts)]

    Aux.buildDivs(ALBUMS, arr, conts)

    const TRACKS = await Api.REQ_TRACKS(ALBUMS[albumR].id)
    trackR = Aux.random(TRACKS)

    Aux.repSpotify(TRACKS[trackR].id)
}

conts.forEach(element => {
    element.addEventListener('click', event => {
        if(ALBUMS[albumR].id === event.target.className || ALBUMS[albumR].name === event.target.innerText) {
            alert('JESUS')
            init()
        } else {
            alert('SATANAS')
            init()
        }
    })
})

init()