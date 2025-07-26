import React, { useState } from "react";
import user from "./images/User.svg";
import {motion} from 'framer-motion'
function Newuser() {
  const [name, setName] = useState("");
  const [mail, setmail] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");

  const [nameerr, setNameerr] = useState("");
  const [mailerr, setMailerr] = useState("");
  const [passworderr, setPassworderr] = useState("");
  const [phoneerr, setPhoneerr] = useState("");
  const [addresserr, setAddresserr] = useState("");

  const handleuser = (e) => {
    e.preventDefault();
    let correct = true;

    if (name === "") {
      setNameerr("Please enter your name");
      correct = false;
    } else {
      setNameerr("");
    }

    if (mail === "") {
      setMailerr("Please enter your Email Id");
      correct = false;
    } else {
      setMailerr("");
    }

    if (password === "") {
      setPassworderr("Please enter your Password");
      correct = false;
    } else if (password.length < 8) {
      setPassworderr("Password must be more than 8 characters");
      correct = false;
    } else {
      setPassworderr("");
    }

    if (phone === "") {
      setPhoneerr("Please enter your phone number");
      correct = false;
    } else {
      setPhoneerr("");
    }

    if (address === "") {
      setAddresserr("Please enter your address");
      correct = false;
    } else {
      setAddresserr("");
    }

    if (correct) {
      const newuser = {
        name,
        email: mail,
        password,
        phone,
        address,
      };
      localStorage.setItem("user", JSON.stringify(newuser));
      alert("New user registered successfully!");
      setName("");
      setmail("");
      setpassword("");
      setphone("");
      setaddress("");
    }
  };

  return (
    <motion.div className="flex flex-col items-center font-[cursive] mt-24 mb-24"
    initial={{opacity:0,y:-100}}
    animate={{opacity:1,y:0}}
    transition={{duration:1,ease:'easeIn'}}
      >
      <form
        className="flex flex-col gap-6 caret-red-400 border-2 border-gray-400 p-8 w-[90%] md:w-[600px] rounded-lg"
        onSubmit={handleuser}
      >
        <h3 className="text-center text-orange-400 text-2xl font-semibold">Register New User!</h3>
        <img src={user} alt="user icon" className="w-60 mx-auto" />

        <label htmlFor="name" className="text-base font-medium">Name:</label>
        <input
          type="text"
          name="name"
          className="rounded-md px-3 py-2 border border-gray-300 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {nameerr && <div className="text-red-600 text-sm">{nameerr}</div>}

        <label htmlFor="email" className="text-base font-medium">Email:</label>
        <input
          type="email"
          name="email"
          className="rounded-md px-3 py-2 border border-gray-300 w-full"
          value={mail}
          onChange={(e) => setmail(e.target.value)}
        />
        {mailerr && <div className="text-red-600 text-sm">{mailerr}</div>}

        <label htmlFor="password" className="text-base font-medium">Password:</label>
        <input
          type="password"
          name="password"
          className="rounded-md px-3 py-2 border border-gray-300 w-full"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        {passworderr && <div className="text-red-600 text-sm">{passworderr}</div>}

        <label htmlFor="phone" className="text-base font-medium">Phone:</label>
        <input
          type="tel"
          name="phone"
          className="rounded-md px-3 py-2 border border-gray-300 w-full"
          value={phone}
          onChange={(e) => setphone(e.target.value)}
        />
        {phoneerr && <div className="text-red-600 text-sm">{phoneerr}</div>}

        <label htmlFor="address" className="text-base font-medium">Address:</label>
        <textarea
          name="address"
          className="rounded-md px-3 py-2 border border-gray-300 w-full h-24 resize-none"
          value={address}
          onChange={(e) => setaddress(e.target.value)}
        />
        {addresserr && <div className="text-red-600 text-sm">{addresserr}</div>}

        <button
          type="submit"
          className=" w-[100%] flex justify-center rounded-md bg-red-600 text-white px-4 py-2 mt-4 hover:bg-black transition duration-300"
        >
          Register
        </button>
      </form>
    </motion.div>
  );
}

export default Newuser;
