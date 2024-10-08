"use client"
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {MdOutlineGamepad} from "react-icons/md";


export default function Home() {
 
  return (
    <main className="w-full min-h-screen bg-[rgb(41,41,41)] container mx-auto px-5  p-24 py-5   flex flex-col  items-center justify-center  space-y-3" style={{
      background:"url(/static/bg.jpg)",
      backgroundSize:"cover"
    }}>   
    {/* Create Room */}
    <div className={" backdrop-blur-lg bg-[rgb(66,66,66)] w-[30rem] bg-opacity-90 border rounded-lg flex flex-col gap-5 items-center justify-center p-12 px-16 "}>  
        <div className="text-3xl font-semibold">Join Game</div>
        <div className="flex items-center justify-center text-lg w-full rounded-full overflow-hidden">
        <input type="text" className="bg-white text-black font-semibold p-3 px-5" />
        <div className="bg-indigo-500 text-white p-3 px-5 cursor-pointer">Enter</div>
        </div>
        {/* Text */}
        <div className="py-2 tetx-lg">
            * You will be connected on code confirmation.
        </div>
        {/* To Update Routing */}
      <Link href={"/PlayWithFriend/"} className=" text-lg bg-indigo-500  p-3 px-8" >Go back</Link>
    </div>
    </main>
 
  );
}