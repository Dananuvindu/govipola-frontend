import React from "react";
import { Link } from "react-router-dom";

const SignupAndLogin = () => {
  return (
    <div className="flex flex-col items-center gap-16 mt-[15%]">
      <Link to="/signup">
        <button className="text-center text-black text-[35px] font-semibold bg-[#D9D9D9] bg-opacity-50 rounded-[101px] px-20 py-2">
          Sign Up
        </button>
      </Link>

      <Link to="/login">
        <button className="text-center text-black text-[35px] font-semibold bg-[#D9D9D9] bg-opacity-70 rounded-[101px] px-24 py-2">
          Login
        </button>
      </Link>
    </div>
  );
};

export default SignupAndLogin;
