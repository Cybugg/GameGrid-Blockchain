import React from 'react'

function QuestContainer() {
  return (
    <section className='min-h-screen w-full text-white' style={{
      background:"url(/static/scenes/quests.png)",
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
      backgroundPosition:"top"
    }}>
    <div className='w-full h-screen overflow-y-scroll bg-opacity-80 bg-slate-900 backdrop-blur-sm'>
      {/* Header */}
      <div className='w-full px-5 text-3xl py-3 bg-opacity-20 backdrop-blur-lg bg-slate-950'>
       Quests
      </div>
      {/* main quest */}
      <div className='m-5'>
        {/* Header */}
        <div className=''>
          <span className='font-bold '>Mission 1:</span> 
        </div>
        <div className='w-full  bg-slate-900 flex flex-col items-start justify-start lg:flex-row gap-3 border border-gray-500'>
          {/* image */}
        <div className='w-full'>
          <img src='/static/images/mission1.png' alt='mission-1 image' className='w-full object-cover' />
        </div>

        {/* wrapper */}
        <div className='p-5'>
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
          <span className='font-bold bg-slate-950 px-5 border border-gray-500'>Reward: 1000gg</span> 
        </div>
        {/* cta */}
        <button className='px-5 text-md  bg-white border border-gray-500 text-black my-2'>
          Start
        </button>
      </div> 
        </div>
       
      </div>
      
      
      </div>
 </section>
  )
}

export default QuestContainer;