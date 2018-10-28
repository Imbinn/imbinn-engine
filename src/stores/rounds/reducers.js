
import { GET_ROUNDS_SUCCESS, GET_ROUND_SUCCESS } from './actions.types';

const initialRoundsState = {
    data: null,
    isLoading: false,
    error: false,
};

export const rounds = (state = initialRoundsState, action) => {
    switch (action.type) {
        case GET_ROUNDS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.data,
            };
        default:
            return state;
    }
};

const initialRoundState = {
    data: null,
    isLoading: false,
    error: false,
};

export const round = (state = initialRoundState, action) => {
    switch (action.type) {
        case GET_ROUND_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.data,
            };
        default:
            return state;
    }
};
