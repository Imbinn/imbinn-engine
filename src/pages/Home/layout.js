import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';


export class Home extends PureComponent {
    static propTypes = {
        onCreateGame: PropTypes.func.isRequired,
        onJoinGame: PropTypes.func.isRequired,
    }

    render() {
        const {
            onCreateGame,
            onJoinGame,
        } = this.props;
        return (
            <div style={styles.container}>
                <button type="button" style={styles.button} onClick={onCreateGame}>Nýr leikur</button>
                eða
                <button type="button" style={styles.button} onClick={onJoinGame}>Tengjast leik</button>
            </div>
        );
    }
}

export default Home;
