import Nav from "./components/Nav"
import Router from "./Router"
// import { useState, useEffect } from "react";


function App() {

  return (
    <div className=" bg-slate-950 min-h-svh">
      <Nav/>
      <div className=" bg-black min-h-svh">
            <Router/>
      </div>
    </div>
  )
}

export default App
