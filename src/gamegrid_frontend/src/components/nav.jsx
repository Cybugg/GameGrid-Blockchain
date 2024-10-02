import {IoBag, IoMenu} from "react-icons/io5";
import {RiHome6Fill} from "react-icons/ri";
import {GiPlagueDoctorProfile} from "react-icons/gi";
import {MdOutlineGames, MdOutlineLeaderboard} from "react-icons/md";
import { FaScroll } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useAuth } from "../ic/use-auth-client";
import { Link } from "react-router-dom";
import { useNavSwitch } from "../nav-context";


const  Nav =({setActivateSignIn}) => {
  const {login,logout,isAuthenticated,BackendActor,principal}=useAuth();
 const {currentPage} = useNavSwitch();
  const [showNav,setShowNav] = useState(false);
  const toggleNav = ()=>{
    setShowNav(prev => !prev);
    console.log("toggled!")
  }


    return (
      <nav className='relative'>
        {/* -----------Mobile--------- */}
        <div className={`w-full lg:hidden bg-gray-900 ${currentPage === "home" && "bg-opacity-50"} backdrop-blur-2xl z-50 border-b border-b-orange-700`}>
     <div className="container mx-auto p-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
            <div className="p-2  bg-orange-600 rounded-xl">
                <img src="/static/images/logo.png" className="w-4 h-4 md:w-6 md:h-6" alt="logo"/>
            </div>
            <img src="/static/images/logotext.png" className="w-32 md:w-48" />
        </div>

        <div className="flex gap-2">
      {/* Principal */}
     { isAuthenticated&&
     !showNav && <div className=" bg-gray-700 text-sm text-white p-1 px-5 rounded-full">
     {principal && principal.toText().slice(0, 5)}...{principal && principal.toText().slice(-3)}
        </div>}
        {/* Menubar*/}
        <div className="text-orange-600 cursor-pointer bg-gray-600 bg-opacity-50 p-1 rounded-lg" onClick={toggleNav}>
        <IoMenu />
        </div>
        </div>
      </div>
        </div>

        {/* ---------Mobile Nav Display----- */}
     {  showNav && <div className=' lg:hidden bg-gray-900 backdrop-blur-2xl z-50 border-r border-r-orange-900 w-full h-[100%] fixed'>
      <div className="container mx-auto p-5 flex items-center justify-between">
       
      </div>
      {/* Nav Links.. */}
      <ul className="mx-5 text-white mt-5 flex  flex-col gap-5 text-xl  justify-center">
        <Link to="/" className={`hover:text-2xl transition-all ease-in ${currentPage ==="home" && "bg-gray-700"} p-1 px-5 rounded border border-gray-500 cursor-pointer flex gap-1 items-center `}><RiHome6Fill/>Home</Link>
        <Link to="/quests" className={`hover:text-2xl transition-all ease-in p-1 px-5 ${currentPage ==="quests" && "bg-gray-800"} rounded border border-gray-500 cursor-pointer flex gap-1 items-center` }><FaScroll />Quests</Link>
        <Link to="games" className={`hover:text-2xl transition-all ease-in p-1 ${currentPage ==="games" && "bg-gray-800"} px-5 rounded border border-gray-500 cursor-pointer flex gap-1 items-center `}><MdOutlineGames/>Games</Link>
        <Link to="profile" className={`hover:text-2xl transition-all ease-in p-1 ${currentPage ==="profile" && "bg-gray-800"} px-5 rounded border border-gray-500 cursor-pointer flex gap-1 items-center text-gray-400`}><GiPlagueDoctorProfile />Profile <span className="italic text-sm text-orange-600 ml-5">Locked</span></Link>  
        <Link  className="hover:text-2xl transition-all ease-in p-1 px-5 rounded border border-gray-500 cursor-pointer flex gap-1 items-center text-gray-400"><MdOutlineLeaderboard/>Leaderboard <span className="italic text-sm text-orange-600 ml-5">Locked</span></Link>
        <Link  className="hover:text-2xl transition-all ease-in p-1 px-5 rounded border border-gray-500 cursor-pointer flex gap-1 items-center text-gray-400"><IoBag />Marketplace<span className="italic text-sm text-orange-600 ml-5">Locked</span></Link>
        {/* Principal */}
     { isAuthenticated &&
      <div className=" bg-gray-700 p-1 px-5 self-center rounded-full mt-64">{principal && principal.toText().slice(0, 5)}...{principal && principal.toText().slice(-3)}
        </div>}
        {/* Authentication */}
            { isAuthenticated? <button onClick={()=>{//clear();
              localStorage.clear(); setActivateSignIn(false);}} className="px-5 py-1  md:px-8 bg-orange-700 text-white mb-12">Logout</button> :<button onClick={()=>setActivateSignIn(true)} className="px-5 py-1 m md:px-8 bg-orange-600 text-white mb-12">Sign in</button>}
      </ul>
      </div>
}

      {/* Desktop */}
      <div className='hidden lg:block bg-gray-900 backdrop-blur-2xl z-50 border-r border-r-orange-900 w-96 h-screen'>
      <div className="container mx-auto p-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex gap-2 w-full items-center ">
          <div className="flex gap-2 items-center">
            <div className="p-2 bg-orange-600 rounded-xl">
                <img src="/static/images/logo.png" className="h-5 w-5" alt="logo"/>
            </div>
            <img src="/static/images/logotext.png" className="w-32 " />
          </div>
            
        </div>
      </div>
      {/* Nav Links */}
      <ul className="mx-5 text-white mt-5 flex  flex-col gap-5 text-xl  justify-center">
        <Link to="/" className={`hover:text-2xl transition-all ease-in ${currentPage ==="home" && "bg-gray-700"} p-1 px-5 rounded border border-gray-500 cursor-pointer flex gap-1 items-center `}><RiHome6Fill/>Home</Link>
        <Link to="/quests" className={`hover:text-2xl transition-all ease-in p-1 ${currentPage ==="quests" && "bg-gray-800"} px-5 rounded border border-gray-500 cursor-pointer flex gap-1 items-center `}><FaScroll />Quests</Link>
        <Link to="/games" className={`hover:text-2xl transition-all ease-in p-1 ${currentPage ==="games" && "bg-gray-800"} px-5 rounded border border-gray-500 cursor-pointer flex gap-1 items-center `}><MdOutlineGames/>Games</Link>
        <Link  className={`hover:text-2xl transition-all ease-in p-1 ${currentPage ==="profile" && "bg-gray-800"} px-5 rounded border border-gray-500 cursor-pointer flex gap-1 items-center text-gray-400`}><GiPlagueDoctorProfile />Profile <span className="italic text-sm text-orange-600 ml-5">Locked</span></Link>  <Link  className="hover:text-2xl transition-all ease-in p-1 px-5 rounded border border-gray-500 cursor-pointer flex gap-1 items-center text-gray-400"><MdOutlineLeaderboard/>Leaderboard <span className="italic text-sm text-orange-600 ml-5">Locked</span></Link>
        <Link  className="hover:text-2xl transition-all ease-in p-1 px-5 rounded border border-gray-500 cursor-pointer flex gap-1 items-center text-gray-400"><IoBag />Marketplace<span className="italic text-sm text-orange-600 ml-5">Locked</span></Link>
        {/* Principal */}
     { isAuthenticated &&
      <div className=" bg-gray-700 p-1 px-5 self-center rounded-full mt-80">
     {principal && principal.toText().slice(0, 5)}...{principal && principal.toText().slice(-3)}
        </div>}
        {/* Authentication */}
            {isAuthenticated?<button onClick={()=>{logout();setActivateSignIn(false);}} className="px-5 py-1  md:px-8 bg-orange-700 text-white mb-12">Logout</button>:<button onClick={()=>{setActivateSignIn(true);}} className="px-5 py-1  md:px-8 bg-orange-600 text-white mb-12">Sign In</button>}
           
      </ul>
      </div>
      </nav>
    );
  }
  
  export default Nav;
  