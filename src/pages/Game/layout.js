import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import Users from '../../components/Users';
import RoundLoader from '../../components/Rounds/RoundLoader';

export class Game extends React.PureComponent {
    static defaultProps = {
        game: null,
    }

    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                gameId: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
        game: PropTypes.shape({
            key: PropTypes.string,
            id: PropTypes.string,
            currentRoundIndex: PropTypes.number,
            startedAt: PropTypes.number,
            finishedAt: PropTypes.number,
            users: PropTypes.shape(),
            rounds: PropTypes.arrayOf(PropTypes.shape()),
        }),
        getGame: PropTypes.func.isRequired,
        startGame: PropTypes.func.isRequired,
        isLoadingGame: PropTypes.bool.isRequired,
    }

    componentWillMount = () => {
        const {
            getGame,
            match: { params: { gameId } },
        } = this.props;

        getGame(gameId);
    }

    render() {
        const {
            game,
            startGame,
            isLoadingGame,
        } = this.props;

        return (
            <React.Fragment>
                {isLoadingGame && <span>Hleð upplýsingum um leik</span>}

                {game && <Users users={game.users} />}

                {game && !game.startedAt &&
                    <button onClick={() => startGame(game.key)}>Byrja</button>
                }

                {game && game.startedAt &&
                    <div style={styles.container}>
                        <div>
                            <div>Spilakóði: {game.id}</div>
                            <div>Ránd {game.currentRound + 1} / {game.rounds.length}</div>
                        </div>
                        <div>
                            <RoundLoader
                                roundIndex={game.currentRound}
                                gameRounds={game.rounds}
                            />
                        </div>
                    </div>
                }

            </React.Fragment>
        );
    }
}

export default Game;
