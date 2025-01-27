import Board from "../components/Board";

export default function Home() {
  
return (
    <>
      <main className="pt-16 z-50"> {/* Set main to full viewport height */}
        <div className="mx-auto z-50 max-w-6xl px-4 py-6 sm:px-6 lg:px-8 ">
          {/* main layout */}
          <section className="flex flex-col md:flex-row flex-grow space-y-4 md:space-y-0 md:space-x-4">
            
            {/* Section left */}
            <div className="md:w-2/3 flex-grow">
              <div className="p-2">
                <Board/>
              </div>
            </div>

            {/* Side-bar (30% width) */}
            <div className="   p-4 md:w-1/3 flex-grow">
              <div className="rounded-lg h-full w-full">  
              
                
                
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