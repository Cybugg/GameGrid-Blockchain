import React, { useEffect } from 'react'
import { useNavSwitch } from '../nav-context';
import CharacterSelect from '../components/character/character';
import Nav from '../components/nav';

function Character() {
    const {activateSignIn,setActivateSignIn,setCurrentPage} = useNavSwitch();


  useEffect(
    ()=>{
      setCurrentPage("quests")
    }
    ,[]);
  return (
    <main className='top-0 w-full h-screen fixed flex flex-col lg:flex-row'>
    <Nav setActivateSignIn={setActivateSignIn} />
     <CharacterSelect />
 </main>
  )
}
export default Character