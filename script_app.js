import { Api } from './api-spotify.js'
import { Aux } from './aux-functions.js'

const ALBUMS = JSON.parse(localStorage.getItem('ALBUMS'))
const conts = document.querySelectorAll('.cont')

let albumR;
let trackR; 

conts.forEach(element => {
    element.addEventListener('click', event => {
        console.log(event.target.className)
        if(event.target.className === ALBUMS[albumR].id || event.target.className === ALBUMS[albumR].album) {
            alert('JESUS')
        } else {
            alert('SATANAS')
        }
        init()
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

init()

const btnBack = document.querySelector('.back')
btnBack.addEventListener('click', () => {window.location.href = "./index.html"})