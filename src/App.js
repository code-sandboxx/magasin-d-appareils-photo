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

  // Données  - tableau d'objets de tous les produits
  // les produits de l'état setProducts seront affichés lors d'un ajout d'un produit

  
  //********************************************************
  //             Mise à jour d’un produit                 
  //********************************************************

  const updateProduct = (updatedProduct) => {
    setProducts(products.map((originalProduct) =>
        originalProduct.id === updatedProduct.id ? { ...updatedProduct } : originalProduct
    ));
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
    await fetch(`http://localhost:5000/tasks/${id}`, {
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
