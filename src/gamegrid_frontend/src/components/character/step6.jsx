import React, { useEffect, useRef, useState } from 'react'
import { MdQuestionMark } from 'react-icons/md';
import imageToBase64 from 'image-to-base64';

function Step6({user,setUser}) {
  const [count,setCount]=useState(0);
  const [nft,setNft]=useState(false);
  const videoRef = useRef(null);


  
  const setimage =  async ()=>{
 await fetch(`/static/images/characters/${user.gender}/${user.race}/${user.class_}/${Math.ceil(Math.random()*2)}.png`)
  .then(response => response.blob())
  .then(blob => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    return new Promise((res) => {
      reader.onloadend = () => {
      res(reader.result);
    }})
  }).then(dataUrl => {
    console.log('RESULT:', dataUrl);
   setUser(prev => ({...prev, nft_image:dataUrl}));
   setNft(true);
})
  }

  
  return (
    <div className='flex h-full flex-col items-end w-full'>
    {/* Header */}
  <div className='font-bold w-full h-full'>
  <h1 className='text-center py-5'>
  Your Hero
  </h1>
  


  <div  className='flex flex-col lg:flex-row  min-h-72 bg-black items-center  justify-center w-full gap-2 rounded bg-opacity-20 mb-5 p-5'>
      {/* Potrait Image */}
      <div className='w-full sm:w-96 h-72 bg-slate-900 border border-gray-500 bg-opacity-60 backdrop-blur-lg rounded flex items-center justify-center text-white text-8xl relative'>
    {nft?<img src={user.nft_image} className='w-full h-full p-0 '/> : <video ref={videoRef} onEnded={setimage}  playsInline  muted preload='none' poster='/static/images/hero.png' autoPlay key={"/static/Images/heroThumbnail.jpg"} className='w-full h-full object-cover object-center top-0  bg-slate-950 opacity-50 absolute' >
                <source type='video/mp4' src='/static/videos/character.mp4'  />
            </video>}
{ !nft&& <MdQuestionMark/>}
      </div>
      {/* Summary */}
      <div className='flex flex-col   font-bold w-full sm:w-96  text-lg  bg-slate-900 border border-gray-500 bg-opacity-60 backdrop-blur-lg  p-2 rounded '>
      <div>
        Name: <span className='text-sm text-gray-200' >{user.name?user.name:"?"}</span> 
      </div>
      <div>
        Gender: <span className='text-sm text-gray-200'>{user.gender?user.gender:"?"}</span>
      </div>
      <div>
        Race:  <span className='text-sm text-gray-200'>{user.race?user.race:"?"}</span>
      </div>
      <div>
        Class:  <span className='text-sm text-gray-200'>{user.class_?user.class_:"?"}</span>
      </div>
      <div className=''>
        Background: <span className='text-sm text-gray-200'>{user.background?user.background:"?"}</span> 
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