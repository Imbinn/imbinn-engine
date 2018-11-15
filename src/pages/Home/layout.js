import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const Home = props => (
    <div style={styles.container}>
        <button style={styles.button} onClick={props.onCreateGame}>Nýr leikur</button>
        eða
        <button style={styles.button} onClick={props.onJoinGame}>Tengjast leik</button>
    </div>
);

Home.propTypes = {
    onCreateGame: PropTypes.func.isRequired,
    onJoinGame: PropTypes.func.isRequired,
};

export default Home;
