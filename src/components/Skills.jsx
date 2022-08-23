import React, { useEffect, useRef } from 'react';
import Aos from 'aos';
import { skillsData } from '../files/data';
import { shape2, shape1, shape3 } from '../files/images';

function Skills({ trigger }) {
  const holder = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 1250 });
    if (!trigger) {
      holder.current.style = 'animation: none;';
    } else {
      holder.current.style = 'animation: skillsAni 2s ease-in-out infinite;';
    }
  });

  return (
    <div className='skills text-center position-relative w-100 h-100 overflow-hidden'>
      <img
        className='sh-1 position-absolute top-0 end-0'
        src={shape1}
        alt='shape'
      />
      <img
        className='sh-2 position-absolute top-0 start-0'
        src={shape2}
        alt='shape'
      />
      <img
        className='sh-3 position-absolute bottom-0 start-0'
        src={shape3}
        alt='shape'
      />
      <header ref={holder} className='header my-5' data-aos='fade-left'>
        SKILLS
      </header>
      <div className='container position-relative d-flex justify-content-center align-items-center flex-wrap'>
        {skillsData.map((skill) => {
          return (
            <div
              className='card position-relative d-flex justify-content-center align-items-center'
              key={skill.id}
              data-aos='fade-up-right'
            >
              <div
                className='percent position-relative'
                style={{ '--color': skill.color, '--num': skill.num }}
              >
                <div className='dot position-absolute'></div>
                <svg className='position-relative'>
                  <circle cx='70' cy='70' r='70'></circle>
                  <circle cx='70' cy='70' r='70'></circle>
                </svg>
                <div className='number position-absolute d-flex justify-content-center align-items-center'>
                  <h2 className='d-flex fw-bold justify-content-center align-items-center'>
                    {skill.percentage}
                    <span className='ms-1 fw-lighter'>%</span>
                  </h2>
                  <p className='fw-lighter'>{skill.name}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
