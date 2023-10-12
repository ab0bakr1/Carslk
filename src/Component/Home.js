import React from 'react'
import Hero from './hero/Hero'
import Store from './store/Store'
import Clients from './clients/Clients'
import Company from './Company/Company'
import Contact from './footer/contact/Contact'

const Home = () => {
  return (
    <>
      <Hero />
      <Store />
      <Clients />
      <Company />
      <Contact />
    </>
    )
}

export default Home