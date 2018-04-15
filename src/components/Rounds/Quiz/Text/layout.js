import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const QuizText = props => (
    <div style={styles.container}>
        Hello from QuizText!
    </div>
);

QuizText.propTypes = {
    round: PropTypes.shape().isRequired,
};

export default QuizText;
