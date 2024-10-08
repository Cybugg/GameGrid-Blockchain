import React, { useEffect } from 'react'
import QuestContainer from '../components/questContainer';
import { useNavSwitch } from '../nav-context';
import Nav from '../components/nav';

function Quests() {
  const {activateSignIn,setActivateSignIn,setCurrentPage} = useNavSwitch();


  useEffect(
    ()=>{
      setCurrentPage("quests")
    }
    ,[]);

  return (
    <main className='top-0 h-screen w-full fixed flex flex-col lg:flex-row'>
     <Nav setActivateSignIn={setActivateSignIn} />
      <QuestContainer setActivateSignIn={setActivateSignIn} activateSignIn={activateSignIn} />
  </main>)
}

export default Quests;