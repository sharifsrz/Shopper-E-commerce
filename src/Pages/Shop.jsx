// eslint-disable-next-line no-unused-vars
import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
      
    </div>
  )
}

export default Shop