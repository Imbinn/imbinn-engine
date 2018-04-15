import React from 'react';
import PropTypes from 'prop-types';
import { firebaseConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';

import Game from './layout';

class GameContainer extends React.Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                gameId: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
    }

    onRoundComplete = () => {
        alert('awyiiih');
    }

    render() {
        return (
            <Game
                {...this.props}
                onRoundComplete={this.onRoundComplete}
            />
        );
    }
}

const enhance = compose(
    firebaseConnect(props => ([
        {
            path: 'games',
            queryParams: ['orderByChild=id', `equalTo=${props.match.params.gameId}`],
            storeAs: 'game',
        },
    ])),
    connect(({ firebase: { data } }) => {
        let game = {};

        if (data.game) {
            const key = Object.keys(data.game)[0];
            game = {
                key,
                ...data.game[key],
            };
        }

        return { game };
    }),
);

export default enhance(GameContainer);
