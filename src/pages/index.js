import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Word from "./../js/word";
import { useState, useEffect, useRef } from "react";

const inter = Inter({ subsets: ["latin"] });
const inputWord = "";
const words = Word();

export default function Home() {
  const [wordToGuess, setWordToGuess] = useState("");
  const [hint, setHint] = useState("");
  const [heart, setHeart] = useState(3);
  const [wrongLetters, setWrongLetters] = useState([]);
  const inputsRef = useRef(null);
  let typingInput;

  useEffect(() => {
    randomWord();
    const typingInput = document.querySelector(".typing-input");

    const guessedLetters = new Set();

    function initGame(e) {
      const key = e.target.value.toLowerCase();
      if (/^[a-z]$/.test(key)) {
        console.log(key);
        if (wordToGuess.includes(key)) {
          for (let i = 0; i < wordToGuess.length; i++) {
            if (wordToGuess[i] === key) {
              inputsRef.current.querySelectorAll("input")[i].value = key;
            }
          }
          guessedLetters.add(key);
          typingInput.value = "";
          if (guessedLetters.size === new Set(wordToGuess.split("")).size) {
            console.log("you win!");
          }
        } else {
          console.log("wrong letter!");
          setHeart((prevHeart) => prevHeart - 1);
          setWrongLetters((prevWrongLetters) => [...prevWrongLetters, key]);
        }
      }
    }

    typingInput.addEventListener("input", initGame);
    return () => typingInput.removeEventListener("input", initGame);
  }, [wordToGuess]);

  useEffect(() => {
    if (heart === 0) {
      console.log("game over!");
    }
  }, [heart]);

  function randomWord() {
    const ranObj = Math.floor(Math.random() * words.length);
    setWordToGuess(words[ranObj].word);
    setHint(words[ranObj].hint);
    console.log(wordToGuess);
  }
  return (
    <>
      <Head>
        <title>Word Guessing Game</title>
        <meta
          name="description"
          content="This Website is created as an LB for the Module 151"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header></header>
      <main className="flex align-middle justify-center min-h-10">
        <div className="wrapper">
          <h1 className="font-thin"> Guess the Word</h1>
          <div className="content">
            <input type="text" class="typing-input" maxlength="1"></input>

            <div className="inputs" ref={inputsRef}>
              {wordToGuess &&
                wordToGuess
                  .split("")
                  .map((letter, index) => (
                    <input key={index} type="text" disabled />
                  ))}
            </div>
            <div className="details">
              <p className="hint">
                Hint: <span>{hint}</span>
              </p>
              <p className="guesses-left">Remaining Guesses: {heart}</p>
              <p className="wrong-letters">
                Wrong letters: {wrongLetters.join(", ")}
              </p>
            </div>
            <button className="reset-btn" onClick={randomWord}>
              Reset Game
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
