import React from 'react';
import { logo } from '../files/images';

function SideBar() {
  function showMenu() {
    document.querySelector('#sidebar').classList.toggle('showMenu');
  }

  return (
    <div id='sidebar' className='sidebar position-absolute overflow-hidden'>
      <div className='menu ms-3 mt-3' onClick={showMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>
      <nav className='mt-2'>
        <ul className='text-center'>
          <li className='mt-5'>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#skills'>Skills</a>
          </li>
          <li>
            <a href='#portfolio'>Portfolio</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
