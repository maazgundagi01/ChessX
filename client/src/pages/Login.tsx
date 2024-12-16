import { Link } from "react-router-dom"

export default function Login() {
  return (
    <div className=" h-svh flex flex-col justify-center">
        <div className="z-50 mx-auto max-w-2xl py-20 sm:py-20 lg:py-20">
          
          <div className="text-center bg-black/10 backdrop-blur-3xl  p-16 ">
            <h1 className="hero-h1 text-balance text-5xl tracking-tight text-white sm:text-7xl">
              Chess X
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">
              Chess is a two-player strategy board game played on a square board with 64 squares. The objective is to checkmate the opponent’s king, which means the king is under attack and cannot escape capture. 
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/"
                className="rounded-md  hover:bg-white hover:border-white px-3.5 py-2.5 text-sm font-semibold hover:text-black shadow-sm text-white border-indigo-400 border-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Play Now {'>'}
              </Link>
              {/* <a href="https://github.com/maazgundagi01/ButterbeerAnalyzer.git" className="text-sm font-semibold leading-6 text-gray-100">
                Git <span aria-hidden="true">→</span>
              </a> */}
            </div>
          </div>
        </div>
        <div className="background z-0" >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>




        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
         
        </div>
        

      </div>
      
  )
}
