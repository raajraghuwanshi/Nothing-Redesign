import React from 'react'

const FooterSecction = () => {
  return (
    <div className='w-full text-white font-myfont'>
        <div className='w-full h-[50vh] flex flex-col gap-5 text-3xl items-center mt-15'><h1>Offers</h1>
        <h1>Shop ALL</h1>
        <h1>PHONES</h1>
        <h1>AUDIO</h1>
        <h1>WATCHES</h1>
        <h1>ACCESSORIES</h1>
        <h1>CMF</h1></div>

        <div className='w-full flex flex-col items-center gap-1 my-10'>
            <div className='w-80 p-2 rounded-md bg-[#0d0d0d]'>Support</div>
            <div className='w-80 p-2 rounded-md bg-[#0d0d0d]'>NEWSLETTER</div>
            <div className='w-80 p-2 rounded-md bg-[#0d0d0d]'>STORE:</div>
            <div className='w-80 p-2 rounded-md bg-[#0d0d0d]'>LANGUAGE</div>
        </div>
        <div className='w-full flex justify-between p-1'>
            <div className='flex gap-10'>
                <h1>PLAYGROUND</h1>
                <h1>STORES</h1>
                <h1>CONTACTS</h1>
                <h1>CAREERS</h1>
                <h1>LEGAL</h1>
            </div>
            <div className='flex gap-10'>
                <h1>COMMUNITY</h1>
                <h1>INSTAGRAM</h1>
                <h1>YOUTUBE</h1>
                <h1>X</h1>
                
            </div>
        </div>

    </div>
  )
}

export default FooterSecction