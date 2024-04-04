// import * as React from "react";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [message, setMessage] = useState();

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/login", {
        email: email,
        username: username,
        password: password,
      });
      if (response.data == true) {
        setTimeout(() => {
          navigate("/Start");
        }, 1000);
      } else {
        setTimeout(() => {
          setMessage("Invalid username , email or password");
        }, 1000);
      }
    } catch (error) {
      console.error("Error : ", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="flex flex-col justify-center text-2xl text-black whitespace-nowrap bg-white rounded-xl">
      <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-12 w-full min-h-[1024px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="../src/assets/image 1.png"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col mt-8 mb-5 max-w-full w-[641px]">
          <div className="self-center text-7xl text-center text-green-950 max-md:text-4xl">
            Sign in
          </div>
          <div className="mt-16 max-md:mt-10 max-md:max-w-full">Username</div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          className="py-3 px-2 w-full"/>
          {/* <div className="shrink-0 mt-2 bg-zinc-300 h-[89px] rounded-[30px] max-md:max-w-full" /> */}
          <div className="mt-8 max-md:max-w-full">Email</div>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          className="py-3 px-2 w-full"/>

          <div className="mt-6 max-md:max-w-full">Password</div>
          {/* <div className="shrink-0 mt-5 bg-zinc-300 h-[89px] rounded-[30px] max-md:max-w-full" /> */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          className="py-3 px-2 w-full"/>

          <span className=" text-red-500 mt-8">{message}</span>

          <button
            className="justify-center items-center px-16 py-5 mt-12 text-center text-black bg-green-600 bg-opacity-90 rounded-[30px] max-md:px-5 max-md:mt-10 max-md:max-w-full"
            onClick={handleFormSubmit}
          >
            Sign in
          </button>

          <div className="justify-center items-center px-16 py-5 mt-14 text-center text-black bg-cyan-400 bg-opacity-50 rounded-[30px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <Link to="/Signup">Dont have account?</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
