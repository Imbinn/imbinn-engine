import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withFirebase } from 'react-redux-firebase';

import logo from './logo.svg';
import './App.css';

class App extends Component {
    static propTypes = {
        firebase: PropTypes.shape().isRequired,
    }

    createGame = () => {
        const { firebase } = this.props;
        const id = Math
            .random()
            .toString(36)
            .replace(/[^a-z]+/g, '')
            .substr(0, 6)
            .toUpperCase();

        const newGame = { id, createdAt: Date.now() };
        firebase.push('games', newGame);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Imbinn er mættur!</h1>
                </header>
                <p className="App-intro">
                    <button onClick={this.createGame}>Hefja leik</button>
                </p>
            </div>
        );
    }
}

export default withFirebase(App);
