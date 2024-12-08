import React from 'react'
import Hero from './components/Hero'
import Compony from './components/Compony'
import Products from './components/Products'
import Category from './components/Category'
import { Footer } from './components/Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Compony/>
      <Products/>
      <Category/>
      <Footer/>
    </div>
  )
}

export default Home