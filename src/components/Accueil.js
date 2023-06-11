import React from 'react';
import { Link } from 'react-router-dom';

const Accueil = () => (
    <section className='accueil'>
        <div className='hero_wrapper'>
            <img className='hero_image' src='/img/man-working-as-photographer.jpg' alt="image d’arrière plan"/>
            <div className='hero_text'>
                <h1>Bienvenue chez Pro Photo, votre boutique de caméras en ligne de premier choix !</h1>
                <p>
                    Chez Pro Photo, nous sommes passionnés par la photographie et nous sommes déterminés à vous fournir les meilleurs produits, directement à votre porte. Peu importe où vous vous trouvez, vous pouvez naviguer à travers notre large sélection de caméras et d'accessoires photographiques depuis le confort de votre maison.
                </p>
                <p>
                    Nous proposons une variété de caméras allant des reflex numériques aux appareils photo sans miroir, en passant par les caméras instantanées et les caméras d'action. De plus, vous pouvez également découvrir une gamme d'accessoires indispensables pour votre équipement, tels que des objectifs, des trépieds, des sacs pour appareils photo et des cartes mémoire.
                </p>
                <p>
                    Et la meilleure partie ? Nous livrons directement à votre porte. Plus besoin de sortir de chez vous, il suffit de passer votre commande et nous nous occupons du reste.
                </p>
                <p>
                    Alors n'attendez plus, découvrez le monde de la photographie avec Pro Photo. Achetez en ligne en toute tranquillité et laissez-nous vous aider à capturer vos moments précieux.
                </p>

                <Link to="/catalogue" className="btn btn_consulter">
                    Voir le catalogue
                </Link>
                
            </div>
        </div>
    </section>
);
  
export default Accueil;
