import React from 'react';
import PropTypes from 'prop-types';

import QuizText from './layout';
import withRound from '../../withRound';
import withGameResource from '../../../../stores/game/withGameResource';

class QuizTextContainer extends React.PureComponent {
    static propTypes = {
        game: PropTypes.shape({
            key: PropTypes.string.isRequired,
            currentRound: PropTypes.number.isRequired,
        }).isRequired,
        setMeta: PropTypes.func.isRequired,
    }

    onAnswer = (option) => {
        const {
            setMeta,
            game: {
                key,
                currentRound,
            },
        } = this.props;

        setMeta(key, currentRound, '/answers', option);
    }

    render() {
        return (
            <QuizText
                {...this.props}
                onAnswer={this.onAnswer}
            />
        );
    }
}

export default withRound(
    withGameResource(
        QuizTextContainer,
    ),
);
