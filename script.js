import {Api} from './api-spotify.js'
import {Aux} from './aux-functions.js'

const TheBeatles = ['3WrFJ7ztbogyGnTHbHJFl2', 10]
const SodaStereo = ['7An4yvF7hDYDolN4m5zKBp', 7]
const LosRedondos = ['6byQKddO1b34lXC2ZEjehQ', 0]

const conts = document.querySelectorAll('.cont')
const ALBUMS = await Api.REQ_ALBUMS(...TheBeatles)

let albumR;

async function init() {
    const arr = Aux.nsRandoms(ALBUMS)
    albumR = arr[Aux.random(conts)]

    Aux.buildDivs(ALBUMS, arr, conts)

    const TRACKS = await Api.REQ_TRACKS(ALBUMS[albumR].id)
    const trackR = Aux.random(TRACKS)

    Aux.repSpotify(TRACKS[trackR].id)
}


conts.forEach(element => {
    element.addEventListener('click', event => {
        console.log(event.target.className)

        if(ALBUMS[albumR].id === event.target.className) {
            console.log('JESUS')
            init()
        } else {
            console.log('SATANAS')
            init()
        }
    })
})

init()