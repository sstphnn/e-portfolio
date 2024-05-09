import React from 'react';
import './portfolio.css';

import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { Project } from '../../components';
import { work1, work2, work3 } from './constants';

const Portfolio = () => {
  return (
    <div className="portfolio-content section__margin" id="portfolio">
      <div className="title fade-in">
        <h1>PORTFOLIO</h1>
        <div />
      </div>
      <div className="portfolio-container">
        <div className="projects">
          <div className="project-1 slide-left">
            <Project
              imgUrl={work1}
              title="Travel Website"
              description="Landing page for Travel Website using HTML and CSS only"
              subtitle="Stack"
            />
            <div className="project-stack">
              <FaHtml5 className="stack-icon" />
              <FaCss3Alt className="stack-icon" />
            </div>
            <div className="project-link">
              <a
                href="https://github.com/sstphnn/tour-and-travel"
                target="_blank"
                rel="noreferrer"
              >
                Visit Site
              </a>
            </div>
          </div>
          <div className="project-2 slide-down">
            <Project
              imgUrl={work2}
              title="GPT-3"
              description="Sample frontend for GPT-3 (clone) using React.js"
              subtitle="Stack"
            />
            <div className="project-stack">
              <FaReact className="stack-icon" />
              <FaHtml5 className="stack-icon" />
              <FaCss3Alt className="stack-icon" />
              <IoLogoJavascript className="stack-icon" />
            </div>
            <div className="project-link">
              <a
                href="https://sstphnn.github.io/gpt3-clone/"
                target="_blank"
                rel="noreferrer"
              >
                Visit Site
              </a>
            </div>
          </div>
          <div className="project-3 slide-right">
            <Project
              className="project-3"
              imgUrl={work3}
              title="Gericht Restaurant"
              description="Sample frontend for a restaurant website using React.js"
              subtitle="Stack"
            />
            <div className="project-stack">
              <FaReact className="stack-icon" title="HTML" />
              <FaHtml5 className="stack-icon" />
              <FaCss3Alt className="stack-icon" />
              <IoLogoJavascript className="stack-icon" />
            </div>
            <div className="project-link">
              <a
                href="https://sstphnn.github.io/gericht-resto/"
                target="_blank"
                rel="noreferrer"
              >
                Visit Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
