import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Home from './layout';
import withGamesResource from '../../stores/game/withGameResource';
import withRoundsResource from '../../stores/rounds/withRoundsResource';

class HomeContainer extends Component {
    static propTypes = {
        history: PropTypes.shape().isRequired,
        createGame: PropTypes.func.isRequired,
        getRounds: PropTypes.func.isRequired,
        rounds: PropTypes.arrayOf(PropTypes.string),
    }

    static defaultProps = {
        rounds: null,
    }

    componentWillMount = () => {
        const { getRounds } = this.props;

        getRounds();
    }

    onCreateGame = async () => {
        const {
            history,
            createGame,
            rounds,
        } = this.props;

        const id = Math
            .random()
            .toString(36)
            .replace(/[^a-z]+/g, '')
            .substr(0, 6)
            .toUpperCase();

        await createGame(id, rounds); // TODO: select a random subset of rounds

        history.push(`/game/${id}`);
    }

    render = () => (
        <Home
            {...this.props}
            onCreateGame={this.onCreateGame}
        />
    );
}

export default withGamesResource(
    withRoundsResource(
        withRouter(HomeContainer),
    ),
);
