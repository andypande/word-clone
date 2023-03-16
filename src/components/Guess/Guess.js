import React from "react";
import { checkGuess } from "../../game-helpers"
import { range } from "../../utils"

function Guess({guess = '', answer}) {
  const guessResults = checkGuess(guess, answer)
  const currGuess = guess.split('')
  return (<p className="guess">
    {range(5).map((num) => (
      <span key={num} className={`cell ${guessResults ? guessResults[num]['status'] : ''}`}>
        {currGuess ? currGuess[num] : undefined}
      </span>
    ))}
  </p>);
}

export default Guess;
