import React from "react";
import FbImg from '../../assets/fb.png'
import InstaImg from '../../assets/insta.png'
import LinkedinImg from '../../assets/linkedIn.png'
const AboutUsText = () => {
  return (
    <div className="flex flex-col items-center mt-[12%]">
      <p className="font-protest text-[107px] text-white">About Us</p>
      <p className="text-[30px] text-white">
        we are software company <br /> that <br /> tries to provide timely <br /> solutions <br /> to social
        problems
      </p>
      <div className="grid grid-cols-3 gap-10 my-12">
        <button><img src={FbImg} alt="" /></button>
        <button><img src={InstaImg} alt="" /></button> 
        <button><img src={LinkedinImg} alt="" /></button>    
      </div>
    </div>
  );
};

export default AboutUsText;
