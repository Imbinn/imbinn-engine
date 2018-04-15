import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const QuizText = props => (
    <div style={styles.container}>
        {props.meta.quizText}
        {props.meta.quizOptions.map(option => <p>{option.option}</p>)}
    </div>
);

QuizText.propTypes = {
    meta: PropTypes.shape({
        quizText: PropTypes.string.isRequired,
        quizOptions: PropTypes.arrayOf(
            PropTypes.shape({
                option: PropTypes.string.isRequired,
                correct: PropTypes.bool.isRequired,
            }).isRequired,
        ).isRequired,
    }).isRequired,
};

export default QuizText;
