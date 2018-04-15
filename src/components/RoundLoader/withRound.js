import React from 'react';

const withRound = WrappedComponent => (
    class extends React.PureComponent {
        render() {
            return (
                <WrappedComponent
                    {...this.props}
                />
            );
        }
    }
);

export default withRound;
