import clsx from 'clsx';
import css from './FriendCard.module.css';

export default function FriendCard({ friend: { avatar, name, isOnline } }) {
  const textClsx = clsx(isOnline ? css.isOnline : css.isOffline);

  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={textClsx}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}
