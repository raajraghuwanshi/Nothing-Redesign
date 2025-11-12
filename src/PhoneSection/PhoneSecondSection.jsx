import React from 'react'
import PhoneCard from './PhoneCard'

const PhoneSecondSection = ({ref}) => {
   let PhoneData = [
    {
      imgSrc: "CMFPhone-1.png",
      name: "CMF Phone 1",
      price: "₹ 15,999 *"
    },
    {
      imgSrc: "NothingPhone-2.png",
      name: "Nothing Phone 2",
      price: "₹ 29,999 *" 
    },
    {
      imgSrc: "CMFPhone-2pro.png",
      name: "CMF Phone 2 Pro",
      price: "₹ 19,999 *" 
    },
    

  ]
  return (
    <div ref={ref} className='w-screen h-[80vh] p-2 flex bg-white justify-around items-start font-myfont'>
      {
        PhoneData.map((item,index)=>{
          return <PhoneCard key={index} item={item}/>
        })
      }
      

    </div>
  )
}

export default PhoneSecondSection