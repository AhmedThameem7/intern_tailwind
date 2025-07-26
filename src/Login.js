import React, { useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "./images/animation.json";
import {motion} from 'framer-motion'
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailerr, setEmailerr] = useState("");
  const [passerr, setPasserr] = useState("");

  const handlesbmt = (e) => {
    e.preventDefault();
    let valid = true;

    if (email === "") {
      setEmailerr("Please enter the email id");
      valid = false;
    } else {
      setEmailerr("");
    }

    if (password === "") {
      setPasserr("Please enter the password");
      valid = false;
    } else if (password.length < 8) {
      setPasserr("Password must be more than 8 characters");
      valid = false;
    } else {
      setPasserr("");
    }

    if (valid) {
      const userData = { email, password };
      localStorage.setItem("user", JSON.stringify(userData));
      alert("Login successful!");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-24 mx-4">
      <motion.div className="w-full md:w-[25rem] mx-auto"
      initial={{opacity:0,x:100}}
      animate={{opacity:1,x:0}}
      transition={{duration:1,ease:'easeIn'}}>
        <Lottie animationData={animationData} loop={true} />
      </motion.div>

      <motion.div className="flex justify-center mb-6"
      initial={{opacity:0,x:-100}}
      animate={{opacity:1,x:0}}
      transition={{duration:1,ease:'easeIn'}}
      >
        <form
          className="flex flex-col gap-6 w-[90%] sm:w-[70%] md:w-[25rem] rounded-lg border-2 border-gray-400 p-8 mt-4 bg-[#EAE0D5] shadow-[13px_21px_15px_gray] font-[Franklin_Gothic_Medium] caret-red-400"
          onSubmit={handlesbmt}
        >
          <legend className="text-[30px] font-medium text-center mb-4 text-purple-600">Login</legend>

          <label htmlFor="email" className="font-semibold">Email Id:</label>
          <input
            type="email"
            id="email"
            className="border-b-2 border-gray-500 bg-[#EAE0D5] outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailerr && <p className="text-red-500 text-xs">{emailerr}</p>}

          <label htmlFor="password" className="font-semibold">Password:</label>
          <input
            type="password"
            id="password"
            className="border-b-2 border-gray-500 bg-[#EAE0D5] outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passerr && <p className="text-red-500 text-xs">{passerr}</p>}

          <div className="flex justify-between items-center mt-4 ">
            <button
              type="submit"
              className="w-1/2 rounded-md h-8 font-bold bg-red-500 text-black hover:bg-gray-400 hover:text-red-500 transition-all shadow-md"
            >
              Submit
            </button>
            <Link to="/newuser" className="text-pink-500 text-sm hover:text-orange-500 hover:scale-105 transition-transform">
              Register new user
            </Link>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default Login;
