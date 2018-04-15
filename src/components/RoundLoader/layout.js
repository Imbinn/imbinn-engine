import React from 'react';
import PropTypes from 'prop-types';

const RoundLoader = props => (
    <React.Fragment>
        {props.children}
    </React.Fragment>
);

RoundLoader.propTypes = {
    children: PropTypes.element.isRequired,
};

export default RoundLoader;
