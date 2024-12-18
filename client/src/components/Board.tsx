


function Board({ displayedBoard }: { displayedBoard: any[][] }) {
  return (
    <div className="flex flex-col w-full">
      <div className="grid grid-cols-8 w-full aspect-square border-2 border-black">
        {displayedBoard.flat().map((square: any, index: number) => (
          <div
            key={index}
            id={square}
            className={`flex items-center justify-center text-sm border border-black ${
              (index % 2 === Math.floor(index / 8) % 2) ? "bg-[#fff]" : "bg-[#0b3531]"
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

