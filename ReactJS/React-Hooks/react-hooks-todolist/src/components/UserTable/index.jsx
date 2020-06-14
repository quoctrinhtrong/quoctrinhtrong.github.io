import React from 'react';
import PropTypes from 'prop-types';

UserTable.propTypes = {
    users: PropTypes.array,
    deleteUser: PropTypes.func,
    onEdit: PropTypes.func,
};

UserTable.defaultProps = {
    users: [],
};

function UserTable(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>User Name</th>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.users.length > 0 ? (
                        props.users.map((user, index) => {
                            const {id, name, username} = user;
                            return (
                                <tr key={index}>
                                    <td>{id}</td>
                                    <td>{username}</td>
                                    <td>{name}</td>
                                    <td>
                                        <button onClick={() => props.deleteUser(id)}>Delete</button>
                                        <button onClick={() => props.onEdit(user)}>Edit</button>
                                    </td>
                                </tr>
                            )
                        })
                    ) : (
                        <tr>
                            <td colSpan={4}>No users found</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
}

export default UserTable;