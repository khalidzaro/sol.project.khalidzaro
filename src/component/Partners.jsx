import React from 'react';
import './Partners.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Import all images
import cat5 from '../assets/imgs/cat5.jpg';
import cat3 from '../assets/imgs/cat3.jpg';
import cat4 from '../assets/imgs/cat4.avif';
import logo from '../assets/imgs/image.png';

const Partners = () => {
  const partners = [
    {
      image: cat5, // Use imported image
      logo: logo,
      name: 'Harvard',
      description: 'Improved growth strategy with Haptic',
    },
    {
      image: cat3,
      logo: logo,
      name: 'Moon Kitchen',
      description: 'Witnessed the future of product design',
    },
    {
      image: cat4,
      logo: logo,
      name: 'XSpark',
      description: 'Built faster with scalable UX',
    },
  ];

return (
  <section className="partner-carousel">
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={2}
        navigation
        loop
      >
        {partners.map((Partners, index) => (
          <SwiperSlide key={index}>
            <div className="partner-card">
              <img src={Partners.image} alt={`${Partners.name} screenshot`} className="partner-image" />
              <div className="partner-info">
                <img src={Partners  .logo} alt={`${Partners.name} logo`} className="partner-logo" />
                <div>
                  <h4>{Partners.name}</h4>
                  <p>{Partners.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Partners;