import React from 'react'
import { GiPadlock } from 'react-icons/gi';
import { Link } from 'react-router-dom';

function GamingFrame() {
  return (
    <section className='min-h-screen w-full text-white ' style={{
      background:"url(/static/scenes/quests.png)",
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
      backgroundPosition:"top"
    }}> <div className='w-full px-5 text-3xl py-3 bg-opacity-80 backdrop-blur-lg bg-slate-950 sticky'>
       Games
      </div>
    <div className='w-full h-screen overflow-y-scroll bg-opacity-80 bg-slate-900 backdrop-blur-sm pb-56 '>
      {/* Header */}
     
      {/* main games */}
      <div className='m-5 grid grid-cols-1 xl:grid-cols-2 items-center gap-3'>
    {/* First game */}
        <div className='w-full bg-slate-900 flex  items-center flex-col justify-center gap-3 border border-gray-500 rounded'>
          {/* image */}
          <div className='bg-green-500 w-full h-96' style={{  background:"url(/static/scenes/grid_rivals.png)",
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
      backgroundPosition:"center"}}>
              {/* <img src='/static/images/mission1.png' alt='mission-1 image' className='object-cover w-full h-full' /> */}
          </div>
        

        {/* wrapper */}
        <div className='p-5 text-4xl'>
          {/* Title */}
        <div>
        Grid Rivals
        </div>

        {/* Description */}
        <div className='text-lg'>
        Where classic Connect 4 meets the future of gaming! Stake your tokens to enter thrilling matches and tournaments, competing against rivals from around the globe. Collect unique NFT discs and climb the leaderboard to earn exclusive rewards. Join a community-driven experience and help shape the game as you connect your way to victory!
        </div>
        {/* Reward */}
        <div className='text-lg  text-orange-500 my-2'>
          <span className='font-bold bg-slate-800 px-5 border border-gray-500'>Reward: unlimited</span> 
        </div>
        {/* cta */}
        <Link to={"/games"} className='px-5 text-md hover:bg-gray-300 bg-white border border-gray-500 text-black my-2'>
          Play Demo
        </Link>
      </div> 
        </div>

        {/* Second game */}
        <div className='w-full bg-slate-900 flex  items-center flex-col justify-center gap-3 border border-gray-500 rounded'>
          {/* image */}
          <div className='basis-5/5 bg-green-500 w-full h-96' style={{   background:"url(/static/scenes/conquer.png)",
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
      backgroundPosition:"center"}}>
              {/* <img src='/static/images/mission1.png' alt='mission-1 image' className='object-cover w-full h-full' /> */}
          </div>
        

        {/* wrapper */}
        <div className='p-5 text-4xl'>
          {/* Title */}
        <div>
       World Conqueror
        </div>

        {/* Description */}
        <div className='text-lg '>
        An epic RPG adventure where players from around the globe vie for supremacy! Dive into a vast, immersive world filled with quests, mythical creatures, and strategic battles. Forge alliances, gather powerful NFTs, and enhance your skills as you compete in fierce tournaments. Only the strongest will emerge as the ultimate conqueror—will you claim the throne?
        </div>
        {/* Reward */}
        <div className='text-lg  text-orange-500 my-2'>
          <span className='font-bold bg-slate-800 px-5 border border-gray-500'>Reward: Unlimited</span> 
        </div>
        {/* cta */}
        <Link  className='px-5 text-md text-white border border-gray-500  my-2'>
          Coming Soon...
        </Link>
      </div> 
        </div>
      </div>

      {/* Other missions */}
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>

        {/* Mission 2 */}
        <div className='p-5'>
          {/* Header */}
        <div>
      
        </div>
        <div className='w-full bg-slate-900 bg-opacity-50 flex  items-center flex-col justify-centergap-3 border border-gray-500 rounded'>
          {/* image */}
          <div className=' w-full h-72 flex flex-col items-center justify-center text-orange-500' >
          <GiPadlock className='text-4xl' />
          <span>Coming soon...</span>
          </div>
        {/* wrapper */}
        <div className='p-5 text-4xl'>
        {/* Reward */}
        <div className='text-lg  text-orange-500 my-2'>
          <span className='font-bold bg-slate-800 px-5 border border-gray-500'>The gods are working on a game</span> 
        </div>
      </div> 
        </div>
        </div>

         {/* Mission 3 */}
         <div className='p-5'>
          {/* Header */}
        <div>
       
        </div>
        <div className='w-full bg-slate-900 bg-opacity-50 flex  items-center flex-col justify-centergap-3 border border-gray-500 rounded'>
          {/* image */}
          <div className=' w-full h-72 flex flex-col items-center justify-center text-orange-500' >
          <GiPadlock className='text-4xl' />
          <span>Coming soon...</span>
          </div>
        {/* wrapper */}
        <div className='p-5 text-4xl'>
        {/* Reward */}
        <div className='text-lg  text-orange-500 my-2'>
          <span className='font-bold bg-slate-800 px-5 border border-gray-500'>The gods are working on a game</span> 
        </div>
      </div> 
        </div>
        </div>

         {/* Mission 4 */}
         <div className='p-5'>
          {/* Header */}
        <div>
  
        </div>
        <div className='w-full bg-slate-900 bg-opacity-50 flex  items-center flex-col justify-centergap-3 border border-gray-500 rounded'>
          {/* image */}
          <div className=' w-full h-72 flex flex-col items-center justify-center text-orange-500' >
          <GiPadlock className='text-4xl' />
          <span>Coming soon...</span>
          </div>
        {/* wrapper */}
        <div className='p-5 text-4xl'>
        {/* Reward */}
        <div className='text-lg  text-orange-500 my-2'>
          <span className='font-bold bg-slate-800 px-5 border border-gray-500'>The gods are working on a game</span> 
        </div>
      </div> 
        </div>
        </div>

         {/* Mission 5 */}
         <div className='p-5'>
          {/* Header */}
        <div>
       
        </div>
        <div className='w-full bg-slate-900 bg-opacity-50 flex  items-center flex-col justify-centergap-3 border border-gray-500 rounded'>
          {/* image */}
          <div className=' w-full h-72 flex flex-col items-center justify-center text-orange-500' >
          <GiPadlock className='text-4xl' />
          <span>Coming soon...</span>
          </div>
        {/* wrapper */}
        <div className='p-5 text-4xl'>
        {/* Reward */}
        <div className='text-lg  text-orange-500 my-2'>
          <span className='font-bold bg-slate-800 px-5 border border-gray-500'>The gods are working on a game</span> 
        </div>
      </div> 
        </div>
        </div>


         {/* Mission 6 */}
         <div className='p-5'>
          {/* Header */}
        <div>
      
        </div>
        <div className='w-full bg-slate-900 bg-opacity-50 flex  items-center flex-col justify-centergap-3 border border-gray-500 rounded'>
          {/* image */}
          <div className=' w-full h-72 flex flex-col items-center justify-center text-orange-500' >
          <GiPadlock className='text-4xl' />
          <span>Coming soon...</span>
          </div>
        {/* wrapper */}
        <div className='p-5 text-4xl'>
        {/* Reward */}
        <div className='text-lg  text-orange-500 my-2'>
          <span className='font-bold bg-slate-800 px-5 border border-gray-500'>The gods are working on a game</span> 
        </div>
      </div> 
        </div>
        </div>



         {/* Mission 7 */}
         <div className='p-5'>
          {/* Header */}
        <div>
   
        </div>
        <div className='w-full bg-slate-900 bg-opacity-50 flex  items-center flex-col justify-centergap-3 border border-gray-500 rounded'>
          {/* image */}
          <div className=' w-full h-72 flex flex-col items-center justify-center text-orange-500' >
          <GiPadlock className='text-4xl' />
          <span>Coming soon...</span>
          </div>
        {/* wrapper */}
        <div className='p-5 text-4xl'>
        {/* Reward */}
        <div className='text-lg  text-orange-500 my-2'>
          <span className='font-bold bg-slate-800 px-5 border border-gray-500'>The gods are working on a game</span> 
        </div>
      </div> 
        </div>
        </div>


         {/* Mission 8 */}
         <div className='p-5'>
          {/* Header */}
        <div>

        </div>
        <div className='w-full bg-slate-900 bg-opacity-50 flex  items-center flex-col justify-centergap-3 border border-gray-500 rounded'>
          {/* image */}
          <div className=' w-full h-72 flex flex-col items-center justify-center text-orange-500' >
          <GiPadlock className='text-4xl' />
          <span>Coming soon...</span>
          </div>
        {/* wrapper */}
        <div className='p-5 text-4xl'>
        {/* Reward */}
        <div className='text-lg  text-orange-500 my-2'>
          <span className='font-bold bg-slate-800 px-5 border border-gray-500'>The gods are working on a game</span> 
        </div>
      </div> 
        </div>
        </div>

         {/* Mission 9 */}
         <div className='p-5'>
          {/* Header */}
        <div>
   
        </div>
        <div className='w-full bg-slate-900 bg-opacity-50 flex  items-center flex-col justify-centergap-3 border border-gray-500 rounded'>
          {/* image */}
          <div className=' w-full h-72 flex flex-col items-center justify-center text-orange-500' >
          <GiPadlock className='text-4xl' />
          <span>Coming soon...</span>
          </div>
        {/* wrapper */}
        <div className='p-5 text-4xl'>
        {/* Reward */}
        <div className='text-lg  text-orange-500 my-2'>
          <span className='font-bold bg-slate-800 px-5 border border-gray-500'>The gods are working on a game</span> 
        </div>
      </div> 
        </div>
        </div>

         {/* Mission 10 */}
         <div className='p-5'>
          {/* Header */}
        <div>

        </div>
        <div className='w-full bg-slate-900 bg-opacity-50 flex  items-center flex-col justify-centergap-3 border border-gray-500 rounded'>
          {/* image */}
          <div className=' w-full h-72 flex flex-col items-center justify-center text-orange-500' >
          <GiPadlock className='text-4xl' />
          <span>Coming soon...</span>
          </div>
        {/* wrapper */}
        <div className='p-5 text-4xl'>
        {/* Reward */}
        <div className='text-lg  text-orange-500 my-2'>
          <span className='font-bold bg-slate-800 px-5 border border-gray-500'>The gods are working on a game</span> 
        </div>
      </div> 
        </div>
        </div>

         {/* Mission 11 */}
         <div className='p-5'>
          {/* Header */}
        <div>
 
        </div>
        <div className='w-full bg-slate-900 bg-opacity-50 flex  items-center flex-col justify-centergap-3 border border-gray-500 rounded'>
          {/* image */}
          <div className=' w-full h-72 flex flex-col items-center justify-center text-orange-500' >
          <GiPadlock className='text-4xl' />
          <span>Coming soon...</span>
          </div>
        {/* wrapper */}
        <div className='p-5 text-4xl'>
        {/* Reward */}
        <div className='text-lg  text-orange-500 my-2'>
          <span className='font-bold bg-slate-800 px-5 border border-gray-500'>The gods are working on a game</span> 
        </div>
      </div> 
        </div>
        </div>

         {/* Mission 12 */}
         <div className='p-5'>
          {/* Header */}
        <div>
      
        </div>
        <div className='w-full bg-slate-900 bg-opacity-50 flex  items-center flex-col justify-centergap-3 border border-gray-500 rounded'>
          {/* image */}
          <div className=' w-full h-72 flex flex-col items-center justify-center text-orange-500' >
          <GiPadlock className='text-4xl' />
          <span>Coming soon...</span>
          </div>
        {/* wrapper */}
        <div className='p-5 text-4xl'>
        {/* Reward */}
        <div className='text-lg  text-orange-500 my-2'>
          <span className='font-bold bg-slate-800 px-5 border border-gray-500'>The gods are working on a game</span> 
        </div>
      </div> 
        </div>
        </div>

         {/* Mission 13 */}
         <div className='p-5'>
          {/* Header */}
        <div>
        
        </div>
        <div className='w-full bg-slate-900 bg-opacity-50 flex  items-center flex-col justify-centergap-3 border border-gray-500 rounded'>
          {/* image */}
          <div className=' w-full h-72 flex flex-col items-center justify-center text-orange-500' >
          <GiPadlock className='text-4xl' />
          <span>Coming soon...</span>
          </div>
        {/* wrapper */}
        <div className='p-5 text-4xl'>
        {/* Reward */}
        <div className='text-lg  text-orange-500 my-2'>
          <span className='font-bold bg-slate-800 px-5 border border-gray-500'>The gods are working on a game</span> 
        </div>
      </div> 
        </div>
        </div>

         {/* Mission 14 */}
         <div className='p-5'>
          {/* Header */}
        <div>
    
        </div>
        <div className='w-full bg-slate-900 bg-opacity-50 flex  items-center flex-col justify-centergap-3 border border-gray-500 rounded'>
          {/* image */}
          <div className=' w-full h-72 flex flex-col items-center justify-center text-orange-500' >
          <GiPadlock className='text-4xl' />
          <span>Coming soon...</span>
          </div>
        {/* wrapper */}
        <div className='p-5 text-4xl'>
        {/* Reward */}
        <div className='text-lg  text-orange-500 my-2'>
          <span className='font-bold bg-slate-800 px-5 border border-gray-500'>The gods are working on a game</span> 
        </div>
      </div> 
        </div>
        </div>

         {/* Mission 15 */}
         <div className='p-5'>
          {/* Header */}
        <div>
     
        </div>
        <div className='w-full bg-slate-900 bg-opacity-50 flex  items-center flex-col justify-centergap-3 border border-gray-500 rounded'>
          {/* image */}
          <div className=' w-full h-72 flex flex-col items-center justify-center text-orange-500' >
          <GiPadlock className='text-4xl' />
          <span>Coming soon...</span>
          </div>
        {/* wrapper */}
        <div className='p-5 text-4xl'>
        {/* Reward */}
        <div className='text-lg  text-orange-500 my-2'>
          <span className='font-bold bg-slate-800 px-5 border border-gray-500'>The gods are working on a game</span> 
        </div>
      </div> 
        </div>
        </div>

         {/* Mission 16 */}
         <div className='p-5'>
          {/* Header */}
        <div>
     
        </div>
        <div className='w-full bg-slate-900 bg-opacity-50 flex  items-center flex-col justify-centergap-3 border border-gray-500 rounded'>
          {/* image */}
          <div className=' w-full h-72 flex flex-col items-center justify-center text-orange-500' >
          <GiPadlock className='text-4xl' />
          <span>Coming soon...</span>
          </div>
        {/* wrapper */}
        <div className='p-5 text-4xl'>
        {/* Reward */}
        <div className='text-lg  text-orange-500 my-2'>
          <span className='font-bold bg-slate-800 px-5 border border-gray-500'>The gods are working on a game</span> 
        </div>
      </div> 
        </div>
        </div>
      </div>
      </div>
        
 </section>
  )
}

export default GamingFrame;