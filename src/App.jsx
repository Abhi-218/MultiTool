import  { useState } from "react";
import Bgchanger from "./componant/bgchanger";
import { Outlet } from "react-router-dom";
import Navbar from "./componant/navbar";
function App() {
  const [bgchange, setBgchnage] = useState("#94a3b8");
        // useAdSense();
  return (
    <>
      <div
        className="bg-slate-400 min-h-screen w-full duration-500 flex flex-col items-center gap-10  "
        style={{ background: bgchange }}
      >
        <Navbar />
        <div className="w-full max-w-screen-xl ">
          <Outlet />
        </div>
        <Bgchanger Setbgchange={setBgchnage} />
      </div>
    </>
  );
}

export default App;
