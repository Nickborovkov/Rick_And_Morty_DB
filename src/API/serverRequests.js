import axios from "axios";

const instance = axios.create({
    baseURL: `https://rickandmortyapi.com/api/`
})


export const requestCharacters = {
    requestAllCharacters () {
        return instance.get(`episode`)
    },
    requestCharacterById (characterId) {
        return instance.get(`episode/${characterId}`)
    },
}
export const requestLocations = {
    requestAllLocations () {
        return instance.get(`location`)
    },
    requestLocationById (locationId) {
        return instance.get(`location/${locationId}`)
    },
}
export const requestEpisodes = {
    requestAllEpisodes () {
        return instance.get(`episode`)
    },
    requestEpisodeById (episodeId) {
        return instance.get(`episode/${episodeId}`)
    },
}
