import React, { useEffect } from 'react'
import { useNavSwitch } from '../nav-context';
import CharacterSelect from '../components/character/character';
import Nav from '../components/nav';
import GamingFrame from '../components/gaming';

function Character() {
    const {activateSignIn,setActivateSignIn,setCurrentPage} = useNavSwitch();


  useEffect(
    ()=>{
      setCurrentPage("games")
    }
    ,[]);
  return (
    <main className='top-0 w-full h-screen fixed flex flex-col lg:flex-row'>
    <Nav setActivateSignIn={setActivateSignIn} />
     <GamingFrame setActivateSignIn={setActivateSignIn} activateSignIn={activateSignIn} />
 </main>
  )
}
export default Character