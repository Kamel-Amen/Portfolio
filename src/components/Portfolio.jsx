import React, { useEffect, useRef } from 'react';
import { shape10, shape11, shape2, shape3 } from '../files/images';
import { portfolio } from '../files/data';
import Aos from 'aos';

function Portfolio({ trigger }) {
  const holder = useRef(null);

  useEffect(() => {
    Aos.init();
    /*
    if (!trigger) {
      holder.current.style = 'animation: none;';
    } else {
      holder.current.style = 'animation: skillsAni 2s ease-in-out infinite;';
    }
    */
  });
  return (
    <div className='portfolio text-danger text-center'>
      <img
        src={shape2}
        alt='shape'
        className='position-absolute top-0 start-0'
        id='sh-2'
      />
      <img
        src={shape3}
        alt='shape'
        className='position-absolute bottom-0 start-0'
        id='sh-3'
      />
      <img
        src={shape10}
        alt='shape'
        className='position-absolute top-0 end-0'
        id='sh-10'
      />
      <img
        src={shape11}
        alt='shape'
        className='position-absolute top-50 end-0'
        id='sh-11'
      />
      <header
        data-aos='fade-right'
        className='my-5 main-header text-danger mx-auto pb-2 pt-1'
        ref={holder}
      >
        Portfolio
      </header>
      <div className='content position-relative'>
        {portfolio.map((proj) => {
          return (
            <div
              className='project row mx-0 mb-5 overflow-hidden pt-4'
              key={proj.id}
            >
              <div className='frame col-6 px-5'>
                <div className='screen position-relative w-100'>
                  <img
                    src={proj.imgSrc}
                    alt='project'
                    data-aos='fade-down'
                    data-aos-delay='1000'
                    className='w-100 h-100'
                  />
                  <span
                    className='v-stick'
                    data-aos='fade-left'
                    data-aos-delay='500'
                  ></span>
                  <span
                    className='h-stick'
                    data-aos='fade-right'
                    data-aos-delay='300'
                  ></span>
                </div>
              </div>
              <div className='information col-6 text-center'>
                <header
                  data-aos='fade-up'
                  data-aos-delay='500'
                  className='info-header mx-auto'
                >
                  {proj.name}
                </header>
                <p
                  data-aos='fade-right'
                  className='w-75 my-5 mx-auto'
                  data-aos-delay='650'
                >
                  {proj.projInfo}
                </p>
                <a
                  href={proj.projLink}
                  className='btn btn-danger btn-lg px-5 py-2'
                  target='blank'
                  data-aos='fade-up'
                  data-aos-delay='750'
                >
                  {proj.btnText}
                </a>
              </div>
              <hr className='w-75' />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
