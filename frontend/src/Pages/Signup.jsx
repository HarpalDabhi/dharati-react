import * as React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/register", {
        email: email,
        username: username,
        password: password,
      });
      if (response.data == true) {
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        setTimeout(() => {
          setMessage("Problem in register");
        }, 1000);
      }
    } catch (error) {
      console.error("Error : ", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="flex flex-col justify-center text-2xl bg-white">
      <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-12 w-full min-h-[1024px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="../src/assets/image 1.png"
          className="object-cover absolute inset-0 size-full"
        />

        <div className="flex relative flex-col mt-12 mb-8 max-w-full w-[660px] max-md:mt-10">
          <div className="self-center text-7xl text-center whitespace-nowrap text-green-950 max-md:text-4xl">
            Sign Up
          </div>
          <form>
            <div className="mt-14 text-black max-md:mt-10 max-md:max-w-full">
              Username
            </div>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            className="py-3 px-2 w-full"/>

            <div className="mt-14 text-black max-md:mt-10 max-md:max-w-full">
              Email
            </div>
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            className="py-3 px-2 w-full"/>

            <div className="mt-14 text-black max-md:mt-10 max-md:max-w-full">
              Password
            </div>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
           className="py-3 px-2 w-full" />
            <div className="justify-center items-center px-16 py-5 mt-12 text-center text-black bg-green-600 bg-opacity-90 rounded-[30px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <button className="submit-button" onClick={handleFormSubmit}>
                Sign Up
              </button>
              {/* <Link to="/Start">Sign In</Link> */}
            </div>
          </form>
          <div className="justify-center items-center px-16 py-5 mt-14 text-center text-black bg-cyan-400 bg-opacity-50 rounded-[30px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <Link to="/">Already have Account?</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
