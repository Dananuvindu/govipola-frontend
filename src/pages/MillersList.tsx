import axios from "axios";
import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import backBtn from '../assets/backBtn.png';
import millerBg from '../assets/millerInfo.png';
import UserList from "../components/useList/UserList";

const MillersList = () => {
  return (
    <div className="flex flex-col w-screen h-full bg-no-repeat bg-cover" style={{ backgroundImage: `url(${millerBg})` }}>
      <NavBar topic="Mills"/>
      <UserList user = "millers" bg={millerBg}/>
    </div>
  );
};

export default MillersList;
