const nsRandoms = (x) => { 
    const arr = []
    for(let i in x) arr.push(i)
    arr.sort(() => 0.5 - Math.random())

    return arr
}

const random = (x) => Math.floor(Math.random() * Object.values(x).length)

const buildDivs = (albums, arr, conts) => {
    for(let i = 0; i < conts.length; i++) {
        document.querySelector(`.cont${i}`).innerHTML = `
        <img class="${albums[arr[i]].id}" src="${albums[arr[i]].images[0].url}" >
        <span class="nombre-disco">${albums[arr[i]].name}</span>
        `
    }
}

const repSpotify = (idTrack) => { 
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