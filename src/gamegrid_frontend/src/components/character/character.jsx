import React, { useState } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { MdQuestionMark } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Step5 from './step5';
import Step4 from './step4';
import Step6 from './step6';
import Step7 from './step7';
import Step8 from './step8';

function CharacterSelect() {
  const [step,setStep]=useState(0);
  const creation_steps =[<Step1 />,<Step2 />,<Step3 />,<Step4 />,<Step5 />,<Step6 />,<Step7 />, <Step8 />];
  
  return (
    <section className='min-h-screen w-full text-white ' style={{
        background:"url(/static/scenes/character.png)",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        backgroundPosition:"center"
      }}> <div className='w-full px-5 flex items-center text-3xl py-3 bg-opacity-80 backdrop-blur-lg bg-slate-950 gap-5 sticky'>
       <Link to={"/quests"} className='bg-slate-800 p-2 rounded-full text-xl'><IoIosArrowBack /></Link>  Mission 1: Create Your Hero
        </div>
      <div className='w-full h-screen overflow-y-scroll bg-opacity-80 bg-slate-900 backdrop-blur-sm pb-56 flex items-center justify-center'>
     {/* Conatainer */}
     <div className='w-full min-h-screen flex flex-col xl:flex-row items-center xl:items-start justify-center gap-5 xl:gap-24 container mx-auto p-5 xl:px-24 xl:mt-96 '>

{/* Edit pallete */}
 <div className='bg-slate-900 w-full rounded border border-gray-500 bg-opacity-50 backdrop-blur-sm p-5 pb-12 min-h-48  xl:mt-0'>
   {creation_steps[5]}
 </div>
  {/* Charcater Sheet */}
  <div className='hidden xl:block gap-5 items-start w-full xl:w-72 justify-center'>
      {/* Potrait Image */}
      <div className='w-full sm:w-72 h-72 bg-slate-900 border border-gray-500 bg-opacity-60 backdrop-blur-lg rounded flex items-center justify-center text-8xl'>
   <MdQuestionMark />
      </div>
      {/* Summary */}
      <div className='flex flex-col mt-5 md:mt-0 xl:mt-5 font-bold md:w-96 xl:w-72  text-lg  bg-slate-900 border border-gray-500 bg-opacity-60 backdrop-blur-lg  p-2 rounded '>
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
     </div>
        </div> 
   </section>
  )
}

export default CharacterSelect;