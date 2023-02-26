import React, { useState, useEffect } from "react";
import Head from "next/head";
import HighScore from "./components/HighScore";
import NavigationMenu from "./components/NavigationMenu";
function HighScorePage() {
  const [highScores, setHighScores] = useState([]);


  useEffect(() => {
    //Get Data from db
    async function fetchScores() {
      const res = await fetch("/api/score");
      const scoresData = await res.json();
      setHighScores(scoresData);
    }
    fetchScores();
  });
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
