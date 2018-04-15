import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import RoundLoader from './layout';
import QuizText from '../Rounds/Quiz/Text';

const ROUND_TYPE_TO_COMPONENT = {
    quiz: QuizText,
};

export class RoundLoaderContainer extends PureComponent {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                gameId: PropTypes.string.isRequired,
                roundIndex: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
        rounds: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    }

    render() {
        const {
            match: {
                params: {
                    roundIndex,
                },
            },
            rounds,
        } = this.props;
        if (!rounds) return null;

        const round = rounds[roundIndex];
        const roundComponent = ROUND_TYPE_TO_COMPONENT[round.type];

        return (
            <RoundLoader>
                { React.createElement(roundComponent, { ...round })}
            </RoundLoader>
        );
    }
}

export default RoundLoaderContainer;
