import React from 'react'
import Banner from '../component/Banner';
import Testimonials from '../component/Testmonial';
import HowItWorks from '../component/HowItWorks';
import Statistics from '../component/Statistics';
 
const Home = () => {
  return (
    <div>
      <Banner />
      <Testimonials/>
      <HowItWorks/>
      <Statistics/>
     </div>
  )
}

export default Home