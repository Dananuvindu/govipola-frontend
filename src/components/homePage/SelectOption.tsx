import React from 'react'
import MillersBg from '../../assets/millersBg.png'
import BuyersBg from '../../assets/buyersBg.png'
import PriceListBg from '../../assets/priceBg.png'
import NewsBg from '../../assets/newsBg.png'

const SelectOption = () => {
  return (
    <div className='grid grid-cols-4 gap-5 px-8 py-20 items-center justify-items-center'>
        <button className='relative flex items-center justify-center'>
            <img src={MillersBg} alt="" />
            <span className="text-[30px] font-bold mb-2 absolute bg-white rounded-3xl px-5 py-1 opacity-[0.8] mt-10">Millers</span>
        </button>
    
        <button className='relative flex items-center justify-center'>
            <img src={BuyersBg} alt="" />
            <span className="text-[30px] font-bold mb-2 absolute bg-white rounded-3xl px-5 py-1 opacity-[0.8] mt-10">Buyers</span>
        </button>
        <button className='relative flex items-center justify-center'>
            <img src={PriceListBg} alt="" />
            <span className="text-[30px] font-bold mb-2 absolute bg-white rounded-3xl px-5 py-1 opacity-[0.8] mt-10">Price List</span>
        </button>
        <button className='relative flex items-center justify-center'>
            <img src={NewsBg} alt="" />
            <span className="text-[30px] font-bold mb-2 absolute bg-white rounded-3xl px-5 py-1 opacity-[0.8] mt-10">News</span>
        </button>

    </div>
  )
}

export default SelectOption
