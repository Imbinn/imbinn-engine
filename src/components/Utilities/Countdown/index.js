import React from 'react';
import PropTypes from 'prop-types';

class Countdown extends React.Component {
    static propTypes = {
        duration: PropTypes.number.isRequired,
    }

    constructor(props) {
        super(props);
        this.state = this.deriveStateFromProps(props);
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps.duration !== this.props.duration) {
            this.setState({
                ...this.deriveStateFromProps(this.props),
            });
        }
    }

    componentWillUnmount = () => {
        clearInterval(this.state.interval);
    }

    deriveStateFromProps = (props) => {
        const interval = this.createInterval();

        return {
            interval,
            timer: props.duration / 1000,
        };
    }

    createInterval = () =>
        setInterval(() => {
            const { timer } = this.state;

            if (timer > 0) {
                this.setState({
                    timer: timer - 1,
                });
            }
        }, 1000);

    render() {
        return (
            <span>{this.state.timer}</span>
        );
    }
}

export default Countdown;
