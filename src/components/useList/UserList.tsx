import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import backBtn from "../../assets/backBtn.png";
import NavBar from "../NavBar";
import { UserContext } from "../UserContext";

const UserList = (props: any) => {
  const [millers, setMillers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(UserContext) || {};

  const navigate = useNavigate(); // useNavigate for navigation

  // Function to fetch millers
  async function getMillers() {
    try {
      const response = await axios.get(
        `http://localhost:8080/user/get-all-${props.user}`
      );
      setMillers(response.data);
    } catch (error) {
      console.error("Error fetching millers:", error);
    } finally {
      setLoading(false); // Set loading to false after the data is fetched
    }
  }

  useEffect(() => {
    getMillers();
  }, []); // Fetch data when the component mounts

  // Function to determine the route for the back button
  const getUserRoute = () => {
    if (!user) {
      return "/login"; // Redirect to login if no user
    }
    switch (user.userType) {
      case "farmer":
        return "/farmer/homepage"; // Link for farmer
      case "middleman":
        return "/middleman/homepage"; // Link for middleman
      case "miller":
        return "/miller/homepage"; // Link for miller
      default:
        return "/"; // Default link if userType doesn't match
    }
  };

  // Handle miller selection and navigate to UserInfo page
  const handleSelectMiller = (miller: any) => {
    navigate("/userinfo", { state: { selectedMiller: miller } });
  };

  return (
    <div
      className="flex flex-col w-screen h-full bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${props.bg})` }}
    >

      <Link to={getUserRoute()}>
        <button className="mt-12 ml-[10%]">
          <img
            src={backBtn}
            alt="Back Button"
            className="h-[50px] w-[50px] ml-[5%] mt-[5%]"
          />
        </button>
      </Link>

      {/* Conditional rendering based on loading state */}
      {loading ? (
        <p className="mt-10 text-xl text-center">Loading millers...</p>
      ) : (
        <div className="grid grid-cols-2 gap-y-12 px-[10%] my-10 place-items-center">
          {millers.length > 0 ? (
            millers.map((miller, index) => {
              const { name, address, city, phoneNumber, divisionName } = miller;

              return (
                <div
                  key={index}
                  className="p-4 bg-white bg-opacity-60 shadow-lg rounded-3xl w-[350px]"
                >
                  <h1 className="text-xl font-bold">{name}</h1>
                  <p>{address}, {city}</p>
                  
                  <button
                    onClick={() => handleSelectMiller(miller)} // Pass the selected miller
                    className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg"
                  >
                    Contact
                  </button>
                </div>
              );
            })
          ) : (
            <p className="col-span-2 text-center">No {props.user} found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default UserList;
