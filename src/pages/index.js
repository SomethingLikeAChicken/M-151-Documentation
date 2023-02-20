import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Word from "./../js/word";
import { useState, useEffect, useRef } from "react";

const inter = Inter({ subsets: ["latin"] });
const wrongLetters = ["a", "b", "c"];
const inputWord = "";
let heart = 3;
const words = Word();

export default function Home() {
  const [wordToGuess, setWordToGuess] = useState("");
  const [hint, setHint] = useState("");
  let typingInput;

  useEffect(() => {
    console.log(wordToGuess);
  }, [wordToGuess]);

 useEffect(() => {
  randomWord();
  typingInput = document.querySelector(".typing-input");

  function initGame(e) {
    let key = e.target.value;
    if (key.match(/^[A-Za-z]+$/)) {
      console.log(wordToGuess);
      console.log(key);
      if (wordToGuess.includes(key)) {
        console.log("letter found!");
      } else {
        console.log("wrong letter!");
      }
    }
  }

  document.addEventListener("keydown", () => typingInput.focus());
  document.addEventListener("input", initGame);

}, []);

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
            
            <div className="inputs">
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
              <p className="wrong-letters">Wrong letters: {wrongLetters}</p>
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
