import React, { useState } from "react";

function WordInput({ updateGuesses, gameOver }) {
  const [ userGuess, setUserGuess ] = useState('')
  function submitGuess(event) {
    event.preventDefault();
    console.log({guess: userGuess})
    setUserGuess('')
    updateGuesses(userGuess)
  }
  return (
    <form 
      onSubmit={submitGuess}
      className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        required
        value={userGuess}
        id="guess-input" 
        type="text"
        disabled={gameOver} 
        minLength={5}
        maxLength={5}
        onChange={(e) => setUserGuess(e.target.value.toUpperCase())}
      />
    </form>
  )
}

export default WordInput;
