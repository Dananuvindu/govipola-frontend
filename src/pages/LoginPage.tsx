import React, { useState, useContext } from "react";
import logo from "../assets/Logo.png";
import userImg from "../assets/user.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../components/UserContext"; 
import backBtn from '../assets/backBtn.png'

const LoginPage = () => {
  const [selectedUsername, setUsername] = useState("");
  const [selectedPassword, setPassword] = useState("");

  const handleUsernameChange = (e: any) => setUsername(e.target.value);
  const handlePasswordChange = (e: any) => setPassword(e.target.value);

  const navigate = useNavigate();

   // Access UserContext
   const userContext = useContext(UserContext);

   // Check if the context is defined
   if (!userContext) {
     throw new Error("LoginPage must be used within a UserProvider");
   }
 
   const { setUser } = userContext; // Destructure setUser from context

  async function loginValidate() {
    
    // Check if any required field is empty
    if (!selectedUsername || !selectedPassword) {
      alert("All fields are required.");
      return; // Exit the function if fields are empty
    }

    // Check if the username exists
    let response = await axios.get(
      `http://localhost:8080/farmer/is-exist-user/${selectedUsername}`
    );

    if (response.data === true) {
      // Fetch user details if username exists
      response = await axios.get(
        `http://localhost:8080/farmer/find-by-username/${selectedUsername}`
      );

      // Destructuring the object
      const { passWord, phoneNumber, userType, id, name, address, city, divisionName } = response.data;
      
      if(passWord === selectedPassword){
        // Set user data in context
        setUser({ 
            username: selectedUsername, 
            userType, 
            id, 
            name, 
            address, 
            city, 
            divisionName,
            phoneNumber
          });

        if(userType === "farmer"){
            console.log(userType)
            navigate("/farmer/homepage");
        }else if(userType === "middleman"){
            console.log(userType)
            navigate("/middleman/homepage");
        }else{
            console.log(userType)
            navigate("/miller/homepage");
        }
      }else{
        console.log("Password incorrect")
      }
    }else{
        console.log("username not exist")
    }
    
  }

  return (
    <div className="bg-gradient-to-b from-[#A5C9AF] via-[#749871] to-[#CCE887] h-screen">
      {/* Header with Logo */}
      <div className="flex items-center px-[1%] h-15 bg-white bg-opacity-30 py-2">
        <img src={logo} alt="Logo" className="h-[60px] w-[60px]" />
      </div>

      <Link to="/">
        <button className="mt-12 ml-[10%]">
          <img
            src={backBtn}
            alt=""
            className="h-[50px] w-[50px] ml-[5%] mt-[5%]"
          />
        </button>
        </Link>

      {/* Main Content: User Image and Inputs */}
      <div className="flex flex-col items-center mt-[7%]">
        <img src={userImg} alt="User Icon" className="h-[100px] w-[100px]" />

        {/* Username Input */}
        <input
          type="text"
          placeholder="username"
          className="rounded-2xl w-[17%] px-4 h-[40px] mt-5"
          onChange={handleUsernameChange}
          value={selectedUsername}
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="password"
          className="rounded-2xl w-[17%] px-4 h-[40px] mt-5"
          onChange={handlePasswordChange}
          value={selectedPassword}
        />

        {/* Remember Me Checkbox */}
        <div className="flex flex-row mt-[1%]">
          <input type="checkbox" />
          <p className="ml-2">Remember me</p>
        </div>

        {/* Login Button */}
        <button
          onClick={loginValidate}
          className="bg-[#30A395] rounded-2xl py-[10px] px-[70px] mt-[2%] font-bold"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
