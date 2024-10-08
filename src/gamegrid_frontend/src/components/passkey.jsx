import { IoIosArrowBack } from "react-icons/io";
import Spinner from "./spinner.jsx";
import { useAuth } from "../ic/use-auth-client.jsx";
import { useState } from "react";

  const Passkey=({setActivateSignIn}) =>{
    const {login,setPassKey} = useAuth();
    const [error,setError] = useState(false);
    const [errorMessage,setErrorMesaage]= useState("");
    const [input,setInput] = useState("");


    const handleChange =(e)=>{
        setInput(prev => e.target.value);
    };
    const onSave=()=>{
        let pass = Number(input);
            if(input.length < 2 ){
                setError(true);
                setErrorMesaage("Invalid PassKey")
            }else if (isNaN(pass)){
                setError(true);
                setErrorMesaage("Only number data type is accepted")
            }
            else{
                setPassKey(pass);
                localStorage.setItem("passkey",pass)
            }
    };

    return (
      <section className='absolute flex items-center justify-center w-full h-screen bg-black bg-opacity-70 transition-all ease-in-out duration-500 z-50'  >
       <div className="bg-gray-900 text-center text-white gap-2 flex flex-col items-center justify-center mx-5 p-12 max-w-[36rem] border border-gray-600 hover:border-gray-500 transition-all ease-in rounded" style={{
        background:"url(/static/images/connect.png)",
        backgroundSize:"cover"
       }}>
       {error && <div className="text-sm font-bold text-red-500 my-2">
        {errorMessage}
        </div>}
        {/* heading */}
        <div className="font-semibold">
           Internet Identity Passkey
        </div>
        {/* Paragraph */}
        <div className="text-sm">
       This will be your ticket to your resources 
        </div>
        {/* CTA Button */}
       
        
         <input required type="number" className={"w-full outline-none text-center mt-5 text-black"}name="passkey" onChange={handleChange} value={input} /> 
   
        <button className="bg-opacity-40 p-2 rounded-full  lg:w-50 bg-gray-300 backdrop-blur-lg border text-sm lg:text-lg flex items-center px-24 mt-5  mx-5 text-center" onClick={onSave} >Save
        </button>
       </div>
      </section>
    );
  }
  
  export default Passkey;
  