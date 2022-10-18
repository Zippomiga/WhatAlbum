import { Api } from './api-spotify.js'
import { Aux } from './aux-functions.js'

const ALBUMS = JSON.parse(localStorage.getItem('Filtrados'))
const conts = document.querySelectorAll('.cont')

let albumR;
let trackR; 
let good = 0
let bad = 0

conts.forEach(element => {
    element.addEventListener('click', event => {
        if(event.target.className.includes(ALBUMS[albumR].id) || event.target.className === ALBUMS[albumR].album) {
            good++
            document.querySelector('.check').innerHTML = good
            element.children[1].style.background = '#009e00'
            console.log(element.childNodes)
        } else {
            bad++
            good--
            document.querySelector('.delete').innerHTML = bad
            document.querySelector('.check').innerHTML = good
            element.children[1].style.background = '#ff0000'
            if(good < 0) {
                good = 0
                document.querySelector('.check').innerHTML = good
            }
        }
        if(good === 10) {
            alert('Ganaste!')
            good = 0
            bad = 0
            document.querySelector('.delete').innerHTML = bad
            document.querySelector('.check').innerHTML = good
        }
        if(bad === 10) {
            alert('Perdiste')
            good = 0
            bad = 0
            document.querySelector('.delete').innerHTML = bad
            document.querySelector('.check').innerHTML = good
        }
        setTimeout(init, 250)
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
btnBack.addEventListener('click', () => {window.location.href = "./select-albums.html"})