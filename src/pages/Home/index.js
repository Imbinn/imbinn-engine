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

    getRounds = () =>
        new Promise((resolve) => {
            this.props.firebase
                .database()
                .ref('rounds')
                .once('child_added', (snapshot) => {
                    resolve(snapshot);
                });
        });

    createGame = async () => {
        const { firebase, history } = this.props;
        const id = Math
            .random()
            .toString(36)
            .replace(/[^a-z]+/g, '')
            .substr(0, 6)
            .toUpperCase();

        const rounds = await this.getRounds();

        console.log(rounds.ref());
        debugger;

        const newGame = { id, createdAt: Date.now() };
        firebase.push('games', newGame).then(() => {
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
