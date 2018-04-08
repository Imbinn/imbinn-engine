import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const Home = props => (
    <div style={styles.container}>
        <button style={styles.button} onClick={props.createGame}>Nýr leikur</button>
    </div>
);

Home.propTypes = {
    createGame: PropTypes.func.isRequired,
};

export default Home;
