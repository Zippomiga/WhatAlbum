export const REQ_TOKEN = async() => {
    const getToken = await fetch("https://accounts.spotify.com/api/token", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa('801007975b0f442cafb3a9be05ca372f:669ee8c593dd4032b76c2b333ed85c3a')
      },
      body: 'grant_type=client_credentials'
    })
    const TOKEN = await getToken.json()
    return TOKEN.access_token
}

const REQ_ALBUMS = async(artistID, offset = 0) => {
    const getAlbums = await fetch(`https://api.spotify.com/v1/artists/${artistID}/albums?include_groups=album&market=ES&limit=50&offset=${offset}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + await REQ_TOKEN()
        }
    })
    const ALBUMS = await getAlbums.json()
    return ALBUMS.items
}

const REQ_TRACKS = async(albumID) => {
    const getTracks = await fetch(`https://api.spotify.com/v1/albums/${albumID}/tracks?market=ES&limit=50&offset=0`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + await REQ_TOKEN()
        }
    })
    const TRACKS = await getTracks.json()
    return TRACKS.items
}

export const Api = {
    REQ_ALBUMS,
    REQ_TRACKS
}