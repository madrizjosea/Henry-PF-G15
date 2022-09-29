import {
    ADD_TO_CART,
    DELETE_FROM_CART,
    EMPTY_CART,
} from '../types.js';

const initialState = {
    items: [],
};

export default function cartReducer(state = initialState, action) {
    switch (action.type) {

        case ADD_TO_CART:
            return {
                ...state
            };

        case DELETE_FROM_CART:
            return {
                ...state
            };

        case EMPTY_CART:
            return {
                ...state
            };

        default:
            return {
                ...state,
            };
    }
}
