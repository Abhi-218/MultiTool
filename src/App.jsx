import React, { useState } from "react" 
import Counter from "./componant/counter"
import Bgchanger from "./componant/bgchanger"
import { Outlet } from "react-router-dom"
import Navbar from "./componant/navbar"
function App() {
       
  const [bgchange,setBgchnage]=useState('#94a3b8')

  return (
    <>
    <div className="bg-slate-400 min-h-[100vh] min-w-[500px] duration-500 flex flex-col items-center gap-20" style={{background:bgchange}}>
    <Navbar/>
    <Outlet/>
    <Bgchanger Setbgchange={setBgchnage}/>   
    </div>
    </>
  )
}

export default App
