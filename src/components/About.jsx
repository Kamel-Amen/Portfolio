import React, { useEffect, useRef } from 'react';
import { data, obj } from '../files/data';
import { shape5, shape6, shape8, shape9, smile2 } from '../files/images';
import Aos from 'aos';

function About({ trigger }) {
  const smile = useRef(null);
  const btn = useRef(null);
  const image = useRef(null);

  useEffect(() => {
    Aos.init();
    if (trigger) {
      image.current.classList.add('about-img-animation');
      smile.current.style = 'animation: smileAboutAni 1.5s linear infinite;';
    } else {
      image.current.classList.remove('about-img-animation');
      smile.current.style = 'animation: none;';
    }
  });

  return (
    <div className='about h-100 text-center position-relative overflow pt-5'>
      <header className='mb-5 about-me-header'>ABOUT</header>
      <img
        className='sh-5 position-absolute bottom-0 start-0'
        src={shape5}
        alt='shape'
      />
      <img
        className='sh-6 position-absolute top-0 start-0'
        src={shape6}
        alt='shape'
      />
      <img
        className='sh-8 position-absolute bottom-0 end-0'
        src={shape8}
        alt='shape'
      />
      <img
        className='sh-9 position-absolute top-0 end-0'
        src={shape9}
        alt='shape'
      />
      <div className='content container'>
        <div className='about-me-info row m-0'>
          <div className='col'></div>
          <div
            data-aos='zoom-out'
            className='image rounded-circle col-3 overflow-hidden'
            ref={image}
          >
            <img src={obj.picture} alt='kamel' />
          </div>
          <div className='col-8 ps-5 info text-start'>
            <header data-aos='fade-down' data-aos-delay='500'>
              Hi, I'm <span>{obj.name}</span>
              <img
                id='smile2'
                className='ms-3'
                src={smile2}
                alt='smile'
                ref={smile}
              />
            </header>
            <p
              className='position mt-2'
              data-aos='fade-right'
              data-aos-delay='750'
            >
              {obj.position}
            </p>
            <p
              className='information my-4'
              data-aos='fade-left'
              data-aos-delay='1000'
            >
              {obj.information}
            </p>
            <a
              href='#portfolio'
              data-aos='fade-up'
              data-aos-delay='1000'
              className='btn btn-lg py-2 px-5 btn-primary'
              ref={btn}
            >
              Portfolio
            </a>
          </div>
        </div>
        <hr className='my-5 w-75 mx-auto' />
        <div className='services'>
          <header className='text-decoration-underline'>Services</header>
          {data.map((item) => {
            return (
              <div
                data-aos='fade-up'
                className='service text-center d-inline-block overflow-hidden'
                key={item.id}
              >
                <img src={item.src} alt='service' />
                <header className='text-decoration-underline'>
                  {item.name}
                </header>
                <p className='mx-auto'>{item.info}</p>
              </div>
            );
          })}
          <a
            href='#portfolio'
            className='btn btn-primary btn-lg d-block w-25 mx-auto py-2'
            style={{ marginTop: '60px' }}
            data-aos='fade-down'
          >
            Portfolio
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
