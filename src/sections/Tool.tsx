import down from "../assets/down.svg";
import term from "../assets/term.svg";
import char from "../assets/char.svg";
import typing from "../assets/typing.svg";

import { useCounter } from "../hooks/useCounter";
import { useState } from "react";

export default function Tool() {
  const [text, setText] = useState<string>("");
  const { countWords, countChars, handleText } = useCounter(text, setText);

  return (
    <div className="tool-section">
      <div className="tool-container">
        <div className="tool-left">
          <div className="tool-left-title">
            <h2 className="tool-left-title__text">
              Escribe o pega tu texto aquí abajo
            </h2>
            <img className="tool-left-title__icon" src={typing} alt="typing" />
            <img className="tool-left-title__icon" src={down} alt="down" />
          </div>
          <textarea
            className="tool-left__textarea"
            cols={30}
            rows={10}
            onChange={(e) => handleText(e)}
          ></textarea>
        </div>
        <div className="tool-right">
          <ul className="tool-list">
            <li className="tool-list__item">
              <img className="tool-item__icon" src={char} alt="char" />
              <h1 className="tool-item__num">{countChars}</h1>
              <h2 className="tool-item__text">Letras</h2>
            </li>
            <li className="tool-list__item">
              <img className="tool-item__icon" src={term} alt="term" />
              <h1 className="tool-item__num">{countWords}</h1>
              <h2 className="tool-item__text">Palabras</h2>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
