import React, { useState } from 'react'

function Step3({handleNext, handleBack, setUser}) {
  const [hovered, setHovered]= useState("");

  const RACE_DESC = {
    human:"Human are adaptable and versatile, excelling in various roles and thriving in diverse environments. ",
    elf:"Elves are agile and magical beings known for their deep connection to nature and long lifespans, living for centuries.",
    dwarf:"Dwarves are sturdy and resilient beings, known for their craftsmanship and fierce loyalty. With a strong connection to the earth, they excel in combat and are often skilled artisans and miners.",
    halfling:"Halflings are small, nimble beings known for their cheerful disposition and cleverness. They excel in stealth and agility, making them adept rogues and scouts. ",
    tiefling:"Tieflings are enigmatic beings with infernal heritage, characterized by their striking appearances and innate magical abilities. "
  }

  const handleHover = (e)=>{
    setHovered(e.target.id)
  };


  // Race input buttons
  const toHuman = ()=>{
      setUser(pre => ({...pre,race:"human"}));
        handleNext()
  };
  const toElf = ()=>{
    setUser(pre => ({...pre,race:"elf"}));
      handleNext()
};
const toDwarve = ()=>{
  setUser(pre => ({...pre,race:"dwarf"}));
    handleNext()
};
const toHalfing = ()=>{
  setUser(pre => ({...pre,race:"halfling"}));
    handleNext()
};
const toTiefling = ()=>{
  setUser(pre => ({...pre,race:"tiefling"}));
    handleNext()
};

  return (
    <div className='flex h-full flex-col items-end w-full'>
    {/* Header */}
  <div className='font-bold w-full h-full'>
  <h1 className='text-center py-5'>
  Select Race
  </h1>
  {/* Race Items */}
  <div  className='flex flex-col  min-h-72 bg-black items-center justify-center w-full gap-2 rounded bg-opacity-20'>
    {/* Human */}
  <button onMouseEnter={handleHover} id="human" className=' border-2 p-1 text-xl text-gray-200 border-gray-200 min-w-56 hover:text-black hover:bg-gray-200 transition-all ease-in rounded' onClick={toHuman}>
    Human
  </button>
  {/* Elf */}
  <button onMouseEnter={handleHover} id="elf" className=' border-2 p-1 text-xl text-gray-200 border-gray-200 min-w-56 hover:text-black hover:bg-gray-200 transition-all ease-in rounded' onClick={toElf}>
    Elf
  </button>
  {/* Dwarf */}
  <button onMouseEnter={handleHover} id="dwarf" className=' border-2 p-1 text-xl text-gray-200 border-gray-200 min-w-56 hover:text-black hover:bg-gray-200 transition-all ease-in rounded' onClick={toDwarve}>
    Dwarf
</button>
{/* Halfling */}
<button onMouseEnter={handleHover} id="halfling" className=' border-2 p-1 text-xl text-gray-200 border-gray-200 min-w-56 hover:text-black hover:bg-gray-200 transition-all ease-in rounded' onClick={toHalfing}>
  Halfling
</button>
{/* Tiefling */}
<button onMouseEnter={handleHover} id="tiefling" className=' border-2 p-1 text-xl text-gray-200 border-gray-200 min-w-56 hover:text-black hover:bg-gray-200 transition-all ease-in rounded' onClick={toTiefling}>
    Tiefling
</button>

  </div>
  <div className='text-center py-2 text-sm min-h-32 transition-all ease-in-out'>
 {RACE_DESC[hovered]}
  </div>
  </div> 
  <button className=' border-2 p-1 text-lg text-gray-200 border-gray-200 hover:text-black hover:bg-gray-200 transition-all ease-in rounded px-2' onClick={handleBack}>
    Back
</button>
  </div> 
  )
}

export default Step3;