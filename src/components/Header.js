import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <div className="navbar">
      <div className="logo_wrapper">
        <Link to="/accueil">
          <div className="logo_image_container">
            <img src="/img/focus.png" alt="image logo" />
          </div>
        </Link>
               
        <div className="logo_text">Pro Photo</div>
      </div>
      <nav>

      <Link to="/accueil">
        Accueil
      </Link>

      <Link to="/catalogue">
        Catalogue
      </Link>
       
      </nav>
    </div>
  );
  
export default Header;
