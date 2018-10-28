import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as roundsActions from './actions';

export const mapDispatchToProps = dispatch => bindActionCreators({
    ...roundsActions,
}, dispatch);

export const mapStateToProps = state => ({
    isLoadingRounds: state.rounds.isLoading,
    error: state.rounds.error,
    rounds: state.rounds.data,
    isLoadingRound: state.round.isLoading,
    round: state.round.data,
});

export const withRoundsResource = (WrappedComponent) => {
    class RoundsResource extends React.PureComponent {
        render() {
            return (
                <WrappedComponent
                    {...this.props}
                />
            );
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(RoundsResource);
};


export default withRoundsResource;
