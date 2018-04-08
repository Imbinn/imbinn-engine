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
    firebaseConnect(props => ([{
        path: 'games',
        queryParams: ['orderByChild=id', `equalTo=${props.match.params.gameId}`],
        storeAs: 'game',
    }])),
    connect(({ firebase: { data } }) => {
        if (!data.game) {
            return {};
        }
        const key = Object.keys(data.game)[0];
        const game = {
            key,
            ...data.game[key],
        };
        return { game };
    }),
);

export default enhance(GameContainer);
