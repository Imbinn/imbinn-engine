import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as gameActions from './actions';

export const mapDispatchToProps = dispatch => bindActionCreators({
    ...gameActions,
}, dispatch);

export const mapStateToProps = state => ({
    isLoadingGame: state.game.isLoading,
    error: state.game.error,
    game: state.game.data,
});

export const withGamesResource = (WrappedComponent) => {
    class GamesResource extends React.PureComponent {
        render() {
            return (
                <WrappedComponent
                    {...this.props}
                />
            );
        }
    }

    return connect(mapStateToProps, mapDispatchToProps)(GamesResource);
};


export default withGamesResource;
