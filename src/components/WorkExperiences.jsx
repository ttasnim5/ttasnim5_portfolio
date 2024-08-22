import React from 'react';
import Border from "./Border.jsx";

const WorkExperiences = ({ experiences }) => {
  return (
    <div className='work'>
      <ul className="experience-list">
        {experiences.map((exp, index) => (
          <li key={index} className="experience-item">
            <div className="experience-title">
              <h3>{exp.title}</h3>
            </div>
            <div className="experience-description">
              <p>{exp.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkExperiences;
