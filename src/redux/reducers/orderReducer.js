import { orderTypes } from "../types/orderTypes";
const initialState = {
    orders: []
};

export const orderReducer = (state = initialState, action) => {

    switch (action.type) {

        case orderTypes.ORDER_ADD:
            return{
                ...state,
                orders: [...state.orders, action.payload.order], 
                error: {error: action.payload.error, errorMessage: action.payload.errorMessage}
            };
        case orderTypes.ORDERS_FILL:

            return { ...state, orders: [...action.payload]};


        default:
            return state;
    }
}












