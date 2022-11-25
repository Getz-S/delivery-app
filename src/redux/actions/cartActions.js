import { cartTypes } from "../types/cartTypes";

export const addCartSync = (platos) => {
    return {
        type: cartTypes.ADD_CART,
        payload: platos,
    };
}