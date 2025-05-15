import React from 'react';
import HeaderSection from '../component/HeaderSection';
import Partners from '../component/Partners';
import WhyHaptic from '../component/WhyHaptic';
import './Haptic.css'; // Create this file for page-specific styles
import Video from '../component/Video'; // Import the Video component
import BrandSlider from '../component/BrandSlider';

const Haptic = () => {
  return (
    <main className="haptic-container">
      <HeaderSection />
      <Partners />
      <WhyHaptic />
      <Video/>
      <BrandSlider/>
    </main>
  );
};

export default Haptic;