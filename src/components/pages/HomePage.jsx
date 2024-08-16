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

        <h2>Hello, I'm Tahsin!</h2>
        <p>
            I'm a tech enthusiast who loves wearing many hats. From coding up fun websites and games to
            crunching and researching data and more in between, I've dipped my toes in all sorts of exciting 
            projects.I'm big on sustainable solutions and believe in tech that makes a real 
            difference. Hope you enjoy my site :)
        </p>
    </div>
  );
};

export default HomePage;
