import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SingleProduct = ({product, id}) => (    

    <div className="item_wrapper">

        <div className="item_img_container">
            <img src={`/img/${product.image}`} alt="image de produit"/>
        </div>

        <div className="item_contenu">

            <h2 className="item_nom">{product.nom}</h2>
            <div className="item_description">{product.description}</div>
            <div className="item_prix">{product.prix} $</div>
            <div className="item_categorie">{product.categorie}</div>

        </div>

        <div className="controles">

            <Link to={`/modifier-produit/${product.id}`} type="button" className="btn btn_modifier">
              Modifier
            </Link>

            <Link to="/supprimer-produit" className="btn btn_supprimer">
                Supprimer
            </Link>

        </div>

    </div>
  );
  
export default SingleProduct;
