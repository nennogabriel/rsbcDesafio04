import React from 'react';
import logo from '../assets/facebook.png'

export default function Header () {
  return (
    <div className='header'>
      <img src={logo} />
      <div>
        <span>Meu perfil</span>
      </div>
    </div>
  );
}
