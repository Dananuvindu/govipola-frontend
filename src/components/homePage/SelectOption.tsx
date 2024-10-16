import React from 'react'


const SelectOption = (props: any) => {
  return (
    <div className='grid grid-cols-3 gap-5 px-8 py-20 justify-items-center'>
        <button className='relative flex items-center justify-center'>
            <img src={props.img1} alt="" />
            <span className="text-[30px] font-bold mb-2 absolute bg-white rounded-3xl px-5 py-1 opacity-[0.8] mt-10">{props.topic1}</span>
        </button>
        <button className='relative flex items-center justify-center'>
            <img src={props.img2} alt="" />
            <span className="text-[30px] font-bold mb-2 absolute bg-white rounded-3xl px-5 py-1 opacity-[0.8] mt-10">{props.topic2}</span>
        </button>
        <button className='relative flex items-center justify-center'>
            <img src={props.img3} alt="" />
            <span className="text-[30px] font-bold mb-2 absolute bg-white rounded-3xl px-5 py-1 opacity-[0.8] mt-10">{props.topic3}</span>
        </button>
    </div>
  )
}

export default SelectOption
