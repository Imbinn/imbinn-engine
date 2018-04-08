import React from 'react';
import PropTypes from 'prop-types';

import Users from '../../components/Users';

const Game = props => (
    <React.Fragment>
        <span>Spilakóði: {props.game.id}</span>
        {props.game.key && <Users gameKey={props.game.key} />}
    </React.Fragment>
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
