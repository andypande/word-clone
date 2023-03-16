import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import WordInput from '../WordInput/WordInput';
import GuessResults
 from '../GuessResults/GuessResults';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function HappyBanner({totalGuesses}) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{totalGuesses} guesses</strong>.
      </p>
    </div>
  )
}

function SadBanner() {
  return (
  <div className="sad banner">
    <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
  </div>
  )
}

function Game() {
  const [ guesses, setUserGuesses ] = useState([]);
  const [ wonGame, setWonGame ] = useState(false);
  const [ gameOver, setGameOver ] = useState(false);

  function updateGuesses(guess){
    const gameWon = guess === answer;
    setWonGame(gameWon)
    setGameOver(NUM_OF_GUESSES_ALLOWED === guesses.length + 1)
    setUserGuesses([...guesses, guess])
  }

  return (
  <>
    {wonGame && <HappyBanner totalGuesses={guesses.length} />}
    {gameOver && <SadBanner />}
    <GuessResults 
      guesses={guesses}
      answer={answer}
    />
    <WordInput 
      updateGuesses={updateGuesses}
      gameOver={gameOver || wonGame}
    />
  </>
  );
}

export default Game;
