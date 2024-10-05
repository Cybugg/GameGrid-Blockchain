import React, { useEffect, useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

function Step1({handleNext,handleSelect}) {
    const textRef = useRef("");
    const [activateButton,setActivateButton]= useState(false);

    useEffect(()=>{
          
      setTimeout(() => {
      setActivateButton(true);}, 18000);
      
    },[]);

  return (
    <>
     {/* Section 1 */}
   <div className='flex flex-col items-end w-full'>
   {/* Welcome text */}
<div className='font-bold w-full'>
<h1 className='text-center'>
Welcome, Future Hero!  
</h1>
<p className='text-lg w-full' id='welcome-text' ref={textRef}>
<TypeAnimation
      sequence={[
        "Welcome to the realm where legends are born! As you embark on your journey to become the ultimate hero, let your imagination run wild. This is your chance to craft a character that stands out. Remember, the world needs champions like you to rise and shine. Get creative, and let's see who will emerge as the number one hero! Your adventure begins now!",1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={0}
      omitDeletionAnimation
      
    />
</p>

</div> 
{activateButton &&<button className='bg-white text-black px-3 my-3 t' onClick={handleNext}>Continue</button>}
</div> </>
 
  )
}

export default Step1;