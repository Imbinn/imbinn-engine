import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import QuizText from '../Rounds/Quiz/Text';
import withRoundsResource from '../../stores/rounds/withRoundsResource';

const ROUND_TYPE_TO_COMPONENT = {
    quiz: {
        text: QuizText,
    },
};

export class RoundLoaderContainer extends PureComponent {
    static propTypes = {
        roundIndex: PropTypes.number.isRequired,
        gameRounds: PropTypes.arrayOf(PropTypes.string).isRequired,
        getRound: PropTypes.func.isRequired,
        isLoadingRound: PropTypes.bool.isRequired,
        round: PropTypes.shape(),
    }

    static defaultProps = {
        round: null,
    }

    componentWillMount = () => {
        const {
            gameRounds,
            roundIndex,
            getRound,
        } = this.props;

        const roundKey = gameRounds[roundIndex];
        getRound(roundKey);
    }

    getRoundComponentByType = round =>
        React.createElement(
            ROUND_TYPE_TO_COMPONENT[round.type][round.meta.type],
            { ...round },
        )

    render() {
        const {
            round,
            isLoadingRound,
        } = this.props;

        return (
            <React.Fragment>
                { isLoadingRound && 'loading' }
                { round && this.getRoundComponentByType(round)}
            </React.Fragment>
        );
    }
}

export default withRoundsResource(RoundLoaderContainer);
