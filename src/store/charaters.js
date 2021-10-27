import {requestCharacters} from "../API/serverRequests";

export default {
    state: {
        characters: null,
        specificCharacter: null,
    },
    mutations: {
        setCharacters (state, characters) {
            state.characters = characters
        },
        setSpecificCharacter (state, specificCharacter) {
            state.specificCharacter = specificCharacter
        }
    },
    actions: {
        async getAllCharacters ({commit}){
            try {
                commit(`setError` , null)
                commit(`toggleIsLoading` , true)
                const response = await requestCharacters.requestAllCharacters()
                commit(`setCharacters`, response.data)
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
        async getCharactersByName ({commit}, name, status, species, gender){
            try {
                commit(`setError` , null)
                commit(`toggleIsLoading` , true)
                const response = await requestCharacters.requestCharactersByName(name, status, species, gender)
                commit(`setCharacters`, response.data)
                commit(`toggleIsLoading` , false)
            }catch (error) {
                commit(`setError` , error.name)
            }
        },
    },
    getters: {
        getChatacters (state) {
            return state.characters
        },
        getSpecificCharacter (state) {
            return state.specificCharacter
        }
    },
}
