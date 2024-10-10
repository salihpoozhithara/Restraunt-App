import React from 'react'
import Welcome from '../Welcome/Welcome'
import Partner from '../Partner/Partner'
import Booking from '../Booking/Booking'
import Dishes from '../Dishes/Dishes'
import Ambience from '../Ambience/Ambience'
import Delivery from '../Delivery/Delivery'
import AboutUs from '../AboutUs/AboutUs'

export const Home = () => {
  return (
    <>
      <Welcome/>
      <Partner/>
      <Booking/>
      <Dishes/>
      <Ambience/>
      <Delivery/>
      <AboutUs/>
    </>
  )
}


