import Board from "../components/Board";
import { useDispatch, useSelector } from "react-redux";
import { boardFlip } from "../redux/boardSlice";
import { RootState } from "../redux/store";
import { squareMap } from "../chessBoard/chessBoard";

export default function Home() {
  const dispatch = useDispatch();
 const flip = useSelector((state: RootState) => state.board.value[0]?.flip ?? false);
const handleFlip = () => {
  console.log("Flipping Board. Current state:", flip);
  dispatch(boardFlip({ id: "board1", flip: !flip }));
};
const displayedBoard = flip
? squareMap.slice().reverse().map((row) => row.slice().reverse())
: squareMap;

return (
    <>
      <main className="pt-16 z-50"> {/* Set main to full viewport height */}
        <div className="mx-auto z-50 max-w-7xl px-4 py-6 sm:px-6 lg:px-8 ">
          {/* main layout */}
          <section className="flex flex-col md:flex-row flex-grow space-y-4 md:space-y-0 md:space-x-4">
            
            {/* Section left */}
            <div className="md:w-2/3 flex-grow">
              <div className="p-2">
                <Board displayedBoard={displayedBoard}/>
              </div>
            </div>

            {/* Side-bar (30% width) */}
            <div className="   p-4 md:w-1/3 flex-grow">
              <div className="rounded-lg h-full w-full">  
              <button
                onClick={() => handleFlip()}
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 cursor-pointer"
              >
                Flip Board
              </button>
                
                
                </div> {/* Placeholder for comments */}
            </div>
            {/* Analysis Section (60% width) */}
            
          </section>
        </div>
        
      </main>
      <div className="z-0" >
            <ul className="circles z-0">
                  <li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li>
            </ul>
        </div >
    </>
  );
}