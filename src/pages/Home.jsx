import React from 'react'
import Banner from '../component/Banner';
import Testimonials from '../component/Testmonial';
import HowItWorks from '../component/HowItWorks';
import Statistics from '../component/Statistics';
import FeaturedCategories from '../component/Feature';
import FAQ from '../component/FAQ';
import Newsletter from '../component/Newsletter';
 
const Home = () => {
  return (
    <div>
      <Banner />
      <Testimonials/>
      <HowItWorks/>
      <Statistics/>
      <FeaturedCategories/>
      <FAQ/>
      <Newsletter/>
     </div>
  )
}

export default Home