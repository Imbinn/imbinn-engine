import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';

import styles from './styles';
import Users from '../../components/Users';
import RoundLoader from '../../components/RoundLoader';

const Game = props => (
    <div style={styles.container}>
        <div style={styles.codeContainer}>
            <span>Spilakóði: {props.game.id}</span>
            { props.game.key && <Users users={props.game.users} /> }
            { props.game.key &&
                <Link to={`/game/${props.game.id}/round/0`}><button>Byrja</button></Link>
            }
        </div>
        <div>
            { props.game.key &&
                <Route
                    path="/game/:gameId/round/:roundIndex"
                    render={routeProps => (
                        <RoundLoader
                            {...routeProps}
                            rounds={props.game.rounds}
                            onRoundComplete={props.onRoundComplete}
                        />
                    )}
                />
            }
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
    onRoundComplete: PropTypes.func.isRequired,
};

export default Game;
