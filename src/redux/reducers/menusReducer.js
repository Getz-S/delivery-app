import { menusTypes } from "../types/menusTypes";
const initialState = {
    menus: []
};

export const menusReducer = (state = initialState, action) => {

    switch (action.type) {

        case menusTypes.MENUS_FILL:

            return { ...state, menus: [...action.payload]};

        default:
            return state;
    }
}