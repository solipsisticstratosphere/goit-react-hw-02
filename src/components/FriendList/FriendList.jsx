import FriendCard from '../FriendCard/FriendCard';

export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(item => (
        <li key={item.id}>
          <FriendCard friend={item} />
        </li>
      ))}
    </ul>
  );
}
