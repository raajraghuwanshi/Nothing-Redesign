import React from 'react'

const Ear = ({earbud}) => {
  return (
    <div className=' w-100 h-100 flex flex-col items-center justify-center hover:scale-105 duration-300'>
        <img className='w-100 h-100' src={earbud.imgUrl} alt="" />
        <h1 className='font-myfont text-white'>{earbud.title}</h1>
        <h1 className='text-white'>{earbud.price }</h1>
    </div>
  )
}

export default Ear