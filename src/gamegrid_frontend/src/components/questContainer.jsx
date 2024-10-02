import React from 'react'
import { GiPadlock } from 'react-icons/gi';
import { Link } from 'react-router-dom';

function QuestContainer() {
  return (
    <section className='min-h-screen w-full text-white ' style={{
      background:"url(/static/scenes/quests.png)",
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
      backgroundPosition:"top"
    }}> <div className='w-full px-5 text-3xl py-3 bg-opacity-80 backdrop-blur-lg bg-slate-950 sticky'>
       Quests
      </div>
    <div className='w-full h-screen overflow-y-scroll bg-opacity-80 bg-slate-900 backdrop-blur-sm pb-56 '>
      {/* Header */}
     
      {/* main quest */}
      <div className='m-5'>
        {/* Header */}
        <div className=''>
          <span className='font-bold '>Mission 1:</span> 
        </div>
        <div className='w-full bg-slate-900 flex  items-center flex-col justify-center xl:flex-row gap-3 border border-gray-500 rounded'>
          {/* image */}
          <div className='bg-green-500 w-full h-96' style={{   background:"url(/static/images/mission1.png)",
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
      backgroundPosition:"top"}}>
              {/* <img src='/static/images/mission1.png' alt='mission-1 image' className='object-cover w-full h-full' /> */}
          </div>
        

        {/* wrapper */}
        <div className='p-5 text-4xl'>
          {/* Title */}
        <div>
        Create your Hero
        </div>
        {/* Description */}
        <div className='text-lg'>
        Here, you&apos;ll embark on your ultimate journey by designing a unique character that reflects your style. Choose your fantasy class, gender, race, and background to craft a one-of-a-kind hero. Once your avatar is complete, mint your soul-bound NFT to secure your creation in the blockchain forever. Ready to delve into the adventure?
        </div>
        {/* Reward */}
        <div className='text-lg  text-orange-500 my-2'>
          <span className='font-bold bg-slate-800 px-5 border border-gray-500'>Reward: 1000gg</span> 
        </div>
        {/* cta */}
        <Link to={"/quests/create-hero"} className='px-5 text-md hover:bg-gray-300 bg-white border border-gray-500 text-black my-2'>
          Start
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
        <span className='font-bold '>Mission 2:</span> 
        </div>
        <div className='w-full bg-slate-900 bg-opacity-50 flex  items-center flex-col justify-centergap-3 border border-gray-500 rounded'>
          {/* image */}
          <div className=' w-full h-72 flex flex-col items-center justify-center text-orange-500' >
          <GiPadlock className='text-4xl' />
          <span>Locked</span>
          </div>
        {/* wrapper */}
        <div className='p-5 text-4xl'>
        {/* Reward */}
        <div className='text-lg  text-orange-500 my-2'>
          <span className='font-bold bg-slate-800 px-5 border border-gray-500'>Reward: Unspecified</span> 
        </div>
      </div> 
        </div>
        </div>

         {/* Mission 3 */}
         <div className='p-5'>
          {/* Header */}
        <div>
        <span className='font-bold '>Mission 3:</span> 
        </div>
        <div className='w-full bg-slate-900 bg-opacity-50 flex  items-center flex-col justify-centergap-3 border border-gray-500 rounded'>
          {/* image */}
          <div className=' w-full h-72 flex flex-col items-center justify-center text-orange-500' >
          <GiPadlock className='text-4xl' />
          <span>Locked</span>
          </div>
        {/* wrapper */}
        <div className='p-5 text-4xl'>
        {/* Reward */}
        <div className='text-lg  text-orange-500 my-2'>
          <span className='font-bold bg-slate-800 px-5 border border-gray-500'>Reward: Unspecified</span> 
        </div>
      </div> 
        </div>
        </div>

         {/* Mission 4 */}
         <div className='p-5'>
          {/* Header */}
        <div>
        <span className='font-bold '>Mission 4:</span> 
        </div>
        <div className='w-full bg-slate-900 bg-opacity-50 flex  items-center flex-col justify-centergap-3 border border-gray-500 rounded'>
          {/* image */}
          <div className=' w-full h-72 flex flex-col items-center justify-center text-orange-500' >
          <GiPadlock className='text-4xl' />
          <span>Locked</span>
          </div>
        {/* wrapper */}
        <div className='p-5 text-4xl'>
        {/* Reward */}
        <div className='text-lg  text-orange-500 my-2'>
          <span className='font-bold bg-slate-800 px-5 border border-gray-500'>Reward: Unspecified</span> 
        </div>
      </div> 
        </div>
        </div>

         {/* Mission 5 */}
         <div className='p-5'>
          {/* Header */}
        <div>
        <span className='font-bold '>Mission 5:</span> 
        </div>
        <div className='w-full bg-slate-900 bg-opacity-50 flex  items-center flex-col justify-centergap-3 border border-gray-500 rounded'>
          {/* image */}
          <div className=' w-full h-72 flex flex-col items-center justify-center text-orange-500' >
          <GiPadlock className='text-4xl' />
          <span>Locked</span>
          </div>
        {/* wrapper */}
        <div className='p-5 text-4xl'>
        {/* Reward */}
        <div className='text-lg  text-orange-500 my-2'>
          <span className='font-bold bg-slate-800 px-5 border border-gray-500'>Reward: Unspecified</span> 
        </div>
      </div> 
        </div>
        </div>


         {/* Mission 6 */}
         <div className='p-5'>
          {/* Header */}
        <div>
        <span className='font-bold '>Mission 6:</span> 
        </div>
        <div className='w-full bg-slate-900 bg-opacity-50 flex  items-center flex-col justify-centergap-3 border border-gray-500 rounded'>
          {/* image */}
          <div className=' w-full h-72 flex flex-col items-center justify-center text-orange-500' >
          <GiPadlock className='text-4xl' />
          <span>Locked</span>
          </div>
        {/* wrapper */}
        <div className='p-5 text-4xl'>
        {/* Reward */}
        <div className='text-lg  text-orange-500 my-2'>
          <span className='font-bold bg-slate-800 px-5 border border-gray-500'>Reward: Unspecified</span> 
        </div>
      </div> 
        </div>
        </div>



         {/* Mission 7 */}
         <div className='p-5'>
          {/* Header */}
        <div>
        <span className='font-bold '>Mission 7:</span> 
        </div>
        <div className='w-full bg-slate-900 bg-opacity-50 flex  items-center flex-col justify-centergap-3 border border-gray-500 rounded'>
          {/* image */}
          <div className=' w-full h-72 flex flex-col items-center justify-center text-orange-500' >
          <GiPadlock className='text-4xl' />
          <span>Locked</span>
          </div>
        {/* wrapper */}
        <div className='p-5 text-4xl'>
        {/* Reward */}
        <div className='text-lg  text-orange-500 my-2'>
          <span className='font-bold bg-slate-800 px-5 border border-gray-500'>Reward: Unspecified</span> 
        </div>
      </div> 
        </div>
        </div>


         {/* Mission 8 */}
         <div className='p-5'>
          {/* Header */}
        <div>
        <span className='font-bold '>Mission 8:</span> 
        </div>
        <div className='w-full bg-slate-900 bg-opacity-50 flex  items-center flex-col justify-centergap-3 border border-gray-500 rounded'>
          {/* image */}
          <div className=' w-full h-72 flex flex-col items-center justify-center text-orange-500' >
          <GiPadlock className='text-4xl' />
          <span>Locked</span>
          </div>
        {/* wrapper */}
        <div className='p-5 text-4xl'>
        {/* Reward */}
        <div className='text-lg  text-orange-500 my-2'>
          <span className='font-bold bg-slate-800 px-5 border border-gray-500'>Reward: Unspecified</span> 
        </div>
      </div> 
        </div>
        </div>

         {/* Mission 9 */}
         <div className='p-5'>
          {/* Header */}
        <div>
        <span className='font-bold '>Mission 9:</span> 
        </div>
        <div className='w-full bg-slate-900 bg-opacity-50 flex  items-center flex-col justify-centergap-3 border border-gray-500 rounded'>
          {/* image */}
          <div className=' w-full h-72 flex flex-col items-center justify-center text-orange-500' >
          <GiPadlock className='text-4xl' />
          <span>Locked</span>
          </div>
        {/* wrapper */}
        <div className='p-5 text-4xl'>
        {/* Reward */}
        <div className='text-lg  text-orange-500 my-2'>
          <span className='font-bold bg-slate-800 px-5 border border-gray-500'>Reward: Unspecified</span> 
        </div>
      </div> 
        </div>
        </div>

         {/* Mission 10 */}
         <div className='p-5'>
          {/* Header */}
        <div>
        <span className='font-bold '>Mission 10:</span> 
        </div>
        <div className='w-full bg-slate-900 bg-opacity-50 flex  items-center flex-col justify-centergap-3 border border-gray-500 rounded'>
          {/* image */}
          <div className=' w-full h-72 flex flex-col items-center justify-center text-orange-500' >
          <GiPadlock className='text-4xl' />
          <span>Locked</span>
          </div>
        {/* wrapper */}
        <div className='p-5 text-4xl'>
        {/* Reward */}
        <div className='text-lg  text-orange-500 my-2'>
          <span className='font-bold bg-slate-800 px-5 border border-gray-500'>Reward: Unspecified</span> 
        </div>
      </div> 
        </div>
        </div>

         {/* Mission 11 */}
         <div className='p-5'>
          {/* Header */}
        <div>
        <span className='font-bold '>Mission 11:</span> 
        </div>
        <div className='w-full bg-slate-900 bg-opacity-50 flex  items-center flex-col justify-centergap-3 border border-gray-500 rounded'>
          {/* image */}
          <div className=' w-full h-72 flex flex-col items-center justify-center text-orange-500' >
          <GiPadlock className='text-4xl' />
          <span>Locked</span>
          </div>
        {/* wrapper */}
        <div className='p-5 text-4xl'>
        {/* Reward */}
        <div className='text-lg  text-orange-500 my-2'>
          <span className='font-bold bg-slate-800 px-5 border border-gray-500'>Reward: Unspecified</span> 
        </div>
      </div> 
        </div>
        </div>

         {/* Mission 12 */}
         <div className='p-5'>
          {/* Header */}
        <div>
        <span className='font-bold '>Mission 12:</span> 
        </div>
        <div className='w-full bg-slate-900 bg-opacity-50 flex  items-center flex-col justify-centergap-3 border border-gray-500 rounded'>
          {/* image */}
          <div className=' w-full h-72 flex flex-col items-center justify-center text-orange-500' >
          <GiPadlock className='text-4xl' />
          <span>Locked</span>
          </div>
        {/* wrapper */}
        <div className='p-5 text-4xl'>
        {/* Reward */}
        <div className='text-lg  text-orange-500 my-2'>
          <span className='font-bold bg-slate-800 px-5 border border-gray-500'>Reward: Unspecified</span> 
        </div>
      </div> 
        </div>
        </div>

         {/* Mission 13 */}
         <div className='p-5'>
          {/* Header */}
        <div>
        <span className='font-bold '>Mission 13:</span> 
        </div>
        <div className='w-full bg-slate-900 bg-opacity-50 flex  items-center flex-col justify-centergap-3 border border-gray-500 rounded'>
          {/* image */}
          <div className=' w-full h-72 flex flex-col items-center justify-center text-orange-500' >
          <GiPadlock className='text-4xl' />
          <span>Locked</span>
          </div>
        {/* wrapper */}
        <div className='p-5 text-4xl'>
        {/* Reward */}
        <div className='text-lg  text-orange-500 my-2'>
          <span className='font-bold bg-slate-800 px-5 border border-gray-500'>Reward: Unspecified</span> 
        </div>
      </div> 
        </div>
        </div>

         {/* Mission 14 */}
         <div className='p-5'>
          {/* Header */}
        <div>
        <span className='font-bold '>Mission 14:</span> 
        </div>
        <div className='w-full bg-slate-900 bg-opacity-50 flex  items-center flex-col justify-centergap-3 border border-gray-500 rounded'>
          {/* image */}
          <div className=' w-full h-72 flex flex-col items-center justify-center text-orange-500' >
          <GiPadlock className='text-4xl' />
          <span>Locked</span>
          </div>
        {/* wrapper */}
        <div className='p-5 text-4xl'>
        {/* Reward */}
        <div className='text-lg  text-orange-500 my-2'>
          <span className='font-bold bg-slate-800 px-5 border border-gray-500'>Reward: Unspecified</span> 
        </div>
      </div> 
        </div>
        </div>

         {/* Mission 15 */}
         <div className='p-5'>
          {/* Header */}
        <div>
        <span className='font-bold '>Mission 15:</span> 
        </div>
        <div className='w-full bg-slate-900 bg-opacity-50 flex  items-center flex-col justify-centergap-3 border border-gray-500 rounded'>
          {/* image */}
          <div className=' w-full h-72 flex flex-col items-center justify-center text-orange-500' >
          <GiPadlock className='text-4xl' />
          <span>Locked</span>
          </div>
        {/* wrapper */}
        <div className='p-5 text-4xl'>
        {/* Reward */}
        <div className='text-lg  text-orange-500 my-2'>
          <span className='font-bold bg-slate-800 px-5 border border-gray-500'>Reward: Unspecified</span> 
        </div>
      </div> 
        </div>
        </div>

         {/* Mission 16 */}
         <div className='p-5'>
          {/* Header */}
        <div>
        <span className='font-bold '>Mission 16:</span> 
        </div>
        <div className='w-full bg-slate-900 bg-opacity-50 flex  items-center flex-col justify-centergap-3 border border-gray-500 rounded'>
          {/* image */}
          <div className=' w-full h-72 flex flex-col items-center justify-center text-orange-500' >
          <GiPadlock className='text-4xl' />
          <span>Locked</span>
          </div>
        {/* wrapper */}
        <div className='p-5 text-4xl'>
        {/* Reward */}
        <div className='text-lg  text-orange-500 my-2'>
          <span className='font-bold bg-slate-800 px-5 border border-gray-500'>Reward: Unspecified</span> 
        </div>
      </div> 
        </div>
        </div>
      </div>
      </div>
        
 </section>
  )
}

export default QuestContainer;