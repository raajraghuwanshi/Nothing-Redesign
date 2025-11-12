import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import MainSection from './HomeSection/MainSection'
import PhoneFirstSection from './PhoneSection/PhoneFirstSection'

import AudioSection from './AudioSection/ThirdSection'
import PhoneSecondSection from './PhoneSection/PhoneSecondSection'
import WatchSection from './WatchSection/WatchSection'
import Navbar from './components/Navbar'
import FooterSection from './components/FooterSecction'

gsap.registerPlugin(ScrollTrigger)

const App = () => {

  const phoneRef = useRef(null)
  const secondRef = useRef(null)
  const textRef = useRef(null)
  const NavRef = useRef(null)
  const thirdRef = useRef(null)


  useGSAP(() => {

    gsap.fromTo(
      phoneRef.current,
      { y: 0 },
      {
        y: 600,
        scrollTrigger: {
          trigger: secondRef.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: true
        }
      }
    )
    gsap.to(textRef.current, {
      
      color: " #000000",
      borderColor: "#000000",
      scrollTrigger: {
        trigger: secondRef.current,
        start: "top bottom",
        end: "center bottom",
        scrub: true
      }
    })
    gsap.fromTo(NavRef.current, {
      color: "#ffffff",
      width: "100%",
    }, {
      color: "#000000",
      width: "11.5%",
      left: "43%",
      overflow: "hidden",
      scrollTrigger: {
        trigger: secondRef.current,
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,

      }
    })
    gsap.to(NavRef.current, {
      color: "#ffffff",
      scrollTrigger: {
        trigger: thirdRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,

      }
    })



  }, [])

  return (
    <div className="bg-black overflow-hidden relative">
      <img className='w-screen fixed z-10 pointer-events-none' src="png-backgrund.png" alt="" />
      <Navbar NavRef={NavRef} />

      <MainSection phoneRef={phoneRef} textRef={textRef} />

      <PhoneFirstSection ref={secondRef} />

      <PhoneSecondSection ref={thirdRef} />

      <AudioSection />

      <WatchSection />

      <FooterSection />


    </div>
  )
}

export default App
