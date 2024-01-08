import  { useState } from "react";
import Header from "./Header";
import { DataValidation } from "../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMessage,setErrorMessage] = useState('')

  const togglePage = () => {
    setIsSignIn(!isSignIn);
  };

  const handelFormSubmit = ()=>{
    // form validation
   const error =  DataValidation(email,password);
     setErrorMessage(error);

     if(error) return;

     if(isSignIn){
        // sign  up the user
       // const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed up 
            
            const user = userCredential.user;
            console.log("inside crete user",user);
            navigate("/browse")
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("first")
            setErrorMessage(errorCode +" "+errorMessage)
          });

     }
     else{
         // sign in the user
         signInWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
           // Signed in 
           const user = userCredential.user;
           navigate("/browse")
           console.log(user)
           // ...
         })
         .catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;

           setErrorMessage(errorCode +" "+ errorMessage);
         });
       
     }


  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background Image"
        />
      </div>
      <div className="w-3/12 absolute right-0 left-0 mx-auto mt-36 p-12 bg-black rounded-sm bg-opacity-80">
        <form onSubmit={(e)=>e.preventDefault()}>
          <p className="text-white font-bold text-3xl mb-2"> {isSignIn? "Sign Up" : "Sign In"}</p>
          
          {isSignIn &&  <input
            className="w-full p-3 mt-4 rounded-md bg-gray-600"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />}
          
          <input
            className="w-full p-3 mt-4 rounded-md bg-gray-600"
            type="text"
            placeholder=" Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <input
            className=" w-full  p-3 mt-4 rounded-md bg-gray-600"
            type="password"
            placeholder=" Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          <p className="text-red-600 mt-1">{errorMessage}</p>
          <button className="w-full bg-red-600 p-3 mt-9 rounded-md text-white font-bold"
          onClick={handelFormSubmit}
          >
            {isSignIn? "Sign Up" : "Sign In"}
          </button>
          <p className="text-white mt-4 cursor-pointer" onClick={togglePage}>
            {isSignIn?"Already a member? Sign In now." : "New to Netflix? Sign up now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
