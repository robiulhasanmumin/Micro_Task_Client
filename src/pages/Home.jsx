import React from 'react'
import Banner from '../component/Banner';
import Testimonials from '../component/Testmonial';
import HowItWorks from '../component/HowItWorks';
import Statistics from '../component/Statistics';
import FeaturedCategories from '../component/Feature';
import FAQ from '../component/FAQ';
import Newsletter from '../component/Newsletter';
import BestWorkers from '../component/BestWorkers';
 
const Home = () => {
  return (
    <div>
      <Banner />
      <HowItWorks/>
      <BestWorkers/>
      <Testimonials/>
      <Statistics/>
      <FeaturedCategories/>
      <FAQ/>
      <Newsletter/>
     </div>
  )
}

export default Home