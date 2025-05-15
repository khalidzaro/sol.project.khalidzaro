import React from 'react';
import './BrandSlider.css';
// Import all images
import Amaken from '../assets/imgs/Amaken.png';
import Bmw from '../assets/imgs/Bmw.png';
import CockaCola from '../assets/imgs/Cocka-Cola.png';
import Flick from '../assets/imgs/Flick.png';
import Lays from '../assets/imgs/Lays.png';
import Marvello from '../assets/imgs/Marvello.png';
import Oreo from '../assets/imgs/Oreo.png';
import Paltel from '../assets/imgs/Paltel-.png';
import Roadster from '../assets/imgs/Roadster.png';
import Sanad from '../assets/imgs/Sanad.png';

const BrandSlider = () => {
  const brands = [
    { id: 1, name: 'Amaken', image: Amaken },
    { id: 2, name: 'Bmw', image: Bmw },
    { id: 3, name: 'Cocka-Cola', image: CockaCola },
    { id: 4, name: 'Flick', image: Flick },
    { id: 5, name: 'Lays', image: Lays },
    { id: 6, name: 'Marvello', image: Marvello },
    { id: 7, name: 'Oreo', image: Oreo },
    { id: 8, name: 'Paltel', image: Paltel },
    { id: 9, name: 'Roadster', image: Roadster },
    { id: 10, name: 'Sanad', image: Sanad }
  ];


  return (
    <div className="parent">
      

      {/* Forward Slider */}
      <div className="slider" style={{ '--width': '100px', '--height': '77.5px', '--quantity': brands.length }}>
        <div className="list">
          {brands.map((brand) => (
            <div 
              key={`forward-${brand.id}`} 
              className="item" 
              style={{ '--position': brand.id }}
            >
              <img src={brand.image} alt={brand.name} />
            </div>
          ))}
        </div>
      </div>

      {/* Reverse Slider */}
      <div className="slider" data-reverse="true" style={{ '--width': '100px', '--height': '77.5px', '--quantity': brands.length }}>
        <div className="list">
          {brands.map((brand) => (
            <div 
              key={`reverse-${brand.id}`} 
              className="item" 
              style={{ '--position': brand.id }}
            >
              <img src={brand.image} alt={brand.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;