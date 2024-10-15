import React from 'react'
import Logo from '../assets/Logo.png'
import User from '../assets/user.png'

const NavBar = (props : any) => {
  return (
    <nav className="py-1 px-2 bg-[#D9D9D9] bg-opacity-50">
    <div className="flex flex-row justify-between">
    <div className="flex justify-start items-center">
  <img src={Logo} alt="Logo" className="rounded-lg mr-10 w-[40px] h-[40px]" />
  <h1 className='text-black text-center text-[25px] font-semibold'>{props.topic}</h1>
  </div>
      <ul className="flex justify-end space-x-7 items-center mr-[2%]">
        <li>
          <a href="#" className=" text-[25px] font-semibold text-black hover:text-[green]">Home</a>
        </li> 
        <li>
          <a href="#" className="text-[25px] font-semibold text-black hover:text-[green]">Services</a>
        </li>
        <li>
          <a href="#" className="text-[25px] font-semibold text-black hover:text-[green]">Contact us</a>
        </li>
        <li>
          <a href="#" className="text-[25px] font-semibold text-black hover:text-[green]">About us</a>
        </li>
        <li>
            <button className='rounded-full'><img src={User} alt="" className='rounded-full w-[35px] h-[40px] mt-1'/></button>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default NavBar
