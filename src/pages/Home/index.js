import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withFirebase } from 'react-redux-firebase';
import { withRouter } from 'react-router-dom';

import Home from './layout';

class HomeContainer extends Component {
    static propTypes = {
        firebase: PropTypes.shape().isRequired,
        history: PropTypes.shape().isRequired,
    }

    createGame = () => {
        const { firebase, history } = this.props;
        const id = Math
            .random()
            .toString(36)
            .replace(/[^a-z]+/g, '')
            .substr(0, 6)
            .toUpperCase();

        const newGame = { id, createdAt: Date.now() };
        firebase.push('games', newGame).then((snapshot) => {
            // this.setState({ gameId: id, gameKey: snapshot.key });

            history.push(`/game/${id}`);
        });
    }

    render = () => (
        <Home
            {...this.props}
            createGame={this.createGame}
        />
    );
}

export default withFirebase(withRouter(HomeContainer));
