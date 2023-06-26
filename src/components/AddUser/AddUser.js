import React, { useState } from 'react';

import styles from './AddUser.module.css';
import Button from '../UI/Button';

const AddUser = (props) => {
  const [user, setUser] = useState({
    username: '',
    age: '',
  });

  const handleChange = (e) => {
    setUser((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.username.trim().length === 0 || user.age.trim().length === 0) {
      props.onError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    } else if (+user.age < 1) {
      props.onError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }

    props.onUserAdd(user);
  };
  return (
    <form className={styles.input} onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' onChange={handleChange} />
      </div>
      <div>
        <label htmlFor='age'>Age (Years)</label>
        <input type='number' id='age' onChange={handleChange} />
      </div>
      <Button type='submit'>Add User</Button>
    </form>
  );
};

export default AddUser;
