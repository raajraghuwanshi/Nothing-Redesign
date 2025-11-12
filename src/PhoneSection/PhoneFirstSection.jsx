import React from 'react'
import PhoneCard from './PhoneCard'

const PhoneFirstSection = ({ref}) => {

   let PhoneData = [
    {
      imgSrc: "NothingPhone-3a-pro.png",
      name: "Nothing Phone 3a Pro",
      price: "₹ 24,999 *"
    },
    {
      imgSrc: "NothingPhone-3a.png",
      name: "Nothing Phone 3a",
      price: "₹ 20,999 *" 
    },
  ]
 
  return (
    <div ref={ref} className=' h-screen w-screen bg-white flex items-center justify-around font-myfont'>
        {
          PhoneData.map((item,index)=>{
            return <PhoneCard key={index} item={item}/>
          })
        }
    </div>
  )
}

export default PhoneFirstSection