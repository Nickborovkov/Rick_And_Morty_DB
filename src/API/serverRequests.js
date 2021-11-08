import axios from "axios";

const instance = axios.create({
    baseURL: `https://rickandmortyapi.com/api/`
})


export const requestCharacters = {
    requestAllCharacters (page = 1) {
        return instance.get(`character/?page=${page}`)
    },
    requestCharacterById (characterId) {
        return instance.get(`character/${characterId}`)
    },
    requestCharactersByName (name = `rick`, status = `alive`, species=`human`, gender=`male`) {
        return instance.get(`character/?name=${name}&status=${status}&species=${species}&gender=${gender}`)
    },
}
export const requestLocations = {
    requestAllLocations (page = 1) {
        return instance.get(`location?page=${page}`)
    },
    requestLocationById (locationId) {
        return instance.get(`location/${locationId}`)
    },
    requestLocationsByName (name = `Citadel of Ricks`, type = `Space station`, dimension = `unknown`) {
        return instance.get(`location/?name=${name}&type=${type}&dimension=${dimension}`)
    },
}
export const requestEpisodes = {
    requestAllEpisodes () {
        return instance.get(`episode`)
    },
    requestEpisodesById (episodeId) {
        return instance.get(`episode/${episodeId}`)
    },
    requestEpisodeByName (name) {
        return instance.get(`episode/?name=${name}`)
    },
}
