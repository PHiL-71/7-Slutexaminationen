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

export const addOne = (cart_item) => {
    return {
        type: 'ADD_ONE_TO_CART',
        payload: cart_item
    }
}

export const removeOne = (cart_item) => {
    return {
        type: 'REMOVE_ONE_FROM_CART',
        payload: cart_item
    }
}

export const emptyCart = () => {
    return {
        type: 'EMPTY_CART',
        payload: true
    }
}