import React from 'react';
import PropTypes from 'prop-types';

import RoundLoader from '../../components/Rounds/RoundLoader';

class Play extends React.PureComponent {
    static propTypes = {
        game: PropTypes.shape({
            startedAt: PropTypes.number,
            currentRound: PropTypes.number.isRequired,
        }),
    }

    static defaultProps = {
        game: null,
    }

    render() {
        const { game } = this.props;

        return (
            <React.Fragment>
                {!game && <span>Hleð leik</span>}

                {game && !game.startedAt &&
                    <span>Leikur ekki enn hafinn!</span>
                }

                {game && game.startedAt &&
                    <RoundLoader
                        playable
                        roundIndex={game.currentRound}
                        gameRounds={game.rounds}
                    />
                }
            </React.Fragment>
        );
    }
}

export default Play;
