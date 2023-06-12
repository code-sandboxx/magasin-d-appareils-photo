import {useState, useEffect} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductCatalogue from './components/ProductCatalogue';
import ProductForm from './components/ProductForm';
import Accueil from './components/Accueil';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  const [products, setProducts] = useState([])

  useEffect(()=> {
    const getProducts = async () => {
    const productsFromServer = await fetchProducts()
    setProducts(productsFromServer)
    }
    getProducts()
  }, [])

  const fetchProducts = async () => {
    const res = await fetch('http://localhost:5000/products')
    const data = await res.json()
    //console.log(data)
    return data
  }

  const fetchProduct = async (id) => {
    const res = await fetch(`http://localhost:5000/products/${id}`)
    const data = await res.json()
    return data
  }
  
  //********************************************************
  //             Mise à jour d’un produit                 
  //********************************************************

  const updateProduct = async (productId) => {
    const { id } = productId;
    const res = await fetch(`http://localhost:5000/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(productId)
    });
  
    if (res.ok) {
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === id ? { ...productId } : product
        )
      );
    }
  };

  // Si certain produit n’est pas mis à jour  - va retourner le même objet. Sinon – le produit modifié. Ne change pas le tableau original.

  
  //********************************************************
  //             Ajout d’un nouveau produit                 
  //********************************************************

  const addNewProduct = async (product) => {
    
    const res = await fetch('http://localhost:5000/products',{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(product)
    })

    const newProduct = await res.json()

    // Trouver le plus grand ID dans le tableau d'objets de produits
    const maxId = Math.max(...products.map((product) => product.id));
    newProduct.id = maxId + 1;      
    
    // Ajout du nouveau produit dans le tableau et la mise à jour de l’état
    setProducts([...products, newProduct]);
  };

  //********************************************************
  //             Suppression à jour d’un produit                 
  //********************************************************

  const deleteProduct = async (id) => {
    await fetch(`http://localhost:5000/products/${id}`, {
      method: 'DELETE',
    }) 
    setProducts(products.filter((product) => product.id !== id)) 
  }  

  return (
    <BrowserRouter> 
      <Header /> 
      <Routes>

        <Route path="/" 
          element={
            <Accueil            
          />} 
        />

        <Route path="/accueil" 
          element={
            <Accueil            
          />} 
        />

        <Route path="/catalogue" element={ 
          products.length > 0 ? ( 
            <ProductCatalogue products={products} onDelete={deleteProduct}/> 
          ):(
            'Aucun produit' 
          )} />  

        <Route path="/ajouter-produit" 
          element={
            <ProductForm 
            onAdd={addNewProduct} 
            products={products} 
          />} 
        />

        <Route path="/modifier-produit/:id" 
          element={
            <ProductForm 
            onUpdate={updateProduct} 
            products={products} 
          />} 
        />

      </Routes> 
      <Footer /> 
    </BrowserRouter>
  );
}

export default App;
