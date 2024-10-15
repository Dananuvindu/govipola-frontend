import React from 'react'
import User from '../assets/user.png'
import Logo from '../assets/Logo.png'
import { Popover } from '@headlessui/react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';

const NavBar = (props : any) => {
  return (
    <Popover className="flex items-center px-[1%] h-24 bg-transparent">
    {/* Navbar */}
    <div className='flex flex-row items-center grow'>
    <img src={Logo} alt="logo" className="h-[60px] w-[60px] mr-4" />
  <h1 className="font-bold font-sarpanch text-[20px] sm:text-[36px] ml-[10%]">
    {props.topic}
  </h1>
    </div>

    <div className="grow">
      <div className="justify-end hidden gap-2 font-sans sm:flex items-right md:gap-8 ">
        <button
         
          className="font-normal text-[25px] hover:text-[#095831]"
        >
          Home
        </button>
        <button
          className="font-normal text-[25px] hover:text-[#095831]"
        >
          Service
        </button>
        <button
        
          className="font-normal text-[25px] hover:text-[#095831]"
        >
          About Us
        </button>
        <button
         
          className="font-normal text-[25px] hover:text-[#095831]"
        >
          Contact Us
        </button>

        <button
         
         className="rounded-full"
       >
         <img src={User} alt="" className='h-10 rounded-full' />
       </button>
        
      </div>
    </div>
    <div className="flex items-center justify-end grow sm:hidden">
      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-black-400 hover:bg-black-100 hover:text-black-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#095831]">
        <span className="sr-only">Open menu</span>
        <Bars3Icon className="w-6 h-6" aria-hidden="true" />
      </Popover.Button>
    </div>

    <Popover.Panel
      focus
      className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
    >
      <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
        <div className="px-5 pt-5 pb-6">
          <div className="flex items-center justify-between">
            <button className="font-bold text-[36px] mr-[8%]">
              {props.topic}
            </button>
            <div className="-mr-2">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-black-100 hover:text-black-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#095831]">
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="w-6 h-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
          <div className="mt-6">
            <nav className="grid text-black gap-y-8">
              <button
                className="font-normal text-[20px] focus:text-[#095831] px-2"
              >
                Home
              </button>
              <button
                className="font-normal text-[20px] focus:text-[#095831] px-2"
              >
                Service
              </button>
              <button
                className="font-normal text-[20px] focus:text-[#095831] px-2"
              >
                About Us
              </button>
              <button
               
                className="font-normal text-[20px] focus:text-[#095831] px-2"
              >
                Contact
              </button>
              <button
               
                className="font-normal text-[20px] focus:text-[#095831] px-2"
              >
                User 
              </button>
            </nav>
          </div>
        </div>
      </div>
    </Popover.Panel>
  </Popover>
  )
}

export default NavBar
