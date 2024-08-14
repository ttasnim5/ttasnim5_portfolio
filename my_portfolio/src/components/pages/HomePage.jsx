// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const tiles = [
    { name: 'About Me', path: '/AboutMe' },
    { name: 'Projects', path: '/Projects' },
    { name: 'Work Experiences', path: '/WorkHistory' },
    { name: 'Skills+', path: '/SkillsandTech' },
  ];

  return (
    <div className='home-page'>
        <div className="tiles-container">
            {tiles.map((tile, index) => (
                <Link to={tile.path} key={index} className="tile">
                {tile.name}
                </Link>
            ))}
      </div>
    </div>
  );
};

export default HomePage;
