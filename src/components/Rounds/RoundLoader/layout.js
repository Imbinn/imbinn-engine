import React from 'react';
import PropTypes from 'prop-types';

const RoundLoader = props => <div>{React.createElement(props.component)}</div>;

RoundLoader.propTypes = {
    component: PropTypes.element.isRequired,
};

export default RoundLoader;
