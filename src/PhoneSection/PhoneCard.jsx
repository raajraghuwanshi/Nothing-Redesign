import React from 'react'

const PhoneCard = ({item}) => {
  return (
    <div className='flex flex-col items-center hover:scale-105 duration-300 cursor-pointer'>
        <img className='w-120 h-120 hover:cursor-pointer' src={item.imgSrc} alt="" />
        <h1 className='text-xl font-myfont'>{item.name} </h1>
        <h1 className='text-xl'>{item.price}</h1>
    </div>
  )
}

export default PhoneCard