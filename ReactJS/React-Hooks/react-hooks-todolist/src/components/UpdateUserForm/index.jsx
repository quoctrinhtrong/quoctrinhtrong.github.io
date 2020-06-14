import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

UpdateUserForm.propTypes = {
    editUser: PropTypes.func,
    setEditing: PropTypes.func,
    currentUser: PropTypes.object,
};

function UpdateUserForm(props) {
    const [user, setUser] = useState(props.currentUser);

    useEffect(()=> {
        setUser(props.currentUser);
    }, [props.currentUser])

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
            props.editUser(user);
        }
    }

    return (
        <form>
            <label>Name</label>
            <input className="u-full-width" type="text" name='name' value={user.name} onChange={handleChange}/>
            <label>User Name</label>
            <input className="u-full-width" type="text" name='username' value={user.username} onChange={handleChange}/>
            <button className="button-primary" type='submit' onClick={onSubmit}>Edit User</button>
            <button type='button' onClick={()=>props.setEditing(false)}>Cancel</button>
        </form>
    );
}

export default UpdateUserForm;