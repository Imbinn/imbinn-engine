import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withFirebase } from 'react-redux-firebase';

import logo from './logo.svg';
import './App.css';
import Users from './components/Users';

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
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Imbinn er mættur!</h1>
                </header>
                <div className="App-intro">
                    {this.state.gameId &&
                        <span>
                            <span>Game ID: {this.state.gameId}</span>
                            <Users gameKey={this.state.gameKey} />
                        </span>
                    }
                    {!this.state.gameId && <button onClick={this.createGame}>Hefja leik</button>}
                </div>
            </div>
        );
    }
}

export default withFirebase(App);
