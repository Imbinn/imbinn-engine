import React from 'react';
import PropTypes from 'prop-types';
import { firebaseConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';

import Users from './layout';

const UsersContainer = props => <Users {...props} />;

UsersContainer.propTypes = {
    gameKey: PropTypes.string.isRequired,
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

export default enhance(UsersContainer);
