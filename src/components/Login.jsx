import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const togglePage = () => {
    setIsSignIn(!isSignIn);
  };

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
        <form>
          <p className="text-white font-bold text-3xl mb-2"> {isSignIn? "Sign Up" : "Sign In"}</p>
          
          {isSignIn &&  <input
            className="w-full p-3 mt-4 rounded-md bg-gray-600"
            type="text"
            placeholder="Name"
          />}
          
          <input
            className="w-full p-3 mt-4 rounded-md bg-gray-600"
            type="text"
            placeholder=" Email or phone number"
          />
          <input
            className=" w-full  p-3 mt-4 rounded-md bg-gray-600"
            type="text"
            placeholder=" Password"
          />
          <br />
          <button className="w-full bg-red-600 p-3 mt-9 rounded-md text-white font-bold">
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
