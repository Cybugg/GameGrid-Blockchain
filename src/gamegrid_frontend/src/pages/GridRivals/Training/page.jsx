
import {  useState } from "react";
import Board from "../../../components/Board";
import DropZone from "../../../components/DropZone";
import GameHeader from "../../../components/GameHeader";
import { IoEnter, IoEnterSharp } from "react-icons/io5";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useAuth } from "../../../ic/use-auth-client";

export default function GridRivalsTraining() {
      const [p1Count, setP1Count] = useState(0);
      const [p2Count, setP2Count] = useState(0);
      const [turn,setTurn] = useState(1);
      const {login,logout,isAuthenticated,BackendActor,principal}=useAuth();
  
  return (
    <>   
    <div className="w-full flex items-center justify-center" >
<div className="text-6xl lg:hidden h-full py-56 px-12 text-yellow-600">Open on a Desktop Device</div>
      
<main className=" bg-[rgb(41,41,41)] min-h-screen hidden  container mx-auto px-5  p-24 py-5   lg:flex flex-col  items-center  space-y-3 backdrop-blur-lg" style={{background:"linear-gradient(rgba(0,0,0,0.5),rgb(0,0,0,0.5)),url(/static/images/grbg.jpeg)"}}>

      <GameHeader  />

      <div className="flex items-center justify-center gap-5 ">
 {/* Player 1 */}
 <div className="flex flex-col items-center ">
 <div className={`${turn ===1? "bg-green-600":"bg-gray-600"} h-6 w-6 rounded-full my-1`}> </div>

{/* Turn Indicator */}
 <div className='flex rounded-3xl py-5 px-8 flex-col gap-4 items-center border border-gray-300 bg-orange-600 bg-opacity-40 backdrop-blur-lg'>
                    <div>
                    <img src='/static/player1.jpg' alt='player1_img' className='h-16 w-16 rounded-full text-xs object-cover border' />
                    </div>
                    <div className='xl font-bold'>
                    Player 1
                    </div>
                    <div className='text-4xl'>
{p1Count}                    </div>
                </div>   
</div>

      <div className="">
      <DropZone turn={turn} setTurn={setTurn} p1Count={p1Count} setP1Count={setP1Count} p2Count={p2Count} setP2Count={setP2Count}/>
      <Board />   
      </div>
      {/* Player 2 */}
      <div className="flex flex-col items-center ">

        {/* Turn Indicator */}
        
      <div className={`${turn ===2? "bg-green-600":"bg-gray-600"} h-6 w-6 rounded-full my-1`}> </div>
         <div className='flex rounded-3xl py-5 px-8 flex-col gap-4 items-center bg-orange-600 bg-opacity-40   backdrop-blur-lg border border-gray-300'>
                    <div>
                    <img src='/static/images/characters/male/elf/wizard/2.png' alt='player2_img' className='h-16 w-16 rounded-full text-xs object-cover border' />
                    </div>
                    <div className='xl font-bold'>
                    Player 2
                    </div>
                    <div className='text-4xl'>
                        {p2Count}
                    </div>
                </div>  
      </div>
     
      </div>


      {/* Controls
       */}

       <div className="flex flex-col gap-5  text-white">
        {/* Arrow Key */}
        <div className=" space-y-5 flex-col mt-12 flex ">
            <div className="flex gap-2 items-center">
            <span className="text-4xl p-2 border border-gray-200 rounded-lg bg-black"><FaArrowLeft/></span> To move left
            </div>
            <div className="flex gap-5 items-center">
            <span className="text-4xl p-2 border border-gray-200 rounded-lg bg-black">   <FaArrowRight/></span> To move Right
            </div>
            <div>
         
            </div>
        </div>
            {/* Enter Key  */}
            <div className="flex gap-2 items-center">
        <span className="text-2xl p-2 border border-gray-200 rounded-lg bg-black">Enter</span> To Drop
        </div>

       </div>
    </main>
    </div>
    
    </>
 
  );
}
