import {requestLocations} from "../API/serverRequests";

export default {
    state: {
        locations: null,
        specificLocation: null,
    },
    mutations: {
        setLoactions (state, locations) {
            state.locations = locations
        },
        setSpecificLocation (state, specificLocation) {
            state.specificLocation = specificLocation
        }
    },
    actions: {
        async getAllLocations ({commit}) {
            commit(`setError` , null)
            commit(`toggleIsLoading` , true)
            const response = await requestLocations.requestAllLocations()
            commit(`setLoactions`, response.data)
            commit(`toggleIsLoading` , false)
        },
        async getLocationsById ({commit}, locationId) {
            commit(`setError` , null)
            commit(`toggleIsLoading` , true)
            const response = await requestLocations.requestLocationById(locationId)
            commit(`setSpecificLocation`, response.data)
            commit(`toggleIsLoading` , false)
        },
        async getLocationByName ({commit}, name, type, dimension) {
            commit(`setError` , null)
            commit(`toggleIsLoading` , true)
            const response = await requestLocations.requestLocationsByName(name, type, dimension)
            commit(`setLoactions`, response.data)
            commit(`toggleIsLoading` , false)
        },
    },
    getters: {
        getLocations (state) {
            return state.locations
        },
        getSpecificLocation (state) {
            return state.specificLocation
        }
    }
}
