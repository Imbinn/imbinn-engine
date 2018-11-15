
import { GET_ROUNDS_SUCCESS } from './actions.types';

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
                data: Object.keys(action.data).map(key => ({
                    key,
                    ...action.data[key],
                })),
            };
        default:
            return state;
    }
};

export default rounds;
