/** @format */

import React, { useEffect } from "react";
import { checkWin } from "../helpers/helpers";

function PopUp({
  correctLetters,
  wrongLetters,
  selectedWord,
  setPlayable,
  playAgain,
}) {
  let finalMessage = "";
  let finalMessageReveal = "";
  let playable = true;

  if (checkWin(correctLetters, wrongLetters, selectedWord) === "win") {
    finalMessage = "Congratulations! You won! 😃";
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) === "lose") {
    finalMessage = "Unfortunately you lost. 😕";
    finalMessageReveal = `...the word was: ${selectedWord}`;
    playable = false;
  }
  useEffect(() => setPlayable(playable));

  return (
    <div
      className="popup-container"
      style={finalMessage !== "" ? { display: "flex" } : {}}
    >
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageReveal}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  );
}

export default PopUp;
