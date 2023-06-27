import React from 'react';
import ReactDOM from 'react-dom';

import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './ErrorModal.module.css';

const Backdrop = () => {
  return <div className={styles.backdrop}></div>;
};

const ModalOverlay = (props) => {
  const handleRemoveError = () => {
    props.onError(null);
  };
  return (
    <Card className={styles.modal}>
      <div className={styles.header}>
        <h2>{props.error.title}</h2>
      </div>
      <div className={styles.content}>
        <p>{props.error.message}</p>
      </div>
      <div className={styles.actions}>
        <Button onClick={handleRemoveError}>Okay</Button>
      </div>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onError={props.onError} error={props.error} />,
        document.getElementById('modal-root')
      )}
    </>
  );
};

export default ErrorModal;
