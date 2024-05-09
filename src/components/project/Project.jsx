import React from 'react';
import './project.css';

const Project = ({ imgUrl, title, description, subtitle }) => {
  return (
    <div className="project-container">
      <div className="project-container-image">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="project-title">
        <h3>{title}</h3>
        <hr />
      </div>
      <div className="project-description">
        <p>{description}</p>
      </div>
      <div className="project-stack">
        <h3>{subtitle}</h3>
      </div>
    </div>
  );
};

export default Project;
