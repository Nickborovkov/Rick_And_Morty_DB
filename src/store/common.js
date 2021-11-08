export default {
    state: {
        error: null,
        isLoading: false,
    },
    mutations: {
        setError (state, error) {
            state.error = error
        },
        toggleIsLoading (state, isLoading) {
            state.isLoading = isLoading
        }
    },
}
