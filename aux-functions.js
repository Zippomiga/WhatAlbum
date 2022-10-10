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
        <iframe src="https://open.spotify.com/embed/track/${idTrack}?utm_source=generator&theme=0" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" class="repSpotify"></iframe>
        `
}

export const Aux = {
    nsRandoms,
    random,
    buildDivs,
    repSpotify
}