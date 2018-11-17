import React from 'react';
import PropTypes from 'prop-types';

class Join extends React.PureComponent {
    static propTypes = {
        username: PropTypes.string.isRequired,
        gameId: PropTypes.string.isRequired,
        onJoinGame: PropTypes.func.isRequired,
        handleInputChange: PropTypes.func.isRequired,
    }

    render() {
        const {
            username,
            gameId,
            onJoinGame,
            handleInputChange,
        } = this.props;

        return (
            <React.Fragment>
                <span>Notandanafn</span>
                <input type="text" value={username} onChange={(event) => { handleInputChange(event, 'username'); }} />
                <span>Herbergiskóði</span>
                <input type="text" value={gameId} onChange={(event) => { handleInputChange(event, 'gameId'); }} />
                <button onClick={onJoinGame}>Spila</button>
            </React.Fragment>
        );
    }
}

export default Join;
