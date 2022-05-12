export const setLandingLoaded = (count) => {
    return {
        type: 'INCREMENT',
        payload: count
    }
}

export const addProduct = (cart_item) => {
    return {
        type: 'ADD_TO_CART',
        payload: {
            id: cart_item.id,
            title: cart_item.title,
            desc: cart_item.desc,
            price: cart_item.price,
            quantity: cart_item.quantity
        }
    }
}

export const emptyCart = () => {
    return {
        type: 'EMPTY_CART',
        payload: true
    }
}