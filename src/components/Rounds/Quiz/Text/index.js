import React from 'react';

import QuizText from './layout';

class QuizTextContainer extends React.PureComponent {
    render() {
        return (
            <QuizText {...this.props} />
        );
    }
}

export default QuizTextContainer;
