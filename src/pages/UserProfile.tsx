import React, { useContext } from "react";
import { UserContext } from "../components/UserContext";
import logo from "../assets/Logo.png";
import backBtn from "../assets/backBtn.png";
import userImg from "../assets/user.png";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const { logout, user } = useContext(UserContext) || {}; // Access logout function and user from context

  const handleLog = () => {
    if (user) {
      // Destructuring the object
      const { userType, id, name, address, city, divisionName, phoneNumber } =
        user;
      console.log({
        userType,
        id,
        name,
        address,
        city,
        divisionName,
        phoneNumber,
      });
    } else {
      console.log("No user logged in");
    }
  };

  // Determine the navigation path based on user type
  const getUserTypeLink = () => {
    if (!user) {
      return "/login"; // Redirect to login if no user
    }
    switch (user.userType) {
      case "farmer":
        return "/farmer/homepage"; // Link for farmer
      case "intermediate":
        return "/middleman/homepage"; // Link for middleman
      case "miller":
        return "/miller/homepage"; // Link for miller
      default:
        return "/"; // Default link if userType doesn't match
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#A5C9AF] via-[#749871] to-[#CCE887] h-screen">
      {/* Header with Logo */}
      <div className="flex items-center px-[1%] h-15 bg-white bg-opacity-30 py-2">
        <img src={logo} alt="Logo" className="h-[60px] w-[60px]" />
      </div>

      <Link to={getUserTypeLink()}>
        <button className="mt-12 ml-[10%]">
          <img
            src={backBtn}
            alt=""
            className="h-[50px] w-[50px] ml-[5%] mt-[5%]"
          />
        </button>
      </Link>

      <div className="flex flex-col items-center mt-[2%]">
        <div className="flex flex-row gap-[100px]">
          <div className="flex flex-col items-center mt-10">
            <img
              src={userImg}
              alt="User Icon"
              className="h-[100px] w-[100px]"
            />

            <div className="px-6 py-2 mt-10 bg-[#D9D9D9] rounded-3xl text-[#494949]">
              <h1 className="text-[17px]">User Name :</h1>
              <h1 className="text-[25px] ml-5">
                {user ? user.username : "User Name"}
              </h1>{" "}
              {/* Display user name */}
            </div>

            <div className="px-6 py-2 mt-10 bg-[#D9D9D9] rounded-3xl text-[#494949]">
              <h1 className="text-[17px]">User Type :</h1>
              <h1 className="text-[25px] ml-5">
                {user ? user.userType : "User Type"}
              </h1>{" "}
              {/* Display user user type */}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="px-6 py-2 bg-[#D9D9D9] rounded-3xl text-[#494949]">
              <h1 className="text-[17px]">Name :</h1>
              <h1 className="text-[25px] ml-5">
                {user ? user.name : "Name"}
              </h1>{" "}

            </div>

            <div className="px-6 py-2 mt-5 bg-[#D9D9D9] rounded-3xl text-[#494949]">
              <h1 className="text-[17px]">Phone Number :</h1>
              <h1 className="text-[25px] ml-5">
                {user ? user.phoneNumber : "Phone Number"}
              </h1>{" "}
         
            </div>

            <div className="px-6 py-2 mt-5 bg-[#D9D9D9] rounded-3xl text-[#494949]">
              <h1 className="text-[17px]">Address :</h1>
              <h1 className="text-[25px] ml-5">
                {user ? user.address : "Address"}
              </h1>{" "}
           
            </div>

            <div className="px-6 py-2 mt-5 bg-[#D9D9D9] rounded-3xl text-[#494949]">
              <h1 className="text-[17px]">City :</h1>
              <h1 className="text-[25px] ml-5">
                {user ? user.city : "City"}
              </h1>{" "}
           
            </div>

            <div className="px-6 py-2 mt-5 bg-[#D9D9D9] rounded-3xl text-[#494949]">
              <h1 className="text-[17px]">Division</h1>
              <h1 className="text-[25px] ml-5">
                {user ? user.divisionName : "Division"}
              </h1>{" "}
         
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
