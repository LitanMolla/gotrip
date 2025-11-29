import React from 'react'
import Banner from './components/Banner'
import FeaturesSection from './components/FeaturesSection'
import SpecialOffers from './components/SpecialOffers'
import TrendingActivity from './components/TrendingActivity'
import Adventure from './components/Adventure'
import PopularDestinations from './components/PopularDestinations'

const Home = () => {
  return (
    <>
        <Banner/>
        <FeaturesSection/>
        <SpecialOffers/>
        <TrendingActivity/>
        <Adventure/>
        <PopularDestinations/>
    </>
  )
}

export default Home