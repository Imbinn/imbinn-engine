import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import QuizText from '../Quiz/Text';

const ROUND_TYPE_TO_COMPONENT = {
    quiz: {
        text: QuizText,
    },
};

export class RoundLoaderContainer extends PureComponent {
    static propTypes = {
        roundIndex: PropTypes.number.isRequired,
        gameRounds: PropTypes.arrayOf(PropTypes.object).isRequired,
    }

<<<<<<< HEAD
    getRoundComponentByType = round =>
        React.createElement(
            ROUND_TYPE_TO_COMPONENT[round.type][round.meta.type],
            {
                ...this.props,
                ...round,
            },
        )
=======
    getRoundComponentByType = round => React.createElement(
        ROUND_TYPE_TO_COMPONENT[round.type][round.meta.type],
        { ...round },
    )
>>>>>>> db23e6cc1315fe87f5e13aa6b26a03fd17547024

    render() {
        const {
            roundIndex,
            gameRounds,
        } = this.props;

        return (
            <React.Fragment>
                { this.getRoundComponentByType(gameRounds[roundIndex])}
            </React.Fragment>
        );
    }
}

export default RoundLoaderContainer;
