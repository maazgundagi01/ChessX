import { squareMap } from "../chessBoard/chessBoard";
import { useState } from "react";
function Board() {
  const [flip, setFlip] = useState(false);

  // Flip the board: reverse rows AND reverse squares within each row
  const displayedBoard = flip
    ? [...squareMap].map((row) => [...row].reverse()).reverse()
    : squareMap;

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => setFlip(!flip)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Flip Board
      </button>
      <div className="grid grid-cols-8 gap-0 min-w-96 min-h-96 border-2 border-black">
        {displayedBoard.flat().map((square, index) => (
          <div
            key={index}
            className={`flex items-center justify-center text-sm border border-black ${
              (index % 2 === Math.floor(index / 8) % 2) ? "bg-[#f0d9b5]" : "bg-[#b58863]"
            }`}
          >
            {square}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Board;
