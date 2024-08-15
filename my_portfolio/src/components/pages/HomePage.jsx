// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import pink_bg from '../../assets/pink-bg.jpg'
import blue_bg from '../../assets/blue-bg.jpg'
import green_bg from '../../assets/green-bg.jpg'
import orange_bg from '../../assets/orange-bg.jpg'

const HomePage = () => {
  const tiles = [
    { name: 'About Me', path: '/AboutMe', background: pink_bg },
    { name: 'Projects', path: '/Projects', background: blue_bg },
    { name: 'Work Experiences', path: '/WorkHistory', background: green_bg },
    { name: 'Skills+', path: '/SkillsandTech', background: orange_bg },
  ];

  return (
    <div className='home-page'>
        <div className="tiles-container">
            {tiles.map((tile, index) => (
                <Link 
                  to={tile.path} 
                  key={index} 
                  className="tile" 
                  style={{ backgroundImage: `url(${tile.background})` }}
                >
                <h2>{tile.name}</h2>
                </Link>
            ))}
      </div>
    </div>
  );
};

export default HomePage;
