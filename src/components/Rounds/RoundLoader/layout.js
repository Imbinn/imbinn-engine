import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class RoundLoader extends PureComponent {
    static propTypes = {
        children: PropTypes.element.isRequired,
    };

    render() {
        const {
            children,
        } = this.props;
        return (
            <React.Fragment>
                {children}
            </React.Fragment>
        );
    }
}


export default RoundLoader;
