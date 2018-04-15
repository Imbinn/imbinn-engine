import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';

import styles from './styles';
import Users from '../../components/Users';
import RoundLoader from '../../components/Rounds/RoundLoader';

const Game = props => (
    <div style={styles.container}>
        <div style={styles.codeContainer}>
            <span>Spilakóði: {props.game.id}</span>
            {props.game.key && <Users users={props.game.users} />}
            { props.game.key &&
                <Link to={`/game/${props.game.id}/round/0`}><button>Byrja</button></Link>
            }
        </div>
        <div>
            <Route
                path="/game/:gameId/round/:roundIndex"
                render={foo => <RoundLoader {...foo} rounds={props.game.rounds} />}
            />
        </div>

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
