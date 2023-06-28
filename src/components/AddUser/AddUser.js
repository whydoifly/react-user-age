import React, { useState, useRef } from 'react';

import styles from './AddUser.module.css';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../ErrorModal/ErrorModal';

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState(null);

  const handleError = (error) => {
    setError(error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    } else if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }

    props.onUserAdd({
      username: enteredAge,
      age: enteredName,
    });
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };
  return (
    <>
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
              ref={nameInputRef}
            />
          </div>
          <div>
            <label htmlFor='age'>Age (Years)</label>
            <input
              type='number'
              id='age'
              ref={ageInputRef}
            />
          </div>
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
