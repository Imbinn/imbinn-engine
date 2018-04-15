import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';

import styles from './styles';
import Users from '../../components/Users';
import QuizText from '../../components/Rounds/Quiz/Text';
import RoundLoader from '../../components/Rounds/RoundLoader';

const Game = props => (
    <div style={styles.container}>
        <span>Spilakóði: {props.game.id}</span>
        {props.game.key && <Users users={props.game.users} />}
        {props.round.key && <QuizText round={props.round} />}

        { props.game.key &&
            <Link to={`/game/${props.game.id}/round/0`}><button>Byrja</button></Link>
        }


        <Route
            path="/game/:gameId/round/:roundIndex"
            render={foo => <RoundLoader {...foo} rounds={props.game.rounds} />}
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
