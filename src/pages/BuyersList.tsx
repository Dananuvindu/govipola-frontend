import React from 'react'
import UserList from '../components/useList/UserList'
import middleManBg from '../assets/middlemanBg.png'
import NavBar from '../components/NavBar'

const BuyersList = () => {
  return (
    <div className="flex flex-col w-screen h-full bg-no-repeat bg-cover" style={{ backgroundImage: `url(${middleManBg})` }}>
      <NavBar topic="Intermediate" />
      <UserList user = "intermediate"/>
    </div>
  )
}

export default BuyersList
