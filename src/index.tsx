import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import firebase from 'firebase/app';

import './index.css';
import App from './App';
import { firebaseConfig } from './config/firebase';

// reducers
import game from './stores/game/reducers';
import rounds from './stores/rounds/reducers';

firebase.initializeApp(firebaseConfig);

const rootReducer = combineReducers({
    game,
    rounds,
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleWare),
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
