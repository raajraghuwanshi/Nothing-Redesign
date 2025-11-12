import React from 'react'
import { Route, Routes } from 'react-router'
import MainSection from '../HomeSection/MainSection'
import PhoneFirstSection from '../PhoneSection/PhoneFirstSection'

const Router = () => {
    
  return (
     <Routes>
        <Route path="/" element={<MainSection/>} />
        <Route path="/phone" element={<PhoneFirstSection/>} />
     </Routes>
  )
}

export default Router   