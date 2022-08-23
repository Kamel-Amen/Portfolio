import React, { useEffect, useRef } from 'react';
import { shape1, shape2, smile } from '../files/images';
import Aos from 'aos';

function Home({ trigger }) {
  const smileFace = useRef(null);
  const welcome = useRef(null);
  const light1 = useRef(null);
  const light2 = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 1250 });
    if (trigger) {
      smileFace.current.classList.add('smileAni');
      welcome.current.classList.add('letterAni');
      light1.current.classList.add('lightsAni');
      light2.current.classList.add('lightsAni');
    } else {
      smileFace.current.classList.remove('smileAni');
      welcome.current.classList.remove('letterAni');
      light1.current.classList.remove('lightsAni');
      light2.current.classList.remove('lightsAni');
    }
  });

  return (
    <div className='home h-100 overflow-hidden position-relative' id='home'>
      <img
        src={shape1}
        alt='shape'
        className='shape-1 top-0 end-0 position-absolute'
      />
      <img
        src={shape2}
        alt='shape'
        className='bottom-0 start-0 position-absolute shape-2'
      />
      <div className='content text-center position-absolute top-50 start-50'>
        <header
          data-aos='fade-up'
          data-aos-anchor-placement='top-bottom'
          className='shadow'
          ref={welcome}
        >
          WELCOME
          <img
            className='ms-4 rounded-circle'
            src={smile}
            width='100px'
            height='100px'
            alt='smile'
            ref={smileFace}
          />
        </header>
        <p className='mx-auto mb-5' data-aos-delay='500' data-aos='fade-left'>
          Wanna Convert Your Idea Into Special, Modern and Professional Website.
          Let's Meet And I Will Pay For The Coffee
        </p>
        <a ref={light1} className='btn position-relative pt-2' href='#contact'>
          Get Start
        </a>
        <a
          ref={light2}
          className='btn position-relative pt-2 ms-4'
          href='#portfolio'
        >
          Portfolio
        </a>
      </div>
    </div>
  );
}

export default Home;
