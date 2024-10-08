

import { useEffect, useRef, useState } from "react";
import {MdOutlineGamepad} from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";
import { GiPadlock, GiPerson } from 'react-icons/gi';
import { IoPerson } from "react-icons/io5";
import { useAuth } from "../../ic/use-auth-client";

export default function GridRivalsHome() {
  const {login,logout,isAuthenticated,BackendActor,principal}=useAuth();
  return (
    <main className="w-full min-h-screen bg-[rgb(41,41,41)] container mx-auto px-5  p-24 py-5   flex flex-col  items-center justify-center  space-y-3" style={{
      background:"url(/static/scenes/gr.png)",
      backgroundSize:"cover"
    }}>   
    {/* Game Name */}
    <div className="text-center w-full my-5 text-8xl text-red-600 bg-black p-2 backdrop-blur-sm bg-opacity-10 rounded-full">
      Grid Rivals
    </div>
    
    {/* Nav */}
<div className=" flex gap-2 ">
  {/* Connect wallet */}

    {/* Settings  */}
    <div className='font-semibold cursor-pointer text-4xl flex gap-2 text-white backdrop-blur-lg bg-[rgb(66,66,66)] transition-all ease-in-out bg-opacity-50 p-5 rounded-full '>
           <span><IoPerson /></span>    {principal && principal.toText().slice(0, 5)}...{principal && principal.toText().slice(-3)}
            </div>
</div>
    
    <div className="flex gap-5 items-center w-full  justify-between">
 


      </div>

    {/* Game Options */}
    <div className={"grid  xl:grid-cols-2 gap-5"}>   
      <Link  className="bg-[rgb(66,66,66)] hover:text-[rgb(66,66,66)] hover:bg-white text-5xl backdrop-blur-lg bg-opacity-80 p-5 h-56 px-8 py-1 rounded-lg flex flex-col items-center gap-3 justify-center w-96 text-center border ">Arcade <GiPadlock /></Link>
   <Link  className="bg-[rgb(66,66,66)] transition-all ease-in-out hover:text-[rgb(66,66,66)] hover:bg-white text-5xl backdrop-blur-lg bg-opacity-80 p-5 h-56 px-8 py-1 rounded-lg flex flex-col gap-3 items-center justify-center w-96 text-center border ">Play with <br /> a friend <GiPadlock /></Link>
   <Link  className="bg-[rgb(66,66,66)] transition-all ease-in-out hover:text-[rgb(66,66,66)] hover:bg-white text-5xl backdrop-blur-lg bg-opacity-80 p-5 h-56 px-8 py-1 rounded-lg flex flex-col items-center justify-center gap-3 w-96 text-center border ">League <GiPadlock /></Link>
   <Link to={"/games/grid-rivals/training"} className="bg-[rgb(66,66,66)] transition-all ease-in-out hover:text-[rgb(66,66,66)] hover:bg-white text-5xl backdrop-blur-lg bg-opacity-80 p-5 h-56 px-8 py-1 rounded-lg flex items-center justify-center w-96 text-center border ">Training</Link>

    </div>

    </main>
 
  );
}
