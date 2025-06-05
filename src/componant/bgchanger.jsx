import React from 'react'

const Bgchanger = ({Setbgchange}) => {
    
  return (
        <div className="h-16 z-50 py-2 gap-3 rounded-full fixed bottom-4 mx-5 inset-x-0 px-5 flex justify-between bg-slate-700 overflow-scroll scroll-smooth no-scrollbar" id='bgscroll'>
            <button className="hover:scale-105 border-white border-2 bg-red-600 rounded-full font-bold px-5" onClick={()=>{Setbgchange('red')}}>red</button>
            <button onClick={()=>{Setbgchange('#16a34a')}} className="hover:scale-105 border-white border-2 bg-green-600 rounded-full  font-bold px-5">green</button>
            <button onClick={()=>{Setbgchange('#ca8a04')}} className="hover:scale-105 border-white border-2  bg-yellow-600 rounded-full font-bold  px-5">yellow</button>
            <button onClick={()=>{Setbgchange('#db2777')}} className="hover:scale-105 border-white border-2  bg-pink-600 rounded-full font-bold  px-5">pink</button>
            <button onClick={()=>{Setbgchange('#2563eb')}} className="hover:scale-105 border-white border-2  bg-blue-600 rounded-full font-bold  px-5">blue</button>
            <button onClick={()=>{Setbgchange('#4b5563')}} className="hover:scale-105 border-white border-2  bg-gray-600 rounded-full font-bold  px-5">gray</button>
            <button onClick={()=>{Setbgchange('#84cc16')}} className="hover:scale-105 border-white border-2  bg-lime-500 rounded-full font-bold  px-5">lime</button>
            <button onClick={()=>{Setbgchange('#7c3aed')}} className="hover:scale-105 border-white border-2  bg-violet-600 rounded-full font-bold  px-5">violet</button>
            <button onClick={()=>{Setbgchange('#6b21a8')}} className="hover:scale-105 border-white border-2  bg-purple-800 rounded-full font-bold  px-5">purple</button>
            <button onClick={()=>{Setbgchange('linear-gradient(#e66465, #9198e5)')}} className="hover:scale-105 bg-gradient-to-r border-white border-2 from-purple-500 to-pink-500 rounded-full font-bold  px-5">Liner</button>
            <button onClick={()=>{Setbgchange('linear-gradient(#9198e5, #e66465)')}} className="hover:scale-105 bg-gradient-to-r border-white border-2 from-pink-500 to-purple-500 rounded-full font-bold  px-5">RLiner</button>
            <button onClick={()=>{Setbgchange('linear-gradient(to left,red,blue)')}} className="hover:scale-105 bg-gradient-to-r border-white border-2 from-red-700 to-blue-700 rounded-full font-bold  px-5">Liner</button>
            <button onClick={()=>{Setbgchange('linear-gradient(to right,red,blue)')}} className="hover:scale-105 bg-gradient-to-r from-blue-700 to-red-700 border-white border-2 rounded-full font-bold  px-5">RLiner</button>
            <button onClick={()=>{Setbgchange('#94a3b8')}} className="hover:scale-105 border-white border-2 bg-slate-400 rounded-full font-bold  px-5">Reset</button>
        </div>
  )
}

export default Bgchanger
