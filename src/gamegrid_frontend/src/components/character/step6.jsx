import React from 'react'
import { MdQuestionMark } from 'react-icons/md';

function Step6() {
  return (
    <div className='flex h-full flex-col items-end w-full'>
    {/* Header */}
  <div className='font-bold w-full h-full'>
  <h1 className='text-center py-5'>
  Your Hero
  </h1>

  <div  className='flex flex-col lg:flex-row  min-h-72 bg-black items-center lg:items-start justify-center w-full gap-2 rounded bg-opacity-20 mb-5 p-5'>
      {/* Potrait Image */}
      <div className='w-full sm:w-96 h-72 bg-slate-900 border border-gray-500 bg-opacity-60 backdrop-blur-lg rounded flex items-center justify-center text-8xl'>
   <MdQuestionMark/>
      </div>
      {/* Summary */}
      <div className='flex flex-col   font-bold w-full sm:w-96  text-lg  bg-slate-900 border border-gray-500 bg-opacity-60 backdrop-blur-lg  p-2 rounded '>
      <div>
        Name: {"?"}
      </div>
      <div>
        Gender: {"?"}
      </div>
      <div>
        Race:  {"?"}
      </div>
      <div>
        Class:  {"?"}
      </div>
      <div className='break-words'>
        Background:  {"?"}
      </div>
      </div>
 </div>
 {/* Texts */}
 <div className='py-2'>
  <h1 className='text-center text-lg m'>Congratulations, esteemed adventurer! </h1> 
  <div className=' text-lg  transition-all ease-in-out'>
<br />
You have artfully summoned a character destined to weave their own legend within the tapestry of your journey. Your new companion is poised to explore uncharted realms, forge alliances, and uncover hidden treasures. 
<br />
May your choices be wise and your adventures profound. Embrace this new chapter, for a grand odyssey awaits you!
  </div>
 </div>
 


  </div>
  {/* <button className=' border-2 p-1 text-lg text-gray-200 border-gray-200 hover:text-black hover:bg-gray-200 transition-all ease-in rounded px-2 '>
    Back
</button> */}
  </div> 
  )
}

export default Step6;