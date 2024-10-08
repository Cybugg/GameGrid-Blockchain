import Connect from "./connect";
import { useAuth } from "../ic/use-auth-client";
import { Link } from "react-router-dom";
import Passkey from "./passkey";

  const Hero = ({setActivateSignIn,activateSignIn}) =>{
    const {logout,isAuthenticated,passKey}=useAuth();

    return (
      <section className='h-[80%] w-full relative'>
       { activateSignIn &&  !isAuthenticated && 
       <Connect setActivateSignIn={setActivateSignIn} />}

       {!passKey && isAuthenticated && <Passkey setActivateSignIn={setActivateSignIn} />}
        <div className="bg-black fixed z-[-10] w-full h-screen top-0">
           <video playsInline muted loop preload='none' poster='/static/images/hero.png' autoPlay key={"/static/Images/heroThumbnail.jpg"} className='w-full h-screen object-cover object-center top-0 md:blur-sm bg-slate-950 md:opacity-50' >
                <source type='video/mp4' src='/static/videos/hero.mp4'   />
            </video>
        </div>
       
            {/* Content */}
            <div className="mt-12 md:mt-24 text-white bg-gray-900 bg-opacity-70 py-8"> 
              <div className="flex h-[80%] w-full flex-col items-center justify-center container mx-auto px-5">
                {/* Heading */}
                  <div className="text-4xl md:text-5xl font-semibold">
                Gamegrid Blockchain
               </div>
               {/* Paragraphs */}
               <div className="text-lg lg:text-lg font-semibold md:w-[60rem]">
          Gaming here is more than just a pastime—it's a thrilling adventure where your skills can earn you real rewards. Whether you&apos;re a player looking for fun or a developer ready to create the next big hit, our platform combines creativity, community, and crypto to redefine what it means to play. <br />
          Join us and discover a universe where every game is a chance to thrive!
               </div>
              </div>
               
            </div>
            {/* Buttons */}
            <div className="mt-5 flex w-full gap-5 justify-center items-center text-white md:text-3xl">
              <Link to={"/quests"} className=" px-5 md:px-8 bg-[rgb(25,25,25)] border border-[rgb(158,158,158)] text-5xl lg:text-3xl">Explore </Link>
          { !isAuthenticated&&<button onClick={()=>setActivateSignIn(true)} className="px-5 md:px-8 bg-orange-600  text-5xl lg:text-3xl">Sign in</button>}
            </div>
      </section>
    );
  }
  
  export default Hero;