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

    getAvailableRoundKeys = () =>
        new Promise((resolve) => {
            this.props.firebase
                .database()
                .ref('rounds')
                .on('value', (snapshot) => {
                    const roundIds = [];
                    snapshot.forEach((roundSnap) => {
                        roundIds.push(roundSnap.key);
                    });

                    resolve(roundIds);
                });
        });

    getRandomRounds = async (roundKeys) => {
        // TODO, pick a random round
        const theRoundKeyToUseForNow = roundKeys[0];

        return new Promise((resolve) => {
            this.props.firebase
                .database()
                .ref('rounds')
                .child(`${theRoundKeyToUseForNow}`)
                .on('value', (snapshot) => {
                    resolve([{
                        key: snapshot.key,
                        ...snapshot.val(),
                    }]);
                });
        });
    }

    createGame = async () => {
        const { firebase, history } = this.props;
        const id = Math
            .random()
            .toString(36)
            .replace(/[^a-z]+/g, '')
            .substr(0, 6)
            .toUpperCase();

        const availableRoundKeys = await this.getAvailableRoundKeys();
        const randomRounds = await this.getRandomRounds(availableRoundKeys);

        const newGame = { id, createdAt: Date.now(), rounds: randomRounds };
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
