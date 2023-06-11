import React, {useState} from "react";
import SingleProduct from "./SingleProduct";
import ProductForm from "./ProductForm";
import { Link } from "react-router-dom";

const ProductCatalogue = ({products, onAdd, onUpdate}) => {

    const [showForm, setShowForm] = useState(false);

    return(
        <div className="catalogue_wrapper">
            
            <Link to="/ajouter-produit"
              type="button" 
              class="btn btn_ajouter">
                Ajouter un produit +
            </Link> 

            <div className="catalogue"> 
                {products.map((product)=>(
                    <SingleProduct product={product} key={product.id}/>
                ))}
            </div>           
            
        </div>
    )
}

export default ProductCatalogue