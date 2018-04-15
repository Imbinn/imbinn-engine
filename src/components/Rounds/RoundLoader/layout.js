import React from 'react';
import PropTypes from 'prop-types';

const RoundLoader = props => <div>{React.createElement(props.component, { meta: props.meta })}</div>;

RoundLoader.propTypes = {
    component: PropTypes.element.isRequired,
    meta: PropTypes.shape().isRequired,
};

export default RoundLoader;
