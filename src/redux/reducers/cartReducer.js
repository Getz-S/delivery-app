import { cartTypes } from "../types/cartTypes"

const initialState = {
    cart: []
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case cartTypes.ADD_CART:
            return {
                ...state,
                cart: action.payload
            }
        default:
            return state
    }
}