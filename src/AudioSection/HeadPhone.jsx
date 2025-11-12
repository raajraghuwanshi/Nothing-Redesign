import React from 'react'

const HeadPhone = ({ earbud}) => {
  console.log(earbud);  
  return (
    <div className='w-190 h-180 flex flex-col items-center justify-center hover:scale-105 duration-300 cursor-pointer' onClick={()=> alert("clicked",earbud.title)}>
        <img className='w-190 h-180' src={earbud.imgUrl} alt="" />
          <h1 className='font-myfont text-white'>{earbud.title}</h1>
        <h1 className='text-white'>{earbud.price }</h1>
        
    </div>
  )
}

export default HeadPhone