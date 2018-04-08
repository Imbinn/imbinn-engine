import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import Users from '../../components/Users';

const Game = props => (
    <div style={styles.container}>
        <span>Spilakóði: {props.game.id}</span>
        {props.game.key && <Users gameKey={props.game.key} />}
    </div>
);

Game.defaultProps = {
    game: {},
};

Game.propTypes = {
    game: PropTypes.shape({
        key: PropTypes.string,
        id: PropTypes.string,
    }),
};

export default Game;
