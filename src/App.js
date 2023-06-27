import React, { useState } from 'react';
import AddUser from './components/AddUser/AddUser';
import UsersList from './components/UsersList/UsersList';
import ErrorModal from './components/ErrorModal/ErrorModal';

function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const handleUserAdd = (user) => {
    setUsers((prevState) => {
      return [...prevState, user];
    });
  };

  const handleError = (error) => {
    setError(error);
  };
  return (
    <div>
      <AddUser
        onUserAdd={handleUserAdd}
        onError={(error) => handleError(error)}
      />
      {users.length > 0 && <UsersList users={users} />} 
      {error && (
        <ErrorModal error={error} onError={(error) => handleError(error)} />
      )}
    </div>
  );
}

export default App;
