import { database } from 'firebase';

import {
    GET_ROUNDS_REQUEST,
    GET_ROUNDS_SUCCESS,
    GET_ROUND_REQUEST,
    GET_ROUND_SUCCESS,
    GET_ROUND_FAILURE,
} from './actions.types';

export const getRounds = () => async (dispatch) => {
    dispatch({ type: GET_ROUNDS_REQUEST });
    database().ref('/rounds')
        .on('value', (snapshot) => {
            // TODO: reducer ?
            const roundIds = [];
            snapshot.forEach((roundSnap) => {
                roundIds.push(roundSnap.key);
            });

            dispatch({
                type: GET_ROUNDS_SUCCESS,
                data: roundIds,
            });
        });
};

export const getRound = key => async (dispatch) => {
    dispatch({ type: GET_ROUND_REQUEST });

    database().ref(`/rounds/${key}`)
        .on('value', (snapshot) => {
            if (!snapshot.key) {
                dispatch({ type: GET_ROUND_FAILURE });
            }

            dispatch({
                type: GET_ROUND_SUCCESS,
                data: {
                    key,
                    ...snapshot.val(),
                },
            });
        });
};
