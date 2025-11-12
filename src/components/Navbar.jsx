import React from 'react'
import { useNavigate } from 'react-router'

const Navbar = ({NavRef}) => {
  let navigate = useNavigate();
  return (
    <div ref={NavRef} className=' h-40 fixed top-4 z-999 flex justify-between px-10 py-2 text-2xl font-myfont'>
      <nav><h1 className='whitespace-nowrap'>NOTHING (R)</h1></nav> 
      <nav className='flex gap-5'>
        <h1 onClick={()=> navigate("/phone")}>PHONE</h1>
        <h1>AUDIO</h1>
        <h1>WEARABLE</h1>
        </nav>
      <nav className='flex gap-5'><h1>SHOP</h1><h1>CART</h1></nav>
    </div>
  )
}

export default Navbar