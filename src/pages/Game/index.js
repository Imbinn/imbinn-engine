import React from 'react';
import PropTypes from 'prop-types';
import { firebaseConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';

import Game from './layout';

const GameContainer = props => <Game {...props} />;

GameContainer.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            gameId: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};

const enhance = compose(
    firebaseConnect(props => ([
        {
            path: 'games',
            queryParams: ['orderByChild=id', `equalTo=${props.match.params.gameId}`],
            storeAs: 'game',
        },
        {
            path: 'rounds',
            queryParams: ['orderByChild=type', 'equalTo=quiz'],
            storeAs: 'round',
        },
    ])),
    connect(({ firebase: { data } }) => {
        let game = {};
        let round = {};

        if (data.game) {
            const key = Object.keys(data.game)[0];
            game = {
                key,
                ...data.game[key],
            };
        }

        if (data.round) {
            const key = Object.keys(data.round)[0];
            round = {
                key,
                ...data.round[key],
            };
        }

        return {
            game,
            round,
        };
    }),
);

export default enhance(GameContainer);
