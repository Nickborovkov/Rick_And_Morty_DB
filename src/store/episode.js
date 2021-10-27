import {requestEpisodes} from "../API/serverRequests";

export default {
    state: {
        episodes: null,
        specificEpisode: null,
    },
    mutations: {
        setEpisodes (state, payload) {
            state.episodes = payload.episodes
        },
        setSpecificEpisode (state, payload) {
            state.specificEpisode = payload.specificEpisode
        }
    },
    actions: {
        async getAllEpisodes ({commit}) {
            commit(`setError` , null)
            commit(`toggleIsLoading` , true)
            const response = await requestEpisodes.requestAllEpisodes()
            commit(`setEpisodes`, response.data)
            commit(`toggleIsLoading` , false)
        },
        async getEpisodesById ({commit}, episodeId) {
            commit(`setError` , null)
            commit(`toggleIsLoading` , true)
            const response = await requestEpisodes.requestEpisodesById(episodeId)
            commit(`setSpecificEpisode`, response.data)
            commit(`toggleIsLoading` , false)
        },
        async getEpisodesByName ({commit}, name) {
            commit(`setError` , null)
            commit(`toggleIsLoading` , true)
            const response = await requestEpisodes.requestEpisodeByName(name)
            commit(`setEpisodes`, response.data)
            commit(`toggleIsLoading` , false)
        },
    },
    getters: {
        getEpisodes (state) {
            return state.episodes
        },
        getSpecificEpisode (state) {
            return state.specificEpisode
        }
    }
}
