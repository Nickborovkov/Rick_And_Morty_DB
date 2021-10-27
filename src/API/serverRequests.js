import axios from "axios";

const instance = axios.create({
    baseURL: `https://rickandmortyapi.com/api/`
})


export const requestCharacters = {
    requestAllCharacters () {
        return instance.get(`character`)
    },
    requestCharacterById (characterId) {
        return instance.get(`character/${characterId}`)
    },
    requestCharactersByName (name = `rick`, status = `alive`, species=`human`, gender=`male`) {
        return instance.get(`character/?name=${name}&status=${status}&species=${species}&gender=${gender}`)
    },
}
export const requestLocations = {
    requestAllLocations () {
        return instance.get(`location`)
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
