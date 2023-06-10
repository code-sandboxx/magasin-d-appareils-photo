import SingleProduct from "./SingleProduct"


const ProductCatalogue = ({products}) => {
    return(
        <div className="catalogue">
            {products.map((product)=>(
                <SingleProduct product={product} key={product.id}/>
            ))}
        </div>
    )
}

export default ProductCatalogue