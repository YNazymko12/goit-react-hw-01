import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p
        className={
          isOnline ? styles.status__isOnline : styles.status__isOffline
        }
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </li>
  );
};

export default FriendListItem;
