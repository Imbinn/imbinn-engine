import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import styles from './styles';
import Users from '../../components/Users';
import RoundLoader from '../../components/Rounds/RoundLoader';

const Game = props => (
    <div style={styles.container}>
        <span>Spilakóði: {props.game.id}</span>
        {props.game.key && <Users users={props.game.users} />}

        <button>Byrja</button>

        <Route
            path="/game/:gameId/round/:roundIndex"
            render={() => <RoundLoader rounds={props.game.rounds} />}
        />
    </div>
);

Game.defaultProps = { game: {} };

Game.propTypes = {
    game: PropTypes.shape({
        key: PropTypes.string,
        id: PropTypes.string,
        users: PropTypes.shape(),
        rounds: PropTypes.arrayOf(PropTypes.shape()),
    }),
};

export default Game;
