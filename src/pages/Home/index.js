import React from 'react'
import { Footer, Hero, Navbar } from '../../components'
// import SocialButton from '../../components/SocialButton/SocialButton'
import Skills from '../Skills'
import { heroDataOne } from './Data'

const Home = () => {
  return (
    <>
      {/* <SocialButton /> */}
      <Navbar />
      <Hero {...heroDataOne} />
      <Skills />
      <Footer />
    </>
  )
}

export default Home