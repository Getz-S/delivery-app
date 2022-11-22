import { restaurantsTypes } from "../types/restaurantsTypes";
const initialState = {
    restaurants: []
};

export const restaurantsReducer = (state = initialState, action) => {

    switch (action.type) {

        case restaurantsTypes.RESTAURANTS_FILL:

            return { ...state, restaurants: [...action.payload]};

        default:
            return state;
    }
}