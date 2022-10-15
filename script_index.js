import { Api } from "./api-spotify.js"

const input_ID = document.querySelector('.input-ID')
const btnCapturar_ID = document.querySelector('.insert-ID')

input_ID.addEventListener('click', () => {
        input_ID.value = ''
})

btnCapturar_ID.addEventListener('click', async(event) => {
    event.preventDefault()
    const ID = document.querySelector('.input-ID').value
    const ALBUMS = JSON.stringify(await Api.REQ_ALBUMS(ID))

    if(input_ID.value === '') {
        input_ID.value = 'Por favor, inserte un ID 🙏'
    } else if(!ALBUMS) {
        input_ID.value = 'ID inválido 😭'
    } else {
        localStorage.setItem('Albums', ALBUMS)
        window.location.href = "./select-albums.html"
    }
})