// Reducer - uppdaterar state i store
const initialState = {
    landing_loaded: 0,
    /* in med cart:en osv här */
}
    
const airbeanReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                ...state,
                landing_loaded: state.landing_loaded + action.payload /* Nuvarande värde + nya värdet */
            }
        case 'DECREMENT':
            return {
                ...state,
                landing_loaded: state.landing_loaded - action.payload /* Nuvarande värde - nya värdet */
            }
        default:
        return state
    }
}

export default airbeanReducer;