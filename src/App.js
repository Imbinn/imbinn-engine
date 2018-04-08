import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withFirebase } from 'react-redux-firebase';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

// pages

import Home from './pages/Home';
import Game from './pages/Game';

class App extends Component {
    static propTypes = {
        firebase: PropTypes.shape().isRequired,
    }

    constructor(props) {
        super(props);

        this.state = { gameId: '', gameKey: '' };
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
        firebase.push('games', newGame).then((snapshot) => {
            this.setState({ gameId: id, gameKey: snapshot.key });
        });
    }

    render() {
        return (
            <Router>
                <React.Fragment>
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Imbinn er mættur!</h1>
                    </header>

                    <Route exact path="/" component={Home} />
                    <Route path="/game/:gameId" component={Game} />
                </React.Fragment>
            </Router>
        );
    }
}

export default withFirebase(App);
