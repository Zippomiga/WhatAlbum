import { Api } from "./api-spotify.js"

const input_ID = document.querySelector('.input-ID')
const btnCapturar_ID = document.querySelector('.insert-ID')

input_ID.addEventListener('click', () => {
        input_ID.value = ''
})

btnCapturar_ID.addEventListener('click', async(event) => {
    event.preventDefault()

    const valor = document.querySelector('.input-ID').value
    const digitos_ID = 22
    const ID = valor.slice(valor.length - digitos_ID , valor.length)

    const ALBUMS = await Api.REQ_ALBUMS(ID)

    if(input_ID.value === '') {
        input_ID.value = 'Por favor, inserte un ID 🙏'
    } else if(!ALBUMS) {
        input_ID.value = 'ID inválido 😭'
    } else {
        localStorage.setItem('Albums', JSON.stringify(ALBUMS))
        window.location.href = "./select-albums.html"
    }
})