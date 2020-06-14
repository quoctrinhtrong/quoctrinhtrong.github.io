import React, { useState } from 'react';
import PropTypes from 'prop-types';

AddUserForm.propTypes = {
    addUser: PropTypes.func,
};

function AddUserForm(props) {
    const [user, setUser] = useState(
        {
            name:'',
            username:''
        }
    );

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser(
            {
                ...user, 
                [name]: value
            }
        )
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(user.name && user.username) {
            props.addUser(user);
        }
    }

    return (
        <form>
            <label>Name</label>
            <input className="u-full-width" type="text" name='name' value={user.name} onChange={handleChange}/>
            <label>User Name</label>
            <input className="u-full-width" type="text" name='username' value={user.username} onChange={handleChange}/>
            <button className="button-primary" type='submit' onClick={onSubmit}>Add User</button>
        </form>
    );
}

export default AddUserForm;