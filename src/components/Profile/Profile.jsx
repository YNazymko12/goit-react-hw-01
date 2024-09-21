import styles from './Profile.module.css';

const Profile = props => {
  const { name, tag, location, image, stats } = props;
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img className={styles.avatar} src={image} alt="User avatar" />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.stats}>
        <li className={styles.item}>
          <span>Followers</span>
          <span className={styles.likes}>{stats.followers}</span>
        </li>
        <li className={styles.item}>
          <span>Views</span>
          <span className={styles.likes}>{stats.views}</span>
        </li>
        <li className={styles.item}>
          <span>Likes</span>
          <span className={styles.likes}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
