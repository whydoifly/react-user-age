import React, { useState } from 'react';
import AddUser from './components/AddUser/AddUser';
import UsersList from './components/UsersList/UsersList';
import Wrapper from './components/Helpers/Wrapper';

function App() {
  const [users, setUsers] = useState([]);

  const handleUserAdd = (user) => {
    setUsers((prevState) => {
      return [...prevState, user];
    });
  };

  return (
    <Wrapper>
      <AddUser onUserAdd={handleUserAdd} />
      {users.length > 0 && <UsersList users={users} />}
    </Wrapper>
  );
}

export default App;
