import React from 'react';

import QuizText from './layout';

import withRound from '../../../RoundLoader/withRound';

class QuizTextContainer extends React.PureComponent {
    render() {
        return (
            <QuizText {...this.props} />
        );
    }
}

export default withRound(QuizTextContainer);
