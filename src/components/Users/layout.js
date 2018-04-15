import React from 'react';
import PropTypes from 'prop-types';

const Users = ({ users }) => (
    <ul>
        {Object.keys(users).map(userKey => <li key={userKey}>{users[userKey].username}</li>)}
    </ul>
);

Users.defaultProps = {
    users: {},
};

Users.propTypes = {
    users: PropTypes.shape(),
};

export default Users;
