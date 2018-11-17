import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Play from './layout';
import withGamesResource from '../../stores/game/withGameResource';

export class PlayContainer extends React.PureComponent {
    static propTypes = {
        getGame: PropTypes.func.isRequired,
    }

    componentWillMount = () => {
    }

    render() {
        return (
            <Play
                {...this.props}
                {...this.state}
            />
        );
    }
}

export default withGamesResource(
    withRouter(PlayContainer),
);
