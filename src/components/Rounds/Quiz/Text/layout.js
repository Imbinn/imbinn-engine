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
        game: PropTypes.shape({
            currentStage: PropTypes.shape({
                name: PropTypes.oneOf([
                    'questioning',
                    'answering',
                    'resulting',
                ]).isRequired,
                duration: PropTypes.number.isRequired,
            }),
        }).isRequired,
    }

    render() {
        const {
            meta: {
                question,
                options,
            },
            game,
        } = this.props;

        if (!game.currentStage) {
            return <p>loading stage</p>;
        }

        return (
            <div style={styles.container}>
                {game.currentStage.name === 'questioning'
                    && <span>{question}</span>
                }

                {game.currentStage.name === 'answering'
                    && (
                        <React.Fragment>
                            <span>{question}</span>
                            <Countdown duration={game.currentStage.duration} />
                            {options.map(option => <p key={option.option}>{option.option}</p>)}
                        </React.Fragment>
                    )
                }

                {game.currentStage.name === 'resulting'
                    && <span>RESULTING BABY</span>
                }
            </div>
        );
    }
}

export default QuizText;
