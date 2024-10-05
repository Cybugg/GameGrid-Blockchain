import React from 'react'
import { IoMdMale } from "react-icons/io";
import { IoMdFemale } from "react-icons/io";

function Step2({handleNext,setUser}) {

 
    // set gender to male
    const toMale = ()=>{
        setUser(pre => ({...pre,gender:"male"}));
          handleNext();
    };
        // set gender to Female
        const toFemale = ()=>{
          setUser(pre => ({...pre,gender:"female"}));
          handleNext();
      };
    
  


  return (
  <div className='flex h-full flex-col items-end w-full'>

  {/* Header */}
<div className='font-bold w-full h-full'>
<h1 className='text-center py-5'>
Select Gender
</h1>
{/* Gender Items */}
<div  className='flex h-72 bg-black items-center justify-center w-full gap-24 rounded bg-opacity-20'>
  {/* male */}
<button  className='text-gray-200 border-gray-200 border-4 p-2 text-5xl hover:text-blue-500 hover:border-blue-500 transition-all ease-in rounded-full' onClick={toMale}>
<IoMdMale />
</button>

{/* Female */}
<button  className='text-gray-200 border-gray-200 hover:text-pink-500 hover:border-pink-500 border-4  p-2 text-5xl rounded-full transition-all ease-in' onClick={toFemale}>
<IoMdFemale />
</button>
</div>

<div className='text-center py-2 text-sm'>
Choose your gender, but not your destiny. <br/>
Equal paths, equal outcomes.
</div>
</div> 
</div> 
  )
}

export default Step2;