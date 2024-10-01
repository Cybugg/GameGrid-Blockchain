import React, { useEffect, useState } from 'react'
import Nav from '../components/nav';
import Hero from '../components/hero';
import { useNavSwitch } from '../nav-context';

function Welcome() {
    const {activateSignIn,setActivateSignIn} = useNavSwitch();
     const {setCurrentPage} = useNavSwitch()

    useEffect(
      ()=>{
        setCurrentPage("home")
      }
      ,[]
    )
  return (
    <main className='relative h-screen flex flex-col lg:flex-row'>
    <Nav setActivateSignIn={setActivateSignIn} />
    <Hero setActivateSignIn={setActivateSignIn} activateSignIn={activateSignIn}/>
  </main>
  )
}

export default Welcome;