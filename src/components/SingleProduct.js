import React from 'react';

const SingleProduct = ({product}) => (    

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

            <button className="btn btn_modifier">Modifier</button>
            <button className="btn btn_supprimer">Supprimer</button>

        </div>

    </div>
  );
  
export default SingleProduct;
