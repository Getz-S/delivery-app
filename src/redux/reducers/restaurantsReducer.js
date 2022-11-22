import { restaurantsTypes } from "../types/restaurantsTypes";
const initialState = {
    restaurants: []
};

export const restaurantsReducer = (state = initialState, action) => {

    switch (action.type) {

        case restaurantsTypes.RESTAURANTS_FILL:

            return { ...state, restaurants: [...action.payload]};

        case restaurantsTypes.PALETAS_ADD:
            return{
                ...state,
                paletas: [...state.restaurants, action.payload.restaurant], 
                error: {error: action.payload.error, errorMessage: action.payload.errorMessage}
            };
        default:
            return state;
    }
}