import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

// pages

import Home from './pages/Home';
import Game from './pages/Game';
import Play from './pages/Play';
import Join from './pages/Join';

const App = () => (
    <Router>
        <React.Fragment>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Imbinn er mættur!</h1>
            </header>

            <Route exact path="/" component={Home} />
            <Route path="/game/:gameId" component={Game} />
            <Route exact path="/play" component={Join} />
            <Route path="/play/:gameId" component={Play} />
        </React.Fragment>
    </Router>
);

export default App;
