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


function CharacterSelect() {
  const [step,setStep]=useState(0);
  const [user,setUser]=useState({name:"",gender:"",class:"",background:"",race:"",nft_image:""});


  const handleNext = () =>{
    step < 6 &&setStep(prev => prev + 1);
  }
  
  const handleBack = () =>{
    step > 0 &&setStep(prev => prev - 1);
  }

  const creation_steps =[<Step1 handleNext={handleNext} handleback={handleBack} setUser={setUser} />,<Step2 handleNext={handleNext} handleBack={handleBack} setUser={setUser} />,<Step3 handleNext={handleNext} handleBack={handleBack} setUser={setUser} />,<Step4 handleNext={handleNext} handleBack={handleBack} setUser={setUser} />,<Step5 handleNext={handleNext} handleBack={handleBack} setUser={setUser} />,<Step6 handleNext={handleNext} handleBack={handleBack} setUser={setUser} />];
  return (
    <section className=' w-full text-white h-full overflow-y-scroll' style={{
        background:"url(/static/scenes/character.png)",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        backgroundPosition:"center"
      }}> <div className='w-full px-5 flex items-center text-3xl py-3 bg-opacity-80 backdrop-blur-lg bg-slate-950 gap-5 fixed z-50'>
       <Link to={"/quests"} className='bg-slate-800 p-2 rounded-full text-xl'><IoIosArrowBack /></Link>  Mission 1: Create Your Hero
        </div>
      <div className='w-full min-h-screen  overflow-y-scroll bg-opacity-80 bg-slate-900 backdrop-blur-sm pb-56 flex items-center justify-center'>
     {/* Conatainer */}
     <div className='w-full h-full flex flex-col xl:flex-row items-center xl:items-start justify-center gap-5 xl:gap-24 container mx-auto p-5 xl:px-24 mt-24'>

{/* Edit pallete */}
 <div className='bg-slate-900 w-full rounded border border-gray-500 bg-opacity-50 backdrop-blur-sm p-5 pb-12 '>
   {creation_steps[step]}
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