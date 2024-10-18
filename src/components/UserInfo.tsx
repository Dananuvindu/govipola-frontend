import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { UserContext } from './UserContext';
import backBtn from '../assets/backBtn.png'
import bg from '../assets/infoBg.png'
import NavBar from './NavBar';

const UserInfo = (props: any) => {
    const location = useLocation();
    const { selectedMiller } = location.state;

    const navigate = useNavigate();

    if (!selectedMiller) {
        return <p>No miller selected.</p>;
      }
    
    
       // Function to go back to the previous path
  const goBack = () => {
    navigate(-1); // This will navigate to the previous route
  };
  return (
    <div className="flex flex-col w-screen h-screen bg-no-repeat bg-cover" style={{ backgroundImage: `url(${bg})` }}>
        <NavBar topic={''}/>
    
          <button onClick={goBack} className="mt-2 ml-[8%]">
            <img
              src={backBtn}
              alt="Back Button"
              className="h-[50px] w-[50px] ml-[5%] mt-[5%]"
            />
          </button>

    <div className='flex flex-row ml-[20%] mt-16'> 
    <div className='grid grid-cols-2 gap-40'>
        <div className='px-16 py-8 bg-white bg-opacity-70 rounded-xl w-[100%]'>
            <h1 className='font-bold text-[40px] bg-[#B5CD56] bg-opacity-80 px-5 rounded-3xl text-center'>Contact Details</h1>
            <p className='text-[25px] font-semibold mt-5'>Name:</p>
            <p className='text-[20px] bg-white bg-opacity-50 rounded-xl w-fit px-4 ml-8 mt-2'>{selectedMiller.name}</p>

            <p className='text-[25px] font-semibold mt-3'>Phone Number:</p>
            <p className='text-[20px] bg-white bg-opacity-50 rounded-xl w-fit px-4 ml-8 mt-2'>{selectedMiller.phoneNumber}</p>

            <p className='text-[25px] font-semibold mt-3'>Address:</p>
            <p className='text-[20px] bg-white bg-opacity-50 rounded-xl w-fit px-4 ml-8 mt-2'>{selectedMiller.address}</p>
        </div>

        <div className='px-16 py-8 bg-white bg-opacity-70 rounded-xl w-[70%]'>
            <h1 className='font-bold text-[40px]  bg-[#B5CD56] bg-opacity-80 px-5 rounded-3xl'>Details</h1>
            <p className='text-[25px] font-semibold mt-5'>City:</p>
            <p className='text-[20px] bg-white bg-opacity-50 rounded-xl w-fit px-4 ml-8 mt-2'>{selectedMiller.city}</p>
            <p className='text-[25px] font-semibold mt-3'>Division:</p>
            <p className='text-[20px] bg-white bg-opacity-50 rounded-xl w-fit px-4 ml-8 mt-2'>{selectedMiller.divisionName}</p>
 
        </div>
    </div>
    </div>
    </div>
  )
}

export default UserInfo
