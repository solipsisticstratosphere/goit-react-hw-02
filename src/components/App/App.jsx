import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';
import userData from '../../userData.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import { useState, useEffect } from 'react';
import Options from '../Options/Options';
import FeedBack from '../FeedBack/FeedBack';
import Notification from '../Notification/Notification';
export default function App() {
  const [values, setValues] = useState({
    good: Number(window.localStorage.getItem('saved-good')) || 0,
    neutral: Number(window.localStorage.getItem('saved-neutral')) || 0,
    bad: Number(window.localStorage.getItem('saved-bad')) || 0,
  });

  useEffect(() => {
    window.localStorage.setItem('saved-good', values.good);
    window.localStorage.setItem('saved-neutral', values.neutral);
    window.localStorage.setItem('saved-bad', values.bad);
  }, [values]);

  const totalFeedback = values.good + values.neutral + values.bad;
  const positiveFeedback =
    totalFeedback > 0 ? Math.round((values.good / totalFeedback) * 100) : 0;

  const updateFeedback = feedbackType => {
    setValues(prevValues => ({
      ...prevValues,
      [feedbackType]: prevValues[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  return (
    <>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options
        totalFeedback={totalFeedback}
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback === 0 && <Notification />}
      {totalFeedback > 0 && (
        <FeedBack
          totalFeedback={totalFeedback}
          values={values}
          positiveFeedback={positiveFeedback}
        />
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
