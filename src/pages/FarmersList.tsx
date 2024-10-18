import React from 'react'
import UserList from '../components/useList/UserList'
import middleManBg from '../assets/middlemanBg.png'
import NavBar from '../components/NavBar'

const FarmersList = () => {
  return (
    <div className="flex flex-col w-screen h-full bg-no-repeat bg-cover" style={{ backgroundImage: `url(${middleManBg})` }}>
    <NavBar topic="Farmers"/>
    <UserList user = "farmers"/>
  </div>
  )
}

export default FarmersList
