import { useState } from 'react';
import './files/App.scss';
import SideBar from './components/SideBar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [aniTrigger, setAniTrigger] = useState(false);

  function animate() {
    setAniTrigger(!aniTrigger);
  }

  return (
    <div className='App w-100 h-100'>
      <div className='aniTrigger position-fixed top-0'>
        <span className='d-block position-absolute hand'></span>
        <span
          className='d-block position-absolute text-center pt-1 circle'
          onClick={animate}
        >
          Animation
        </span>
      </div>
      <div
        id='home'
        className='section-1 w-100 position-relative overflow-hidden'
      >
        <SideBar />
        <Home trigger={aniTrigger} />
      </div>
      <div
        id='about'
        className='section-2 w-100 position-relative overflow-hidden'
      >
        <About trigger={aniTrigger} />
      </div>
      <div
        id='skills'
        className='section-3 w-100 position-relative overflow-hidden'
      >
        <Skills trigger={aniTrigger} />
      </div>
      <div
        id='portfolio'
        className='section-4 w-100 position-relative overflow-hidden'
      >
        <Portfolio trigger={aniTrigger} />
      </div>
      <div
        id='contact'
        className='section-5 w-100 position-relative overflow-hidden'
      >
        <Contact trigger={aniTrigger} />
      </div>
      <a
        href='#home'
        className='up-btn btn btn-primary rounded-circle position-fixed'
      >
        <FontAwesomeIcon id='iconArrow' icon={faArrowUpLong} />
      </a>
    </div>
  );
}

export default App;
