
import React from 'react';

import Users from '../../components/Users';

const Game = props => (
    <React.Fragment>
        <span>Spilakóði: {props.gameId}</span>
        <Users gameKey={props.gameKey} />
    </React.Fragment>
);

export default Game;
