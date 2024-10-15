import React from 'react'
import AboutUsText from '../components/aboutUs/AboutUsTExt'
import AboutUsbg from '../assets/aboutUs.png'
import NavBar from '../components/NavBar'

const AboutUs = () => {
  return (
    <div className="flex flex-col object-cover w-screen h-full bg-no-repeat bg-cover "
    style={{ backgroundImage: `url(${AboutUsbg})` }}>
      <AboutUsText/>
    </div>
  )
}

export default AboutUs
