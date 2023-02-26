import React, { useState, useEffect } from 'react';

function HighScore({ scores }) {
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    setHighScores(scores);
  }, [scores]);

  return (
    <div>
      <h1>High Scores</h1>
      <ul className='scores'>
        {highScores.map((score) => (
          <li key={score.money}>
            {score.id} - {score.name} - {score.money} - {score.roundsPlayed}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HighScore;