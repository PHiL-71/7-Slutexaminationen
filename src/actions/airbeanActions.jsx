export const setLandingLoaded = (count) => {
    return {
        type: 'INCREMENT',
        payload: count
    }
}

export const addProduct = (cart_item) => {
    return {
        type: 'ADD_TO_CART',
        payload: cart_item
    }
}

export const emptyCart = () => {
    return {
        type: 'EMPTY_CART',
        payload: true
    }
}