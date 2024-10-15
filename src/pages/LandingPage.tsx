import React from "react";
import BackgroundImg from '../assets/background.png'
import SignupAndLogin from "../components/landingPage/SignupAndLogin";
import LanguageButton from "../components/landingPage/LanguageButton";


const LandingPage = () => {
  return (
    <div
      className="flex flex-col w-screen h-screen bg-no-repeat bg-cover "
      style={{ backgroundImage: `url(${BackgroundImg})` }}
    >
        <SignupAndLogin/>
        <LanguageButton/>
    </div>
  );
};

export default LandingPage;
