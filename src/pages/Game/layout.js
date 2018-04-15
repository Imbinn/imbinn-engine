import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import styles from './styles';
import Users from '../../components/Users';
import QuizText from '../../components/Rounds/Quiz/Text';
import RoundLoader from '../../components/Rounds/RoundLoader';

const Game = props => (
    <div style={styles.container}>
        <span>Spilakóði: {props.game.id}</span>
        {props.game.key && <Users users={props.game.users} />}
        {props.round.key && <QuizText round={props.round} />}

        <button>Byrja</button>

        <Route
            path="/game/:gameId/round/:roundIndex"
            render={() => <RoundLoader foo="yolo" />}
        />
    </div>
);

Game.defaultProps = {
    game: {},
    round: {},
};

Game.propTypes = {
    game: PropTypes.shape({
        key: PropTypes.string,
        id: PropTypes.string,
        users: PropTypes.shape(),
    }),
    round: PropTypes.shape({
        key: PropTypes.string,
        type: PropTypes.string,
        meta: PropTypes.shape(),
        stages: PropTypes.shape(),
    }),
};

export default Game;
