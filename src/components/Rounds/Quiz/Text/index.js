import React from 'react';

import QuizText from './layout';

class QuizTextContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <QuizText {...this.props} />
        );
    }
}

export default QuizTextContainer;
