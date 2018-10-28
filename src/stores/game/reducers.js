
import {
    GET_GAME_REQUEST,
    GET_GAME_SUCCESS,
    GET_GAME_FAILURE,
} from './actions.types';

const initialState = {
    data: null,
    isLoading: false,
    error: false,
};

export const game = (state = initialState, action) => {
    switch (action.type) {
        case GET_GAME_REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case GET_GAME_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                error: false,
                data: {
                    ...state.data,
                    ...action.data,
                },
            };
        }
        case GET_GAME_FAILURE: {
            return {
                ...state,
                error: true,
                isLoading: false,
            };
        }
        default:
            return state;
    }
};

export default game;
