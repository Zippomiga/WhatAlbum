import { Api } from './api-spotify.js'
import { Aux } from './aux-functions.js'

const ALBUMS = JSON.parse(localStorage.getItem('ALBUMS'))
const conts = document.querySelectorAll('.cont')

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
        if(event.target.className === ALBUMS[albumR].id || event.target.className === ALBUMS[albumR].album) {
            alert('JESUS')
        } else {
            alert('SATANAS')
        }
        init()
    })
})

init()