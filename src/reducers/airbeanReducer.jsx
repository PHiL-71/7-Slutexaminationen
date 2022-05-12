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
            const ifExist = state.CartContent.find(fromState => fromState.id === action.payload.id);

            if(ifExist === undefined) {
                return {
                    ...state,
                    CartContent: [...state.CartContent, action.payload]
                }
            }
            else {
                const itemIndex = state.CartContent.findIndex((item) => item.id === action.payload.id);
                const cartCopy = [...state.CartContent];
                const itemCopy = { ...cartCopy[itemIndex] }
                itemCopy.quantity++;
                cartCopy[itemIndex] = itemCopy;
                return {
                    ...state,
                    CartContent: cartCopy
                }
            }

        case 'ADD_ONE_TO_CART':
            const itemIndex2 = state.CartContent.findIndex((item) => item.id === action.payload.id);
            const cartCopy2 = [...state.CartContent];
            const itemCopy2 = { ...cartCopy2[itemIndex2] }
            itemCopy2.quantity++;
            cartCopy2[itemIndex2] = itemCopy2;
            return {
                ...state,
                CartContent: cartCopy2
            }

        case 'REMOVE_ONE_FROM_CART':
            const itemIndex3 = state.CartContent.findIndex((item) => item.id === action.payload.id);
            const cartCopy3 = [...state.CartContent];
            const itemCopy3 = { ...cartCopy3[itemIndex3] }
            if(itemCopy3.quantity === 1) {
                const removeThis = state.CartContent.filter((item) => item.id !== action.payload.id);
                return {
                    ...state,
                    CartContent: removeThis
                }
            }
            else {
                itemCopy3.quantity--;
                cartCopy3[itemIndex3] = itemCopy3;
                return {
                    ...state,
                    CartContent: cartCopy3
                }
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