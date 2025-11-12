import React from 'react'

const WatchSection = () => {
  return (
    <div className='w-screen h-screen flex relative bg-white'>
        <div className='w-screen h-screen flex flex-col justify-evenly items-center absolute'>
            <img className='w-90 ' src="CMF-Watch-Pro-2-black.png" alt="" />
            <h1 className='text-2xl font-myfont' >CMF Watch 2 Pro </h1>
            <img className='w-90' src="CMF-Watch-Pro-2-Blue.png " alt="" />
        </div>
        <div className='w-screen h-screen flex items-center justify-around'>  
            <img className='w-90' src="CMF-Watch-Pro-2-Orange.png" alt="" />
            <img className='w-90' src="CMF-Watch-Pro-2-gray.png" alt="" />
        </div>
    </div>
  )
}

export default WatchSection