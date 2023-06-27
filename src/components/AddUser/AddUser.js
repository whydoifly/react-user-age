import React, { useState } from 'react';

import styles from './AddUser.module.css';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../ErrorModal/ErrorModal';
import Wrapper from '../Helpers/Wrapper';

const initialUserState = {
  username: '',
  age: '',
};

const AddUser = (props) => {
  const [user, setUser] = useState(initialUserState);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setUser((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  const handleError = (error) => {
    setError(error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.username.trim().length === 0 || user.age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    } else if (+user.age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }

    props.onUserAdd(user);
    setUser(initialUserState);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal error={error} onError={(error) => handleError(error)} />
      )}
      <Card className={styles.input}>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              id='username'
              onChange={handleChange}
              value={user.username}
            />
          </div>
          <div>
            <label htmlFor='age'>Age (Years)</label>
            <input
              type='number'
              id='age'
              onChange={handleChange}
              value={user.age}
            />
          </div>
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
