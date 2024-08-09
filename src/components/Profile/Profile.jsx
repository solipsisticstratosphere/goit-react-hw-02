import css from './Profile.module.css';

export default function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.profileWrapper}>
      <div>
        <img className={css.avatar} src={avatar} alt={username} />
        <p className={css.name}>{username}</p>{' '}
        <p className={css.text}>@{tag}</p>{' '}
        <p className={css.text}>{location}</p>
      </div>
      <ul className={css.info}>
        <li className={css.cell}>
          <span>Followers</span>{' '}
          <span className={css.numbers}>{followers}</span>
        </li>
        <li className={css.cell}>
          <span>Views</span> <span className={css.numbers}>{views}</span>
        </li>
        <li className={css.lastCell}>
          <span>Likes</span> <span className={css.numbers}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
