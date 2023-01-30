import React from 'react';
import '../styles/navbar.css';

function Navbar(props) {
  const { scrollToSection, hero, about, projects } = props;

  return (
    <div className='navbar'>
      <ul>
        <li onClick={() => scrollToSection(hero)}>Home</li>
        <li onClick={() => scrollToSection(about)}>About</li>
        <li onClick={() => scrollToSection(projects)}>Projects</li>
        <li>Mini-Projects</li>
      </ul>
    </div>
  );
}

export default Navbar;
