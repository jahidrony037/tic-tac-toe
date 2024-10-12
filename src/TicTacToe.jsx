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
        <h1 className="text-4xl font-bold mb-8">
          <Trans i18nKey="title" />
        </h1>
        <div className="mb-4">
          <select
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            value={i18n.language}
            className="p-2 border rounded"
          >
            <option value="en">English</option>
            <option value="bn">বাংলা</option>
          </select>
        </div>
        <div className="mb-4 text-xl font-semibold">{status}</div>
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
          className=" px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {t("restart")}
        </button>
      </div>
    </>
  );
};

export default TicTacToe;
