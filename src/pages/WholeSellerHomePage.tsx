import React from 'react'
import NavBar from '../components/NavBar'
import Banner from '../components/homePage/banner'
import SelectOption from '../components/homePage/SelectOption'

import MillersBg from '../assets/millersBg.png'
import BuyersBg from '../assets/farmers.png'
import StockBg from '../assets/stockBg.png'

const WholeSellerHomePage = () => {
  return (
    <div className='bg-gradient-to-b from-[#E5AD2A] via-[#CC8A2E] to-[#B2A72A] h-full'>
      <NavBar topic="Home"/>
      <Banner/>
      <SelectOption path1="/miller-details" path2="/farmer-details" path3="/farmer/my-stock"  img1={MillersBg} img2={BuyersBg} img3={StockBg} topic1="Mills" topic2="Farmers" topic3="My Stock"/>
    </div>
  )
}

export default WholeSellerHomePage
