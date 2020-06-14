import React, { useState } from "react";
import "./App.css";
import userList from "./data.js";
import UserTable from "./components/UserTable";
import AddUserForm from "./components/AddUserForm";
import UpdateUserForm from "./components/UpdateUserForm";

function App() {
  const [users, setUsers] = useState(userList);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: "",
    username: "",
  });

  const addUser = (user) => {
    user.id = 1;
    let len = users.length;
    if (len > 0) {
      user.id = users[len - 1].id + 1;
    }
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    let index = users.findIndex((user) => user.id === id);
    if (index != -1) {
      let userClone = [...users];
      userClone.splice(index, 1);
      setUsers(userClone);
    }
  };

  const onEdit = (user) => {
    setEditing(true);
    setCurrentUser(user);
  };

  const editUser = (newUser) => {
    setUsers(users.map((user) => (user.id === newUser.id ? newUser : user)));
    setEditing(false);
  };

  return (
    <div className='container'>
      <h1> CRUD React Hooks </h1>
      <div className='row'>
        <div className='five columns'>
          {editing ? (
            <div>
              <h2>Edit User</h2>
              <UpdateUserForm editUser={editUser} currentUser={currentUser} setEditing={setEditing}/>
            </div>
          ) : (
            <div>
              <h2>Add User</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className='seven columns'>
          <h2>Users Table</h2>
          <UserTable users={users} deleteUser={deleteUser} onEdit={onEdit}/>
        </div>
      </div>
    </div>
  );
}

export default App;
