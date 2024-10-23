import React from "react";
import NavBar from "../components/NavBar";
import Banner from "../components/homePage/banner";
import SelectOption from "../components/homePage/SelectOption";

import MillersBg from "../assets/millersBg.png";
import BuyersBg from "../assets/farmers.png";
import StockBg from "../assets/stockBg.png";

const MillersHomePage = () => {
  return (
    <div className="bg-gradient-to-b from-[#E5AD2A] via-[#CC8A2E] to-[#B2A72A] h-full">
      <NavBar topic="Home" />
      <Banner />
      <SelectOption
      path1="/middleman-details"
      path2="/farmer-details"
      path3="/my-stock"
        img1={MillersBg}
        img2={BuyersBg}
        img3={StockBg}
        topic1="Intermediate"
        topic2="Farmer"
        topic3="My Stock"
      />
    </div>
  );
};

export default MillersHomePage;
