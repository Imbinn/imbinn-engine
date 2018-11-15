import React from 'react';
import PropTypes from 'prop-types';

import withGameResource from '../../stores/game/withGameResource';

/**
 * Use `withRound` to gain a general wrapper for rounds that ensures meta properties and provides
 * some round functionalities.
 * @param {React.Element} WrappedComponent The component to be wrapped.
 */
const withRound = WrappedComponent => (
    class extends React.PureComponent {
        static propTypes = {
            meta: PropTypes.shape({
                type: PropTypes.string.isRequired,
            }).isRequired,
            stages: PropTypes.arrayOf(PropTypes.shape()).isRequired,
            /**
             * Sets the current stage of the game.
             */
            setStage: PropTypes.func.isRequired,
            game: PropTypes.shape({
                key: PropTypes.string.isRequired,
            }).isRequired,
        }

        componentDidMount = () => {
            this.loadNextStage(0);
        }

        loadNextStage = async (index) => {
            const {
                stages,
                setStage,
                game: {
                    key,
                },
            } = this.props;

            // check if we're done with all the stages
            if (index === stages.length) {
                return;
            }

            const stage = stages[index];

            await setStage(key, stage);

            setTimeout(() => {
                this.loadNextStage(index + 1);
            }, stages[index].duration);
        }

        render() {
            return (
                <WrappedComponent
                    {...this.props}
                />
            );
        }
    }
);

export default component => withGameResource(withRound(component));
