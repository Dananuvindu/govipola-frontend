import React from 'react'
import User from '../assets/user.png'
import Logo from '../assets/Logo.png'
import { Popover } from '@headlessui/react';
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline';

const NavBar = (props : any) => {
  return (
    <Popover className="flex items-center px-[5%] p-2 h-24 bg-transparent">
    {/* Navbar */}
    <div className='flex flex-row grow items-center'>
    <img src={Logo} alt="logo" className="h-[40px] w-[40px] mr-4" />
  <h1 className="font-bold font-sarpanch text-[20px] sm:text-[36px] ml-[10%]">
    {props.topic}
  </h1>
    </div>

    <div className="grow">
      <div className="hidden sm:flex items-right justify-end gap-2 md:gap-8 font-sans ">
        <a
         
          className="font-normal text-[25px] hover:text-[#095831]"
        >
          Home
        </a>
        <a
          className="font-normal text-[25px] hover:text-[#095831]"
        >
          Service
        </a>
        <a
        
          className="font-normal text-[25px] hover:text-[#095831]"
        >
          About Us
        </a>
        <a
         
          className="font-normal text-[25px] hover:text-[#095831]"
        >
          Contact Us
        </a>

        <button
         
         className="rounded-full"
       >
         <img src={User} alt="" className='rounded-full h-10' />
       </button>
        
      </div>
    </div>
    <div className="flex grow items-center justify-end sm:hidden">
      <Popover.Button className="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-black-400 hover:bg-black-100 hover:text-black-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#095831]">
        <span className="sr-only">Open menu</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </Popover.Button>
    </div>

    <Popover.Panel
      focus
      className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
    >
      <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
        <div className="px-5 pt-5 pb-6">
          <div className="flex items-center justify-between">
            <a className="font-bold text-[36px] mr-[8%]">
              {props.topic}
            </a>
            <div className="-mr-2">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-black-100 hover:text-black-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#095831]">
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
          <div className="mt-6">
            <nav className="grid gap-y-8 text-black">
              <a
                className="font-normal text-[20px] focus:text-[#FF5353] px-2"
              >
                Home
              </a>
              <a
                className="font-normal text-[20px] focus:text-[#FF5353] px-2"
              >
                Service
              </a>
              <a
                className="font-normal text-[20px] focus:text-[#FF5353] px-2"
              >
                About Us
              </a>
              <a
               
                className="font-normal text-[20px] focus:text-[#FF5353] px-2"
              >
                Contact
              </a>
              <a
               
                className="font-normal text-[20px] focus:text-[#FF5353] px-2"
              >
                User 
              </a>
            </nav>
          </div>
        </div>
      </div>
    </Popover.Panel>
  </Popover>
  )
}

export default NavBar
