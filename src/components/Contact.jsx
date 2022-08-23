import React, { useEffect } from 'react';
import { shape1, shape2, wave } from '../files/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';

function Contact({ trigger }) {
  //const smileFace = useRef(null);
  const linksData = [
    {
      id: 1,
      icon: faFacebook,
      link: 'https://www.facebook.com/kamelamen32',
      name: 'kamelamen32',
    },
    {
      id: 2,
      icon: faInstagram,
      link: 'https://www.instagram.com/kamelamen31/',
      name: 'kamelamen31',
    },
    {
      id: 3,
      icon: faLinkedin,
      link: 'https://www.linkedin.com/in/kamel-amen-386111200/',
      name: 'Kamel Amen',
    },
    {
      id: 4,
      icon: faGithub,
      link: 'https://github.com/Kamel-Amen',
      name: 'Kamel-Amen',
    },
    {
      id: 5,
      icon: faMessage,
      link: '#home',
      name: 'kamelamen38@gmail.com',
    },
    {
      id: 6,
      icon: faWhatsapp,
      link: '#home',
      name: '01017350611',
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1250 });
    /*
    if (trigger) {
      smileFace.current.classList.add('smileAni');
    } else {
      smileFace.current.classList.remove('smileAni');
    }
    */
  });

  return (
    <div className='contact position-relative overflow-hidden w-100 h-100 text-center pt-4'>
      <img
        id='shape1'
        src={shape1}
        className='position-absolute top-0 end-0'
        alt='shape'
      />
      <img
        id='shape2'
        src={shape2}
        className='position-absolute top-0 start-0'
        alt='shape'
      />
      <div className='content'>
        <header data-aos='fade-up' className='header'>
          CONTACT ME
        </header>
        <h1 className='header2' data-aos='fade-down'>
          WANNA SAY HI !
        </h1>
        <div className='links d-flex justify-content-center align-items-center flex-wrap w-75 mx-auto'>
          {linksData.map((link) => {
            return (
              <a
                href={link.link}
                target='_blank'
                rel='noopener noreferrer'
                key={link.id}
                className='btn btn-primary'
                data-aos='fade-up'
              >
                <FontAwesomeIcon id='icon' icon={link.icon} />
                {link.name}
              </a>
            );
          })}
        </div>
      </div>
      <footer className='d-flex align-items-center justify-content-center'>
        <img
          id='wave'
          src={wave}
          className='position-absolute bottom-0 start-0'
          alt='shape'
        />
        <div
          className='footer-content position-absolute bottom-0 fs-3'
          id='copyright'
        >
          <p>
            Copyrights ©{new Date().getFullYear()}
            <span className='ms-2 text-dark fs-2 text-decoration-underline'>
              Kamel Amen
            </span>
            , All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
