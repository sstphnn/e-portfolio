import React from 'react';
import './contact.css';

import { FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { IoIosCall } from 'react-icons/io';
import { images } from '../../constants';

const Contact = () => {
  return (
    <div className="contact-content section__padding" id="contact">
      <div className="title fade-in">
        <h1>Contact</h1>
        <div />
      </div>
      <div className="contact-container">
        <div className="contact-left slide-left">
          <div className="subtitle-left">
            <h1>Get in touch</h1>
            <div className="line-left" />
          </div>
          <div className="contact-left-info">
            <div className="info-container">
              <div className="text">
                <h3>Email</h3>
                <p>stphnmacaraeg@gmail.com</p>
              </div>
              <div className="contact-icon">
                <SiGmail size="3rem" />
              </div>
            </div>
            <div className="info-container">
              <div className="text">
                <h3>Contact Number</h3>
                <p>09107922891</p>
              </div>
              <div className="contact-icon">
                <IoIosCall size="3rem" />
              </div>
            </div>
          </div>
          <div className="cv-button">
            <a
              href={images.resume}
              download
              className="btn"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="contact-middle slide-down">
          <img src={images.logo2} alt="logo" />
          <h2>SSTPHNN</h2>
          <p>Manila, Philippines</p>
        </div>

        <div className="contact-right slide-right">
          <div className="subtitle-right">
            <h1>Socials</h1>
            <div className="line-right" />
          </div>
          <div className="social-info">
            <div className="social-box">
              <div className="social-icon">
                <FaFacebook size="3rem" />
              </div>
              <div className="social-text">
                <h3>
                  <a
                    href="https://www.facebook.com/Steeeeeeeeeph36/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                </h3>
                <p>Stephen Macaraeg</p>
              </div>
            </div>
            <div className="social-box">
              <div className="social-icon">
                <FaInstagram size="3rem" />
              </div>
              <div className="social-text">
                <h3>
                  <a
                    href="https://www.instagram.com/__sstphnn/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </h3>
                <p>@__sstphnn</p>
              </div>
            </div>
            <div className="social-box">
              <div className="social-icon">
                <FaGithub size="3rem" />
              </div>
              <div className="social-text">
                <h3>
                  <a
                    href="https://github.com/sstphnn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </h3>
                <p>Stephen Macaraeg</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
