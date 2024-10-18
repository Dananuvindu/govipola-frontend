import React from "react";
import bgBanner from "../../assets/bgRice.png";

const Banner = () => {
  return (
    <div
      className="flex flex-col w-screen bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bgBanner})` }}
    >
      <div className="flex flex-col mb-[2%]">
        <p className="text-[48px] text-white font-pt-mono mt-16 ml-[10%]">
          <span className="text-[100px] font-bold font-rammetto">"</span>Let's make{" "}
          <span className="text-[100px] font-bold font-protest">Our</span> country
        </p>
        <p className="text-[48px] text-white font-pt-mono ml-[40%] mt-[-5%]">
          Independent in <span className="text-[100px] font-bold font-protest">Rice</span>
          <span className="text-[90px] mt-5 font-bold font-rammetto">"</span>
        </p>
      </div>
    </div>
  );
};

export default Banner;
