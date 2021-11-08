import {requestCharacters} from "../API/serverRequests";

export default {
    state: {
        charactersResults: null,
        charactersInfo: null,
        specificCharacter: null,
        page: 1,
    },
    mutations: {
        setCharactersResults (state, charactersResults) {
            state.charactersResults = charactersResults
        },
        setCharactersInfo (state, charactersInfo) {
            state.charactersInfo = charactersInfo
        },
        setSpecificCharacter (state, specificCharacter) {
            state.specificCharacter = specificCharacter
        },
        nextPage (state) {
            state.page = state.page + 1
        },
        prevPage (state) {
            state.page = state.page - 1
        }
    },
    actions: {
        async getAllCharacters ({commit}, page){
            try {
                commit(`setError` , null)
                commit(`toggleIsLoading` , true)
                const response = await requestCharacters.requestAllCharacters(page)
                commit(`setCharactersResults`, response.data.results)
                commit(`setCharactersInfo`, response.data.info)
                commit(`toggleIsLoading` , false)
            }catch (error) {
                commit(`setError` , error.name)
            }
        },
        async getCharactersByName ({commit}, name, status, species, gender){
            try {
                commit(`setError` , null)
                commit(`toggleIsLoading` , true)
                const response = await requestCharacters.requestCharactersByName(name, status, species, gender)
                commit(`setCharactersResults`, response.data.results)
                commit(`setCharactersInfo`, response.data.info)
                commit(`toggleIsLoading` , false)
            }catch (error) {
                commit(`setError` , error.name)
            }
        },
        async getCharacterById ({commit}, characterId){
            try {
                commit(`setError` , null)
                commit(`toggleIsLoading` , true)
                const response = await requestCharacters.requestCharacterById(characterId)
                commit(`setSpecificCharacter`, response.data)
                commit(`toggleIsLoading` , false)
            }catch (error) {
                commit(`setError` , error.name)
            }
        },
    },
    getters: {
        getChatactersResults (state) {
            return state.charactersResults
        },
        getChatactersInfo (state) {
            return state.charactersInfo
        },
        getSpecificCharacter (state) {
            return state.specificCharacter
        },
        getPage (state) {
            return state.page
        }
    },
}
