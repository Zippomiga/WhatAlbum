const REQ_TOKEN = async() => {
    try {
        const getToken = await fetch("https://accounts.spotify.com/api/token", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'Authorization': 'Basic ' + btoa('801007975b0f442cafb3a9be05ca372f:669ee8c593dd4032b76c2b333ed85c3a')
            },
            body: 'grant_type=client_credentials'
          })

          if(getToken.status >= 400) {
            console.log('Código de error: ' + getToken.status)
          } else {
            const TOKEN = await getToken.json()
            return TOKEN.access_token
          }
          
    } catch(error){
        console.log(error)
    }
}

const REQ_ALBUMS = async(artistID, offset = 0) => {
    try {
        const getAlbums = await fetch(`https://api.spotify.com/v1/artists/${artistID}/albums?include_groups=album&market=ES&limit=50&offset=${offset}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + await REQ_TOKEN()
            }
        })

        if(getAlbums.status >= 400) {
            console.log('Código de error: ' + getAlbums.status)
        } else{
            const ALBUMS = await getAlbums.json()
            return ALBUMS.items
        }

    } catch (error) {
        console.log(error)
    }
}

const REQ_TRACKS = async(albumID) => {
    try {
        const getTracks = await fetch(`https://api.spotify.com/v1/albums/${albumID}/tracks?market=ES&limit=50&offset=0`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + await REQ_TOKEN()
            }
        })
        
        if(getTracks.status >= 400) {
            console.log('Código de error: ' + getTracks.status)
        } else {
            const TRACKS = await getTracks.json()
            return TRACKS.items
        }

    } catch (error) {
        console.log(error)
    }
}

export const Api = {
    REQ_TOKEN,
    REQ_ALBUMS,
    REQ_TRACKS
}