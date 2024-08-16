import { useEffect, useState } from 'react';

export default function Options({ totalFeedback, setValues }) {
  const [localValues, setLocalValues] = useState(() => {
    const savedGood = window.localStorage.getItem('saved-good');
    const savedNeutral = window.localStorage.getItem('saved-neutral');
    const savedBad = window.localStorage.getItem('saved-bad');

    return {
      good: savedGood !== null ? Number(savedGood) : 0,
      neutral: savedNeutral !== null ? Number(savedNeutral) : 0,
      bad: savedBad !== null ? Number(savedBad) : 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem('saved-good', localValues.good);
    window.localStorage.setItem('saved-neutral', localValues.neutral);
    window.localStorage.setItem('saved-bad', localValues.bad);
  }, [localValues]);

  useEffect(() => {
    setValues(localValues);
  }, [localValues, setValues]);

  const updateFeedback = feedbackType => {
    setLocalValues(prevValues => ({
      ...prevValues,
      [feedbackType]: prevValues[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setLocalValues({
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
