export default function Options({ totalFeedback, values, setValues }) {
  const updateFeedback = feedbackType => {
    if (feedbackType == 'good') {
      setValues({
        ...values,
        good: values.good + 1,
      });
    } else if (feedbackType == 'neutral') {
      setValues({
        ...values,
        neutral: values.neutral + 1,
      });
    } else {
      setValues({
        ...values,
        bad: values.bad + 1,
      });
    }
  };
  const resetFeedback = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  return (
    <div>
      <button onClick={() => updateFeedback('good')}>Good</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button onClick={() => updateFeedback('bad')}>Bad</button>
      {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
}
