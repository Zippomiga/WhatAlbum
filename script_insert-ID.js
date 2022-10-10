const capturarID = document.querySelector('.insert-ID')

capturarID.addEventListener('click', event => {
    event.preventDefault()
    const input_id = document.querySelector('.input-ID').value
    localStorage.setItem('ID', input_id)
    window.location.href = "./select-albums.html"
})