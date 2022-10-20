import { Api } from "./api-spotify.js"

const input_URL = document.querySelector('.input-ID')
const btnCapturar_URL = document.querySelector('.insert-ID')

input_URL.addEventListener('click', () => {
        input_URL.value = ''
})

btnCapturar_URL.addEventListener('click', async(event) => {
    event.preventDefault()

    const valor = document.querySelector('.input-ID').value
    const digitos_ID = 22
    const ID = valor.slice(valor.length - digitos_ID , valor.length)

    const ALBUMS = await Api.REQ_ALBUMS(ID)

    if(input_URL.value === '') {
        input_URL.value = 'Por favor, inserte una URL'
    } else if(!ALBUMS) {
        input_URL.value = 'URL inválida 😭'
    } else {
        localStorage.setItem('Albums', JSON.stringify(ALBUMS))
        window.location.href = "./select-albums.html"
    }
})