// src/App.js

import React from 'react';
import Insights from '../Insight/Insights';
import Footerr from '../footer/footer';
import Footer from '../footer/footerrs';
import MiddlePart from '../../MiddlePart';
import Whyus from '../WhyUs/Whyus'
import Nestednavbar from '../Nestednavbar/Nestednavbar'
import Hero from '../Hero/Hero'
import Specialities from '../Speciality/Specialities';
import DiscoverVirtual from '../DiscoverVirtual/DiscoverVirtual';
import Siri from '../siri/Siri';
import DemoExplore from '../Demo/DemoExplore';
// import MidPartTwo from '../../MidPartTwo';
// import TestimonialSlider from '../section5/TestimonialSlider';


// import Insights from '../section.6/Appp';

function Section() {
  return (
    <div className="Container">
      <Hero/>
      <Nestednavbar/>
<Specialities/>
      <Whyus/>
      <MiddlePart />
   
      <Siri/>
      <DemoExplore/>
      
      {/* <DiscoverVirtual/> */}
      {/* <Insights /> */}
      {/* <TestimonialSlider/> */}
      {/* <MidPartTwo/> */}
      <Footerr />
      <Footer />


    </div>
  );
}

export default Section;
