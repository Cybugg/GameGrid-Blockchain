import React from 'react'

function Step5() {
  return (
    <div className='flex h-full flex-col items-end w-full'>
    {/* Header */}
  <div className='font-bold w-full h-full'>
  <h1 className='text-center py-5'>
  Name Your Legend
  </h1>
  {/* Naming */}
  <div  className='flex flex-col lg:flex-row  min-h-72 bg-black items-center justify-center w-full gap-2 rounded bg-opacity-20 mb-5 px-5'>
    <input type='text' className='outline-none w-full p-2 px-5 text-black max-w-96' />
    <button className='bg-orange-600 hover:bg-orange-700 text-white p-2 w-full lg:w-min max-w-96'>Summon</button>
  </div>
  </div> 
  <button className=' border-2 p-1 text-lg text-gray-200 border-gray-200 hover:text-black hover:bg-gray-200 transition-all ease-in rounded px-2 '>
    Back
</button>
  </div> 
  )
}

export default Step5;