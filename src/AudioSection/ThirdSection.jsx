import React, { useRef } from 'react'
import HeadPhone from './HeadPhone'
import Ear3 from './Ear3'
import Ear from './Ear'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const ThirdSection = () => {
  let earbuds =  [
    {
      "title": "HeadPhone(1)",
      "price": "$99",
      "imgUrl": "Nothing-HeadPhone.png"
    },
     {
      "title": "Ear 3a",
      "price": "$199",
      "imgUrl": "Ear3A.png"
    },
    {
      "title": "Ear ",
      "price": "$129",
      "imgUrl": "Ear.png"
    },
    {
      "title": "Ear Open",
      "price": "$199",
      "imgUrl": "Ear-open.png"
    },
     {
      "title": "Ear a",
      "price": "$199",
      "imgUrl": "Ear-a.png"
    },
    {
      "title": "CMF Buds 2a",
      "price": "$199",
      "imgUrl": "CMF-Buds-2a.png"
    },
    {
      "title": "CMF Buds 2 plus",
      "price": "$199",
      "imgUrl": "CMF-buds-2plus.png"
    },
    {
      "title": "CMF Buds 2 pro",
      "price": "$199",
      "imgUrl": "CMF-Buds-2pro.png"
    },
   
  ]
  let divRef = useRef(null);
  let secondRef = useRef(null);

  useGSAP(() => {
  gsap.fromTo(
       divRef.current,
       { x:'-130vw' },               
       {
         x: 0,            
         scrollTrigger: {
           trigger: secondRef.current,
           start: "top top",   
           end: "bottom top",  
           scrub: true,
           pin: true
         }
       }
     )  }, [])

  return (
    <div ref={secondRef} className='h-screen w-screen' >
      <div ref={divRef} className='h-screen w-[200%] flex items-center flex-nowrap'>
        {
          earbuds.map((earbud, index) => (
            <div key={index} className='w-1/2 h-3/4 flex flex-col items-center justify-center'>
              {index === 0 ?<HeadPhone earbud={earbud}/> : <Ear earbud={earbud} />  }
            </div>
          ))
        }
        
     
      </div>
    </div>
  )
}

export default ThirdSection