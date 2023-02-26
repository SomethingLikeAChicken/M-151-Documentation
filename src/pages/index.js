import Head from "next/head";
import { Inter } from "@next/font/google";
import { useState, useEffect, useRef } from "react";
import MoneyButton from './components/Wheel';
import NavigationMenu from "./components/NavigationMenu";

const inter = Inter({ subsets: ["latin"] });

// Initializing variables for the word input and the list of words
const inputWord = "";

export default function Home() {
  // Defining state variables using the useState hook
  const [wordToGuess, setWordToGuess] = useState("");
  const [hint, setHint] = useState("");
  const [heart, setHeart] = useState(3);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [prevWord, setPrevWord] = useState("");
  const [words, setWords] = useState([]);
  const [money, setMoney] = useState(0);
  const [totalMoney, setTotalMoney] = useState(0);
  const [roundsPlayed, setRoundsPlayed] = useState(0);

  // Creating a reference to the inputs div
  const inputsRef = useRef(null);
  let typingInput;

  // Effect that listens for changes to the wordToGuess state variable
  useEffect(() => {
    const typingInput = document.querySelector(".typing-input");

    const guessedLetters = new Set();

    //Checking if Input is in WordToGuess
    function initGame(e) {
      const key = e.target.value.toLowerCase();
      if(totalMoney >= 10 && heart >= 0){
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
              let win = Math.floor(Math.random() * 100) + 10;
              alert("Wow you guessed it right!!, you've won: " + win);
              setRoundsPlayed(roundsPlayed + 1);
              //Add Money to the account if guessed correctly
              setTotalMoney(
                (totalMoney) => totalMoney + win
              );
            }
          } else {
            typingInput.value = "";
            console.log("wrong letter!");
            setHeart((prevHeart) => prevHeart - 1);
            setWrongLetters((prevWrongLetters) => [...prevWrongLetters, key]);
            setTotalMoney((totalMoney) => totalMoney - Math.floor(Math.random() * 10) + 1);
          }
        }
      }else{
        alert("It seems like you dont have enough Money/Hearts to bet. Go use the Spin and Win Button to get you started...");
      }
      
    }

    typingInput.addEventListener("input", initGame);
    return () => typingInput.removeEventListener("input", initGame);
  }, [wordToGuess]);

  // Effect that listens for changes to the heart state variable
  useEffect(() => {
    if (heart === 0) {
      console.log("game over!");
    }
  }, [heart]);
  useEffect(() => {
    async function fetchWords() {
      const res = await fetch("/api/hello");
      const wordsData = await res.json();
      setWords(wordsData);
    }
    fetchWords();
  });

  // RandomWord function, that checks if a word comes twice in a row
  function randomWord() {
    setHeart(3);
    let newWord;
    do {
      newWord = words[Math.floor(Math.random() * words.length)];
    } while (newWord.word === prevWord);

    setWordToGuess(newWord.word);
    setHint(newWord.hint);
    setPrevWord(newWord.word);
  }
  const updateTotalMoney = (value) => {
    setTotalMoney((prevTotalMoney) => prevTotalMoney + value);
  };
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
      <header>
        <NavigationMenu></NavigationMenu>
      </header>
      <main className="flex align-middle justify-center min-h-10">
        <div className="wrapper">
          <h1 className="font-thin"> Guess the Word</h1>
          <div className="content">
            <input type="text" className="typing-input" maxLength="1"></input>
            <div className="inputs" ref={inputsRef}>
              {wordToGuess &&
                wordToGuess
                  .split("")
                  .map((letter, index) => (
                    <input
                      key={`${wordToGuess}-${index}`}
                      type="text"
                      disabled
                    />
                  ))}
            </div>
            <div className="details">
              <p className="hint">
                Hint: <span>{hint}</span>
              </p>
              <p className="guesses-left">Hearts: {heart}</p>
              <p className="wrong-letters">
                Wrong letters: {wrongLetters.join(", ")}
              </p>
              <p className="rounds-played">
                Rounds Played: {roundsPlayed}
              </p>
              <p className="money">Money: {totalMoney}</p>
            </div>
            <button className="reset-btn" onClick={randomWord}>
              New Game?
            </button>
            <div className="Wheel">
              <MoneyButton updateTotalMoney={updateTotalMoney} totalMoney={totalMoney}></MoneyButton>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
