"use client"
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {MdOutlineGamepad} from "react-icons/md";
import {IoReturnUpBack} from "react-icons/io5";


export default function Home() {
 
  return (
    <main className="w-full min-h-screen bg-[rgb(41,41,41)] container mx-auto px-5  p-24 py-5   flex flex-col  items-center justify-center  space-y-3" style={{
      background:"url(/static/bg.jpg)",
      backgroundSize:"cover"
    }}>   
    {/* Icon */}
    <div className="flex items-center justify-center my-5 text-4xl fon-bold text-white backdrop-blur-lg bg-[rgb(66,66,66)] bg-opacity-80 p-5 px-8 rounded-full gap-1" style={{border:"dotted solid 2px"}}>
     
      <div className="text-shadow font-semibold">
      Play with a friend
    </div>
</div>
    {/* Game Options */}
    <div className={"grid grid-cols-2 gap-5"}>   
      <Link href={"/PlayWithFriend/Create"} className="bg-[rgb(66,66,66)] hover:text-[rgb(66,66,66)] hover:bg-white text-5xl backdrop-blur-lg bg-opacity-80 p-5 h-56 px-8 py-1 rounded-lg flex items-center justify-center w-96 text-center border ">Create Game</Link>
   <Link href={"/PlayWithFriend/Join"} className="bg-[rgb(66,66,66)] hover:text-[rgb(66,66,66)] hover:bg-white text-5xl backdrop-blur-lg bg-opacity-80 p-5 h-56 px-8 py-1 rounded-lg flex items-center justify-center w-96 text-center border ">Join Game</Link>
   {/* To Update the router */}
   <Link href={"/"} className="  bg-white text-black text-6xl backdrop-blur-lg bg-opacity-80 p-5 h-56 px-8 py-1 rounded-lg flex items-center justify-center w-96 text-center border font-bold"><IoReturnUpBack/></Link>
    </div>
    </main>
 
  );
}
