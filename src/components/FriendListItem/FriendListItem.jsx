import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img
        className={css.friendListItemIcon}
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p className={css.friendListItemName}>{name}</p>

      {isOnline ? (
        <p className={css.online}>Online</p>
      ) : (
        <p className={css.offline}>Offline</p>
      )}
    </div>
  );
};

export default FriendListItem;
