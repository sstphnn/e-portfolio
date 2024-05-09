import React, { useEffect } from 'react';
import './about.css';

import { DiFirebase, DiReact, DiZend } from 'react-icons/di';

const About = () => {
  useEffect(() => {
    const faders = document.querySelectorAll('.fade-in');
    const right = document.querySelectorAll('.slide-right');
    const left = document.querySelectorAll('.slide-left');
    const down = document.querySelectorAll('.slide-down');

    const appearOptions = {
      threshold: 0,
      rootMargin: '0px 0px -250px 0px',
    };

    const appearOnScroll = new IntersectionObserver(function (
      entries,
      appearOnScroll
    ) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        } else {
          entry.target.classList.remove('appear');
        }
      });
    },
    appearOptions);

    faders.forEach((fader) => {
      appearOnScroll.observe(fader);
    });

    down.forEach((down) => {
      appearOnScroll.observe(down);
    });

    left.forEach((left) => {
      appearOnScroll.observe(left);
    });

    right.forEach((right) => {
      appearOnScroll.observe(right);
    });

    return () => appearOnScroll.disconnect();
  }, []);

  return (
    <div className="about-content section__padding" id="about">
      <div className="title fade-in">
        <h1>ABOUT</h1>
        <div />
      </div>
      <div className="about-container slide-down">
        <div className="content-4">
          <p>
            With a passion for technology and design, I'm determined to pursue a
            career as a web developer. With proficiency in HTML, CSS, and
            JavaScript, and supported by over a year of freelancing experience,
            I'm continuously exploring new frameworks and tools. My focus lies
            in crafting user-friendly and visually appealing websites. Eager to
            contribute to exciting projects and expand my industry experience,
            I'm enthusiastic about the opportunities ahead.
          </p>
        </div>
        <ul className="about-skills slide-down">
          <li>
            <DiReact size="3rem" />
            <div className="list-container">
              <h4>Front-End</h4>
              <p>
                Experience with <br />
                React.js
              </p>
            </div>
          </li>
          <li>
            <DiFirebase size="3rem" />
            <div className="list-container">
              <h4>Back-End</h4>
              <p>
                Experience with <br />
                Node and Databases
              </p>
            </div>
          </li>
          <li>
            <DiZend size="3rem" />
            <div className="list-container">
              <h4>UI/UX</h4>
              <p>
                Experience with <br />
                tools like Figma
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
