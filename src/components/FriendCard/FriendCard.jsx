import clsx from 'clsx';
import css from './FriendCard.module.css';

export default function FriendCard({ friend: { avatar, name, isOnline } }) {
  const textClsx = clsx(css.text, isOnline ? css.isOnline : css.isOffline);

  return (
    <div className={css.container}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.text}>{name}</p>
      <p className={textClsx}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}
