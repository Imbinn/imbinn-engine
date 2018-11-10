import React from 'react';
import PropTypes from 'prop-types';

import Countdown from '../../../Utilities/Countdown';

import styles from './styles';

class QuizText extends React.PureComponent {
    static propTypes = {
        meta: PropTypes.shape({
            question: PropTypes.string.isRequired,
            options: PropTypes.arrayOf(
                PropTypes.shape({
                    option: PropTypes.string.isRequired,
                    correct: PropTypes.bool.isRequired,
                }).isRequired,
            ).isRequired,
        }).isRequired,
        stage: PropTypes.shape({
            name: PropTypes.oneOf([
                'questioning',
                'answering',
                'resulting',
            ]),
        }),
    }

    static defaultProps = {
        stage: null,
    }

    render() {
        const {
            meta: {
                question,
                options,
            },
            stage,
        } = this.props;

        return (
            <div style={styles.container}>
                {stage && stage.name === 'questioning' &&
                    <span>{question}</span>
                }
                {stage && stage.name === 'answering' &&
                    <React.Fragment>
                        <span>{question}</span>
                        <Countdown duration={stage.duration} />
                        {options.map(option => <p key={option.option}>{option.option}</p>)}
                    </React.Fragment>
                }
            </div>
        );
    }
}

export default QuizText;
