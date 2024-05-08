import React from 'react'
import Carousel from '../../component/Carousel/Carousel'
import HowItWorks from "../../component/How It Works/HowItWorks"
import WhyChooseUsSection from '../../component/WhyChooseUs/WhyChoseUs'
import Advantages from "../../component/Advantages/Advantages"
const Home = () => {
  return (
    <div>
        <Carousel/>
        <WhyChooseUsSection/>
        <HowItWorks/>
        <Advantages/>
    </div>
  )
}

export default Home