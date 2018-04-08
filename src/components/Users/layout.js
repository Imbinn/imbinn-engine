import React from 'react';
import PropTypes from 'prop-types';

const Users = ({ users }) => (
    <ul>
        {users.map(user => <li key={user.id}>{user.username}</li>)}
    </ul>
);

Users.defaultProps = {
    users: [],
};

Users.propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape()),
};

export default Users;
