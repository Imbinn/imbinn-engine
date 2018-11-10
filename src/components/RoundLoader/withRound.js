import React from 'react';
import PropTypes from 'prop-types';

/**
 * `withRound` is a general wrapper for rounds that ensures meta properties and provides some round
 * functionalities.
 * @param {React.Element} WrappedComponent The component to be wrapped.
 */
const withRound = WrappedComponent => (
    class extends React.PureComponent {
        static propTypes = {
            meta: PropTypes.shape({
                type: PropTypes.string.isRequired,
            }).isRequired,
            stages: PropTypes.arrayOf(PropTypes.shape()).isRequired,
        }

        componentDidMount = () => {
            this.loadNextStage(0);
        }

        loadNextStage = (index) => {
            const { stages } = this.props;

            // check if we're done with all the stages
            if (index === stages.length) {
                return;
            }

            const stage = stages[index];

            this.setState({ stage }, () => {
                setTimeout(() => {
                    this.loadNextStage(index + 1);
                }, stages[index].duration);
            });
        }

        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    {...this.state}
                />
            );
        }
    }
);

export default withRound;
