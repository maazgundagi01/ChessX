import { useDispatch, useSelector } from "react-redux";
import { boardFlip, move } from "../redux/boardSlice";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";
import { loadPieces } from "../chessBoard/chessBoard";

function Board() {
  const dispatch = useDispatch();
  const flip = useSelector((state: RootState) => state.board.value[0]?.flip ?? false);
  const position = useSelector((state: RootState) => state.board.value[0]?.position ?? []);

  const handleFlip = () => {
    console.log("Flipping Board. Current state:", flip);
    dispatch(boardFlip({ id: "board1", flip: !flip }));
  };

  const displayedBoard = flip ? position.slice().reverse().map((row) => row.slice().reverse()) : position;
  
  useEffect(() => {loadPieces(position, flip)},[flip])

  const [pick, setPick] = useState<[string, string | null] | null>(null);
const [drop, setDrop] = useState<[string, string | null] | null>(null);

const handlePick = (thesquare: [string, string | null]) => {
  if (pick === null) {
    setPick(thesquare);
  } else {
      if(thesquare[0] !== pick[0]) {
      setDrop(thesquare);
    }
  } 
};

useEffect(() => {
  if (pick) {
    console.log(`pick from: ${pick}`);
  }
}, [pick]);

useEffect(() => {
  if (drop) {
    console.log(`drop to: ${drop}`);
    setPick(null); // Reset pick after dropping
  }
  dispatch(move({ piece: pick ? pick[1] : '', to: drop ? drop[0] : '' }))
}, [drop]);

useEffect(()=>{
  loadPieces(position, flip)
},[position])


  return (
    <div className="flex flex-col w-full">
      <div className="grid grid-cols-8 w-full aspect-square rounded-lg overflow-hidden ">
        {displayedBoard.flat().map((square, index) => (
          <button
            key={index}
            id={square.name}
            onClick={() => {handlePick([`${square.name}`, `${square.piece}`])}}
            className={`flex items-center justify-center text-sm aspect-square p-2  ${
              (index % 2 === Math.floor(index / 8) % 2) ? "bg-[#f3ffe8]" : "bg-[#3c9f3a]"
            }`}
          >
          </button>
        ))}
      </div>
      <button onClick={handleFlip} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 cursor-pointer">
        Flip Board
      </button>
    </div>
  );
}

export default Board;