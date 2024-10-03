import React, { useState } from 'react'

function Step4() {
  const [hovered, setHovered]= useState("");

  const RACE_DESC = {
    warrior:"Warriors are the unparalleled masters of direct confrontation. Whether they are former soldiers, bodyguards, gladiators, hunters, or knights, each embodies the essence of a remarkable combatant.",
    wizard:"Wizards are individuals who have awakened the latent potential of magic within themselves, becoming adept at casting arcane spells. They hail from diverse backgrounds, each bringing their unique story to the art of sorcery.",
    rogue:"Rogues are the consummate masters of trickery, deception, and stealth. Their skills allow them to excel in various fields, including assassination, thievery, and tomb raiding.",
    cleric:"Clerics are individuals devoted to the service of a specific deity within their pantheon. In gratitude for their unwavering dedication, they are bestowed with divine powers.",
    ranger:"Masters of the wild, rangers specialize in tracking and hunting both monsters and outlaws. Their expertise in navigating the untamed terrain sets them apart as formidable guardians of nature. "
  }

  const handleHover = (e)=>{
    setHovered(e.target.id)
  };

  return (
    <div className='flex h-full flex-col items-end w-full'>
    {/* Header */}
  <div className='font-bold w-full h-full'>
  <h1 className='text-center py-5'>
  Select Race
  </h1>
  {/* Class Items */}
  <div  className='flex flex-col  min-h-72 bg-black items-center justify-center w-full gap-2 rounded bg-opacity-20'>
    {/* warrior */}
  <button onMouseEnter={handleHover} id="warrior" className=' border-2 p-1 text-xl text-gray-200 border-gray-200 min-w-56 hover:text-black hover:bg-gray-200 transition-all ease-in rounded'>
    Warrior
  </button>
  {/* wizard */}
  <button onMouseEnter={handleHover} id="wizard" className=' border-2 p-1 text-xl text-gray-200 border-gray-200 min-w-56 hover:text-black hover:bg-gray-200 transition-all ease-in rounded'>
    Wizard
  </button>
  {/* Cleric */}
  <button onMouseEnter={handleHover} id="cleric" className=' border-2 p-1 text-xl text-gray-200 border-gray-200 min-w-56 hover:text-black hover:bg-gray-200 transition-all ease-in rounded'>
    Cleric
</button>
{/* Ranger */}
<button onMouseEnter={handleHover} id="ranger" className=' border-2 p-1 text-xl text-gray-200 border-gray-200 min-w-56 hover:text-black hover:bg-gray-200 transition-all ease-in rounded'>
  Ranger
</button>
{/* Rogue */}
<button onMouseEnter={handleHover} id="rogue" className=' border-2 p-1 text-xl text-gray-200 border-gray-200 min-w-56 hover:text-black hover:bg-gray-200 transition-all ease-in rounded'>
    Rogue
</button>

  </div>
  <div className='text-center py-2 text-sm min-h-32 transition-all ease-in-out'>
 {RACE_DESC[hovered]}
  </div>
  </div> 
  <button className=' border-2 p-1 text-lg text-gray-200 border-gray-200 hover:text-black hover:bg-gray-200 transition-all ease-in rounded px-2'>
    Back
</button>
  </div> 
  )
}

export default Step4;