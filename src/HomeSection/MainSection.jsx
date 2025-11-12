import React from 'react'
import PhoneDiv from '../PhoneSection/PhoneDiv'

const MainSection = ({ phoneRef,textRef }) => {
  return (
    <div className='relative h-screen w-full'>

      <div className='h-screen w-[200%] flex animate-infinite-scroll'>
        <img className='w-1/2 h-full object-cover' src="Background.jpg" />
        <img className='w-1/2 h-full object-cover' src="Background.jpg" />
      </div>

      <PhoneDiv phoneRef={phoneRef} textRef={textRef}  />

    </div>
  )
}

export default MainSection
