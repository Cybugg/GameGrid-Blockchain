import { IoIosArrowBack } from "react-icons/io";
import Spinner from "./spinner.jsx";
import { useAuth } from "../ic/use-auth-client.jsx";

  const Connect=({setActivateSignIn}) =>{
    const {login} = useAuth();
    return (
      <section className='absolute flex items-center justify-center w-full h-screen bg-black bg-opacity-70 transition-all ease-in-out duration-500 z-50'  >
       <div className="bg-gray-900 text-center text-white gap-2 flex flex-col items-center justify-center mx-5 p-8 py-12 max-w-[36rem] border border-gray-600 hover:border-gray-500 transition-all ease-in rounded" style={{
        background:"url(/static/images/connect.png)",
        backgroundSize:"cover"
       }}>
        {/* heading */}
        <div className="font-semibold">
            Connect With a Passkey
        </div>
        {/* Paragraph */}
        <div className="text-sm">
        Internet Identity has a built-in verifiable credential (VC) protocol, which is unique , and privacy-preserving. 
        </div>
        {/* CTA Button */}
        <button className="bg-white mt-5 font-semibold text-black flex gap-2 items-center px-5 m-3 rounded border border-gray-700" onClick={login}
        >
          { //isLoggingIn? 
          false?
          <div className="flex gap-1 text-sm lg:text-lg">
            Logging-in
            <Spinner className="w-4 h-4 ml-3 rounded-full bg-gray-700" />
            </div>:<div className="flex gap-2 items-center p-2 ">
             <img src="/static/images/icp.jpeg" alt="icp" className="w-8 h-6" /> <span className="text-sm lg:text-lg">Internet Identity</span>
          </div>}
       
        </button>
        <button className="bg-opacity-40 p-2 rounded-full self-end bg-gray-300 backdrop-blur-lg border text-sm lg:text-lg flex items-center px-3" onClick={()=>setActivateSignIn(false)}>
        <IoIosArrowBack />  <span className="text-sm font-bold">Back</span>
        </button>
       </div>
      </section>
    );
  }
  
  export default Connect;
  