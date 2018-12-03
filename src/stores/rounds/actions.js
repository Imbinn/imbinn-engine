import firebase from 'firebase/app';
import 'firebase/database';

import {
    GET_ROUNDS_REQUEST,
    GET_ROUNDS_SUCCESS,
} from './actions.types';

/**
 * This loads all the rounds available.
 */
export const getRounds = () => async (dispatch) => {
    dispatch({ type: GET_ROUNDS_REQUEST });
    firebase.database().ref('/rounds')
        .once('value', (snapshot) => {
            dispatch({
                type: GET_ROUNDS_SUCCESS,
                data: snapshot.val(),
            });
        });
};

export default getRounds;
