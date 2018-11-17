import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Join from './layout';
import withGamesResource from '../../stores/game/withGameResource';

export class JoinContainer extends React.PureComponent {
    static propTypes = {
        getGame: PropTypes.func.isRequired,
        joinGame: PropTypes.func.isRequired,
        history: PropTypes.shape().isRequired,
    }

    constructor(props) {
        super(props);
        this.state = { gameId: '', username: '' };
    }

    onJoinGame = async () => {
        const {
            getGame,
            joinGame,
            history,
        } = this.props;
        const {
            gameId,
            username,
        } = this.state;

        const game = await getGame(gameId);

        if (game) {
            await joinGame(game.key, username);
            history.push(`/play/${game.id}`);
        }
    }

    handleInputChange = (event, stateProperty) => {
        this.setState({
            [stateProperty]: event.target.value,
        });
    }

    render() {
        return (
            <Join
                {...this.props}
                {...this.state}
                onJoinGame={this.onJoinGame}
                handleInputChange={this.handleInputChange}
            />
        );
    }
}

export default withGamesResource(
    withRouter(
        JoinContainer,
    ),
);
