import React from 'react'
import Hero from './Hero'
import AboutMain from '../aboutUs/AboutMain'
import OurService from '../ourService/OurService'
import Rettier from '../renttier/Rettier'
import InvestorMain from '../investor/InvestorMain'

function Home() {
  return (
    <>
      <Hero />
      <AboutMain />
      <OurService />
      <Rettier />
      <InvestorMain />
    </>
  )
}

export default Home
