import React from "react";
import "./Button.css";
import GameContext from "../../GameContext";

const Button = (props) => (
  <GameContext.Consumer>
    {({ playing, startGame }) => (
      <button onClick={props.startGame}>
        {props.playing ? "reset" : "start"}
      </button>
    )}
  </GameContext.Consumer>
);

export default Button;
