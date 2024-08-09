import FriendCard from '../FriendCard/FriendCard';
import css from './FriendList.module.css';
export default function FriendList({ friends }) {
  return (
    <ul className={css.container}>
      {friends.map(item => (
        <li className={css.card} key={item.id}>
          <FriendCard friend={item} />
        </li>
      ))}
    </ul>
  );
}
