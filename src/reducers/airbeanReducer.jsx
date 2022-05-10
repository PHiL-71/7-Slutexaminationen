// Reducer - uppdaterar state i store
const initialState = {
    LandingLoaded: 0,
    CartContent: []
};

const airbeanReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {
                ...state,
                LandingLoaded: state.LandingLoaded + action.payload
            }
        case 'ADD_TO_CART':
            return {
                ...state,
                CartContent: [...state.CartContent, action.payload]
            }
        case 'EMPTY_CART':
            return {
                ...state,
                CartContent: [],
                LandingLoaded: 0
            }
        default:
        return state
    }
}

export default airbeanReducer;