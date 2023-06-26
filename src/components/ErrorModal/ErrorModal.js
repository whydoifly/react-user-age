import Button from '../UI/Button';
import styles from './ErrorModal.module.css';

const ErrorModal = (props) => {
  const handleRemoveError = () => {
    props.onError(null);
  };
  return (
    <>
      <div className={styles.backdrop}></div>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>{props.error.title}</h2>
        </div>
        <div className={styles.content}>
          <p>{props.error.message}</p>
        </div>
        <div className={styles.actions}>
          <Button onClick={handleRemoveError}>Okay</Button>
        </div>
      </div>
    </>
  );
};

export default ErrorModal;
