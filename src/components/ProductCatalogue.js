import React, {useState} from "react";
import SingleProduct from "./SingleProduct";
import { Link } from "react-router-dom";

const ProductCatalogue = ({products, onDelete}) => {

    return(
        <div className="catalogue_wrapper">
            
            <Link to="/ajouter-produit"
              type="button" 
              className="btn btn_ajouter">
                Ajouter un produit +
            </Link> 

            <div className="catalogue"> 
                {products.map((product)=>(
                    <SingleProduct product={product} key={product.id} onDelete={onDelete}/>
                ))}
            </div>           
            
        </div>
    )
}

export default ProductCatalogue