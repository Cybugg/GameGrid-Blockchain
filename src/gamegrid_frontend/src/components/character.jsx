import React from 'react'
import { GiPadlock } from 'react-icons/gi';

function CharacterSelect() {
  return (
    <section className='min-h-screen w-full text-white ' style={{
        background:"url(/static/scenes/character.png)",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        backgroundPosition:"top"
      }}> <div className='w-full px-5 text-3xl py-3 bg-opacity-80 backdrop-blur-lg bg-slate-950 sticky'>
         Create Your Character
        </div>
      <div className='w-full h-screen overflow-y-scroll bg-opacity-80 bg-slate-900 backdrop-blur-sm pb-56 '>
        {/* Header */}
       
        {/* main quest */}
        <div className='m-5'>
          <div className='w-full bg-slate-900 flex  items-center flex-col justify-center xl:flex-row gap-3 border border-gray-500'>
          </div>
        </div>
  
        </div> 
   </section>
  )
}

export default CharacterSelect;