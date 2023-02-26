import React, { useState, useEffect } from "react";
import Head from "next/head";
import HighScore from "./components/HighScore";
import NavigationMenu from "./components/NavigationMenu";
function HighScorePage() {
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    // Fetch high scores from API or JSON file
    const scores = [
      { id: 1, name: "Elia", money: 100, roundsPlayed: 10 },
      { id: 2, name: "Janic", money: 110, roundsPlayed: 5 },
    ];
    setHighScores(scores);
  }, []);

  return (
    <div>
      <Head>
        <title>High Scores</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header>
            <NavigationMenu></NavigationMenu>
        </header>
        <div>
          <HighScore scores={highScores} />
        </div>
      </main>
    </div>
  );
}

export default HighScorePage;
