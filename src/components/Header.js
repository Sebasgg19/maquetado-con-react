import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../pages/login/login.css'

function Header() {
  return (
    <header className="navbar main_header">
        <div className='mx-auto d-flex flex-wrap'>
            <img className='header_logo' src='https://cdn.discordapp.com/attachments/702899679947522121/714933469796499567/LogoSoloBlancoFondoTransparente.png'></img>
        <h1 className='header_h1'>Mateify</h1>
        </div>
</header>
  );
}

export default Header;