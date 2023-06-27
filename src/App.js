import React, { useState } from 'react';
import AddUser from './components/AddUser/AddUser';
import UsersList from './components/UsersList/UsersList';

function App() {
  const [users, setUsers] = useState([]);

  const handleUserAdd = (user) => {
    setUsers((prevState) => {
      return [...prevState, user];
    });
  };

  return (
    <>
      <AddUser onUserAdd={handleUserAdd} />
      {users.length > 0 && <UsersList users={users} />}
    </>
  );
}

export default App;
