import React from 'react';
import PropTypes from 'prop-types';
import { firebaseConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';

const Users = ({ users }) => (
    <ul>
        {users.map(user => <li key={user.id}>{user.username}</li>)}
    </ul>
);

Users.defaultProps = {
    users: [],
};

Users.propTypes = {
    gameKey: PropTypes.string.isRequired,
    users: PropTypes.arrayOf(PropTypes.shape()),
};

const enhance = compose(
    firebaseConnect(({ gameKey }) => [{
        path: `games/${gameKey}/users`,
        storeAs: 'users',
    }]),
    connect(({ firebase: { data } }) => {
        if (!data.users) {
            return {};
        }

        const users = Object.keys(data.users).map(key => ({
            id: key,
            ...data.users[key],
        }));
        return { users };
    }),
);

export default enhance(Users);
