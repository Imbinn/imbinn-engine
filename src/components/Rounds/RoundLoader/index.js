import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import RoundLoader from './layout';
import QuizText from '../Quiz/Text';

const ROUND_TYPE_TO_COMPONENT = {
    text: QuizText,
};

export class RoundLoaderContainer extends PureComponent {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                gameId: PropTypes.string.isRequired,
                roundIndex: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
        rounds: PropTypes.shape().isRequired,
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
        return (
            <RoundLoader
                component={ROUND_TYPE_TO_COMPONENT[rounds[roundIndex].type]}
            />
        );
    }
}

export default RoundLoaderContainer;
