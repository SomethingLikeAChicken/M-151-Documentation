import React, { useState, useEffect } from 'react';

function HighScore({ scores }) {
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    setHighScores(scores);
  }, [scores]);

  return (
    <div className='wrapper'>
      <h1 className="title">High Scores</h1>
      <table className='scores'>
        <thead>
          <tr>
            <th className='rank'>Rank</th>
            <th className='rank'>Name</th>
            <th className='rank'>Money</th>
            <th className='rank'>Rounds Played</th>
          </tr>
        </thead>
        <tbody>
          {highScores.map((score, index) => (
            <tr key={score.id}>
              <td>{index + 1}</td>
              <td>{score.name}</td>
              <td>{score.money}</td>
              <td>{score.roundsPlayed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HighScore;