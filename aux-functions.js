// <---------------script_insert-ID.js--------------->

const addAlbums = (albumNodes) => {
    const albums = {}
    for(let i = 0; i < albumNodes.length; i++) {
        if(!albumNodes[i].classList.contains('disabled')) {
            albums[i] = {
                album: albumNodes[i].innerText, 
                id: albumNodes[i].classList[1], 
                tapa: albumNodes[i].children[0].currentSrc
            }
        }
    }
    return albums
}

// <---------------script_select-albums.js--------------->

function buildAlbumsList(albums, lista) {
    for(let i = albums.length-1; i >= 0; i--) {
        const li = document.createElement('li')
        li.classList.add('album', `${albums[i].id}`)
        lista.appendChild(li)
        li.innerHTML = `
            <img src="${albums[i].images[0].url}">
            <span>${albums[i].name}</span>
        `
}}

// <---------------script_app.js--------------->

const nsRandoms = (x) => { 
    const arr = []
    for(let i in x) arr.push(i)
    arr.sort(() => 0.5 - Math.random())

    return arr
}

const random = (x) => Math.floor(Math.random() * x.length)

function buildDivs(albums, arr, conts) {
    for(let i = 0; i < conts.length; i++) {
        document.querySelector(`.cont${i}`).innerHTML = `
        <img class="${albums[arr[i]].id}" src="${albums[arr[i]].tapa}">
        <span class="${albums[arr[i]].album}">${albums[arr[i]].album}</span>
        `
    }
}

function repSpotify(idTrack) { 
    document.querySelector('.reproductor').innerHTML = `
        <iframe src="https://open.spotify.com/embed/track/${idTrack}?utm_source=generator&theme=0" frameBorder="0" class="repSpotify"></iframe>
        `
}

export const Aux = {
    addAlbums,
    buildAlbumsList,
    nsRandoms,
    random,
    buildDivs,
    repSpotify
}