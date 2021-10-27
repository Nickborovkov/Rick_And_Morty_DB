export default {
    state: {
        error: null,
        isLoading: false,
    },
    mutations: {
        setError (state, payload) {
            state.error = payload.error
        },
        toggleIsLoading (state, payload) {
            state.isLoading = payload.isLoading
        }
    },
}
