import React from "react";
import BackgroundImg from '../assets/background.png'
import SignupAndLogin from "../components/landingPage/SignupAndLogin";
import LanguageButton from "../components/landingPage/LanguageButton";


const LandingPage = () => {
  return (
    <div
      className="w-screen h-screen bg-cover bg-no-repeat flex flex-col "
      style={{ backgroundImage: `url(${BackgroundImg})` }}
    >
        <SignupAndLogin/>
        <LanguageButton/>
    </div>
  );
};

export default LandingPage;
