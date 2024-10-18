import React, { useState } from "react";
import axios from "axios";
import BackBtn from "../assets/backBtn.png";
import SignupBtn from "../../src/assets/signupBtn.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [id, setId] = useState("");
  
  const [usernameExists, setUsernameExists] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handlers for input fields
  const handleUsernameChange = (e: any) => setUsername(e.target.value);
  const handleNameChange = (e: any) => setName(e.target.value);
  const handleNumberChange = (e: any) => setNumber(e.target.value);
  const handleAddressChange = (e: any) => setAddress(e.target.value);
  const handleCityChange = (e: any) => setCity(e.target.value);
  const handlePasswordChange = (e: any) => setPassword(e.target.value);
  const handleConfirmPasswordChange = (e: any) =>
    setConfirmPassword(e.target.value);
  const handleChange = (event: any) => setSelectedUser(event.target.value);
  const handleChangeDivision = (event: any) =>
    setSelectedDivision(event.target.value);

  // Function to handle API call and Add User
  async function AddUser() {
    try {
      const isValid = await validate(); // Validate the form before proceeding

      if (!isValid) {
        return; // Stop if validation fails
      }

      // Prepare data to send to the backend
      const userData = {
        id: id,
        userType: selectedUser,
        name,
        address,
        phoneNumber: number,
        city,
        divisionName: selectedDivision,
        passWord: password,
        userName: username,
      };

      // Send POST request to the backend to add the user
      const response = await axios.post(
        "http://localhost:8080/user/add-user",
        userData
      );
      if (response.status === 200) {
        setSuccess("User added successfully!");
        alert(success);
        // Clear the form after success
        setId("");
        setSelectedUser("");
        setName("");
        setAddress("");
        setNumber("");
        setCity("");
        setSelectedDivision("");
        setPassword("");
        setUsername("");
        setConfirmPassword("");
      }
    } catch (err) {
      console.error("Error adding user:", err);
      setError("Failed to add user");
    }
  }

  // Validation function
  async function validate() {
    try {
      // Check if any required field is empty
      if (
        !id ||
        !selectedUser ||
        !name ||
        !address ||
        !number ||
        !city ||
        !selectedDivision ||
        !username ||
        !password ||
        !confirmPassword
      ) {
        alert("All fields are required.");
        return false;
      }

      // Check if the username exists
      const response = await axios.get(
        `http://localhost:8080/user/is-exist-user/${username}`
      );

      if (response.data === true) {
        alert("Username already exists");
        return false; // Return false to stop the form submission
      }

      // Password validation
      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
      }

      if (password.length < 8) {
        alert("Password must be at least 8 characters long");
        return false;
      }

      return true; // Validation passed
    } catch (err) {
      console.error("Error during validation:", err);
      setError("Failed to validate input");
      return false; // Return false on error
    }
  }

  return (
    <form className="grid grid-cols-2 bg-gradient-to-b from-[#A5C9AF] via-[#749871] to-[#CCE887] h-screen">
      <div className="flex flex-col px-[15%] mt-10">
        
        <Link to="/">
        <button className="">
          <img
            src={BackBtn}
            alt=""
            className="h-[50px] w-[50px] ml-[5%] mt-[5%]"
          />
        </button>
        </Link>
        

        <div className="flex flex-col items-start ml-[5%] mt-[5%]">
          <label htmlFor="userType" className="mb-2 text-[25px] font-semibold">
            Select User Type:
          </label>
          <select
            id="userType"
            className="border border-gray-300 rounded-md px-[20px] py-[5px] text-[25px] rounded-r-xl rounded-l-xl"
            value={selectedUser}
            onChange={handleChange}
            
          >
            <option value="" className="text-[15px]" disabled>
              Select an option
            </option>
            <option value="farmer" className="text-[15px]">
              Farmer
            </option>
            <option value="middleman" className="text-[15px]">
              Middle Man
            </option>
            <option value="miller" className="text-[15px]">
              Miller
            </option>
          </select>
        </div>
        <div className="flex flex-col w-[100%] ml-[5%] mt-[10%] gap-7 mb-[2%]">
          <input
            type="text"
            name="name"
            id="name"
            className="h-[50px] rounded-r-xl rounded-l-xl placeholder:text-[20px] placeholder:text-center p-5"
            placeholder=" Name"
            value={name}
            onChange={handleNameChange}
            
          />
          <input
            type="text"
            name="name"
            id="name"
            className="h-[50px] rounded-r-xl rounded-l-xl placeholder:text-[20px] placeholder:text-center p-5"
            placeholder=" Mobile Number"
            value={number}
            onChange={handleNumberChange}
            
          />
          <input
            type="text"
            name="name"
            id="name"
            className="h-[50px] rounded-r-xl rounded-l-xl placeholder:text-[20px] placeholder:text-center p-5"
            placeholder=" Address"
            value={address}
            onChange={handleAddressChange}
            
          />
          <input
            type="text"
            name="name"
            id="name"
            className="h-[50px] rounded-r-xl rounded-l-xl placeholder:text-[20px] placeholder:text-center p-5"
            placeholder=" City"
            value={city}
            onChange={handleCityChange}
            
          />
          <div className="flex flex-col items-start ml-[1%] mt-[1%]">
            <label
              htmlFor="userType"
              className="mb-2 text-[25px] font-semibold"
            >
              Select Division:
            </label>
            <select
              id="userType"
              className="border border-gray-300 rounded-md px-[20px] py-[5px] text-[25px] rounded-r-xl rounded-l-xl"
              value={selectedDivision}
              onChange={handleChangeDivision}
              
            >
              <option value="" className="text-[15px]" disabled>
                Select an option
              </option>
              <option value="Mahaweli D" className="text-[15px]">
                Mahaweli D
              </option>
              <option value="Mahaweli F" className="text-[15px]">
                Mahaweli F
              </option>
              <option value="Mahaweli E" className="text-[15px]">
                Mahaweli E
              </option>
              <option value="Mahaweli B" className="text-[15px]">
                Mahaweli B
              </option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-col  mt-[32%] gap-4 px-[15%]">
        <p>User Name</p>
        <input
          type="text"
          name="userName"
          id="name"
          value={username}
          className="h-[50px] rounded-r-xl rounded-l-xl placeholder:text-[20px] placeholder:text-center p-5"
          placeholder="User Name"
          onChange={handleUsernameChange}
        />
        <p>Create New Password</p>
        <input
          type="password"
          name="name"
          id="password"
          className="h-[50px] rounded-r-xl rounded-l-xl placeholder:text-[20px] placeholder:text-center p-5"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />

        <p>Confirm your Password</p>
        <input
          type="password"
          name="name"
          id="confirmPassword"
          className="h-[50px] rounded-r-xl rounded-l-xl placeholder:text-[20px] placeholder:text-center p-5"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />

        <button
          type="button"
          className="flex flex-row items-center mt-[14%] bg-white p-3 w-[140px] rounded-r-xl rounded-l-xl bg-[#E0D72E]"
          onClick={AddUser}
        >
          Sign Up
          <img src={SignupBtn} alt="" className="w-6 ml-5 h-65" />
        </button>
      </div>
    </form>
  );
};

export default SignUp;
