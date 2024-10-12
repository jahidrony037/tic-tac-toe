import { useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";

import i18n from "i18next";

import SquareButton from "./components/SquareButton";
import { calculateWinner } from "./lib/calculateWinner";

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const { t } = useTranslation();

  const currentPlayer = xIsNext ? "X" : "O";
  const statusMessage = `${t("next")}: ${currentPlayer}`;

  useEffect(() => {
    // console.log(t('title'))

    document.title = t("title");
  }, [t]);

  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };

  const handleRestart = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `${t("winner")}: ${winner}`;
  } else if (squares.every((square) => square !== null)) {
    status = t("draw");
  } else {
    status = statusMessage;
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-5xl font-bold mb-8 text-purple-800 font-serif">
          <Trans i18nKey="title" />
        </h1>
        <div className="mb-4">
          <select
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            value={i18n.language}
            className="p-2 border-2 border-purple-300 rounded bg-white text-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="en">English</option>
            <option value="bn">বাংলা</option>
          </select>
        </div>
        <div className="mb-4 text-2xl font-semibold text-purple-700">
          {status}
        </div>
        <div className="grid grid-cols-3 gap-2 mb-4 bg-[#0000]">
          {squares.map((square, i) => (
            <SquareButton
              key={i}
              value={square}
              onSquareClick={() => handleClick(i)}
            />
          ))}
        </div>
        <button
          onClick={handleRestart}
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 font-bold text-lg shadow-lg"
        >
          {t("restart")}
        </button>
      </div>
    </>
  );
};

export default TicTacToe;
