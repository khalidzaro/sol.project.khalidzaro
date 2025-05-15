import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Card from '../component/Card';
import Data from '../assets/data/Data';
import meImg from '../assets/imgs/me.JPG';
import iconImg from '../assets/imgs/image.png';
import clubGif from '../assets/imgs/icons8-clubs.gif';

const Home = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Clone the first set of items and append to create infinite loop
    const items = slider.querySelectorAll('.card-item');
    const cloneCount = Math.ceil(window.innerWidth / (items[0]?.offsetWidth || 300)) + 1;
    
    for (let i = 0; i < cloneCount; i++) {
      items.forEach(item => {
        const clone = item.cloneNode(true);
        clone.setAttribute('aria-hidden', 'true');
        slider.appendChild(clone);
      });
    }

    // Animation
    const duration = 20 * 1000; // 20 seconds
    const startTime = performance.now();

    const animate = (time) => {
      const elapsed = time - startTime;
      const progress = (elapsed % duration) / duration;
      slider.style.transform = `translateX(${-progress * 100}%)`;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      // Cleanup clones if needed
    };
  }, []);

  return (
    <div className="home-container">
      <div className='header'>
        <div className="header-text">
          <h1>
            A <span className="image-wrapper"><img src={meImg} alt="Me" className='meImg'/></span> designer working
            with startups globally.
            Currently steering the
            ship at <span className="image-wrapper"><img src={iconImg} alt="Company Icon" className='iconText'/></span>    
            <Link to="/haptic" className='textBlack'>Haptic.</Link>
          </h1>
        </div>
        <div className="header-icon"><img src={clubGif} alt="Club Icon" /></div>
      </div>
      
      <div className='slider-wrapper'>
        <div className='slider-track' ref={sliderRef}>
          {Data.map((card) => (
            <div key={card.id} className="card-item">
              <Card
                title={card.title}
                subtitle={card.subtitle}
                logo={card.logo}
                image={card.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;