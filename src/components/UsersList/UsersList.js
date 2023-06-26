import styles from './UsersList.module.css';

const UsersList = (props) => {
  return (
    <div className={styles.users}>
      <ul>
        {props.users.map((user) => {
            return (
                <li key={user.username + Math.random()}>
                {user.username} ({user.age} years old)
                </li>
            );
        })}
      </ul>
    </div>
  );
};

export default UsersList;
