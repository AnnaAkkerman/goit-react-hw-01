import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.profileCard}>
        <img className={css.profileImage} src={image} alt="User avatar" />
        <p className={css.profileName}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.profileStats}>
        <li className={css.profileStatsItem}>
          <span>Followers</span>
          <span className={css.profileStatsItemData}>{stats.followers}</span>
        </li>
        <li className={css.profileStatsItem}>
          <span>Views</span>
          <span className={css.profileStatsItemData}>{stats.views}</span>
        </li>
        <li className={css.profileStatsItem}>
          <span>Likes</span>
          <span className={css.profileStatsItemData}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
