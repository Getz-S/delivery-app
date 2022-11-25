import { platosTypes } from "../types/platosTypes";
const initialState = {
    platos: []
};

export const platosReducer = (state = initialState, action) => {

    switch (action.type) {

        case platosTypes.PLATOS_FILL:

            return { ...state, platos: [...action.payload]};

        default:
            return state;
    }
}