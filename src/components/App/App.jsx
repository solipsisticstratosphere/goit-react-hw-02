import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';
import userData from '../../userData.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import { useState } from 'react';
import Options from '../Options/Options';
import FeedBack from '../FeedBack/FeedBack';
import Notification from '../Notification/Notification';
export default function App() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const totalFeedback = values.good + values.neutral + values.bad;
  return (
    <>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options
        totalFeedback={totalFeedback}
        values={values}
        setValues={setValues}
      />
      {totalFeedback === 0 && <Notification />}
      {totalFeedback > 0 && (
        <FeedBack totalFeedback={totalFeedback} values={values} />
      )}
      {/* <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} /> */}
    </>
  );
}
