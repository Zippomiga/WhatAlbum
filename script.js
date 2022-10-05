import {Api} from '/api-spotify.js'
import {Aux} from './aux-functions.js'

const TheBeatles = ['3WrFJ7ztbogyGnTHbHJFl2', 10]
const SodaStereo = ['7An4yvF7hDYDolN4m5zKBp', 7]
const LosRedondos = ['6byQKddO1b34lXC2ZEjehQ', 0]

const ALBUMS = await Api.REQ_ALBUMS(...TheBeatles) //todos los albums
console.log(ALBUMS)

document.querySelector('.button_play').addEventListener('click', async() => {
    const conts = document.querySelectorAll('.cont')

    const arr = Aux.nsRandoms(ALBUMS)
    const x = arr[Aux.random(conts)]

    Aux.buildDivs(ALBUMS, arr, conts)
    
    const TRACKS = await Api.REQ_TRACKS(ALBUMS[x].id)
    const y = Aux.random(TRACKS)

    Aux.repSpotify(TRACKS[y].id)
})

