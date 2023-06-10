import React from 'react';

const Header = () => (
    <div className="navbar">
      <div className="logo_wrapper">
        <div className="logo_image_container">
          <img src="/img/focus.png" alt="image logo" />
        </div>
        <div className="logo_text">Pro Photo</div>
      </div>
      <nav>
        <a href="#">Accueil</a>
        <a href="#">Catalogue</a>
      </nav>
    </div>
  );
  
export default Header;
