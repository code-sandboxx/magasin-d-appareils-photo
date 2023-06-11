import {useState} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductCatalogue from './components/ProductCatalogue';
import ProductForm from './components/ProductForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  // Données  - tableau d'objets de tous les produits
  // les produits de l'état setProducts seront affichés lors d'un ajout d'un produit

  const [products, setProducts] = useState([ 

    {   
      id: 1,
      nom: "Appareil photo sans miroir Alpha a7 II image complète de Sony avec objectif FE 28-70 mm",
      description: "Saisissez des photos comme elles doivent être vues avec l'appareil photo sans miroir a7 II de Sony. Son capteur plein cadre Exmor de 24,3 Mpx et son processeur BIONZ X reproduisent fidèlement les couleurs, les textures et les détails comme on les voit à l'oeil nu. Le stabilisateur d'image à 5 axes intégré compense 5 différents types de tremblements de l'appareil. Il inclut un objectif OSS FE 28-70 mm f/3,5-5,6.",
      prix: 1400,
      categorie: "Appareils photo sans miroir",
      image: "10347557.jpg"
    },

    {   
      id: 2,
      nom: "Quadricoptère Mini 2 SE de DJI avec télécommande - Gris",
      description: "Enregistrez facilement vos moments d'action préférés comme un as avec ce drone quadricoptère Mini 2 SE de DJI avec manette. Léger et portatif, ce drone est facile à utiliser et prend en charge une portée de transmission vidéo jusqu'à 10 km. Les modes intelligents vous permettent de prendre facilement des photos professionnelles. La résistance au vent de niveau 5 et le cardan inclus offrent une stabilité incroyable.",
      prix: 600,
      categorie: "Drones",
      image: "17051208.jpg"
    },

    {   
      id: 3,
      nom: "Caméra d'action 4K à deux écrans Action 2 de DJI - Gris",
      description: " Obtenez de superbes photos et vidéos grâce à l'ensemble combiné double écran avec caméra Action 2 de DJI. Le design léger et portatif est idéal pour immortaliser tous vos moments inoubliables. La résolution 4K à 120 images/s permet de filmer des vidéos avec des détails nets et réalistes. Un support d'installation et deux supports magnétiques sont inclus pour filmer dans n'importe quel angle afin d'obtenir des séquences vidéo plus créatives.",
      prix: 550,
      categorie: "Caméras d'action et prêt-à-porter",
      image: "15777882.jpg"
    },

    {   
      id: 4,
      nom: "Carte microSD Pro Endurance 128 Go microSDXC UHS-I de Samsung MB-MJ128GA",
      description: "Obtenez une endurance maximale pour les caméras de surveillance et de sécurité, les caméras de tableau de bord et les caméras de corps. L’enregistrement continu jusqu’à 25 fois plus long que les cartes à mise au point rapide vous offre la meilleure autonomie de sa catégorie jusqu’à 43,800 heures.",
      prix: 25,
      categorie: "Accessoires pour appareils photo et caméscopes",
      image: "14425180.jpg"
    },

    {   
      id: 5,
      nom: "Téléobjectif très long à zoom G OSS plein format à monture E FE 200-600 mm f/5,6-6,3 de Sony",
      description: "Immortalisez le monde à travers vos yeux grâce à ce super téléobjectif zoom OSS de 200-600 mm F5,6-6,3 G de Sony à montage E SEL200600G. Grâce à une mise au point rapide et à une stabilisation optique exceptionnelle, cet objectif permet de photographier des images merveilleusement nettes, même avec les sujets les plus rapides.",
      prix: 2600,
      categorie: "Objectifs",
      image: "13797243.jpg"
    },

    {   
      id: 6,
      nom: "Trépied mobile en carbone Bluetooth Element MII de Manfrotto (MKELMII4CMB-BH) - Noir",
      description: "Obtenez une stabilité exceptionnelle pour prendre des photos et des vidéos avec votre appareil photo grâce au trépied en carbone Element MII de Manfrotto. Avec sa capacité de 8 kg, il en supporte amplement assez pour saisir des images nettes à l'aide d'appareils photo dotés d'objectifs plus lourds. Sa pince universelle pour téléphone intelligent et sa télécommande Bluetooth permettent de prendre des égoportraits à une distance de jusqu'à 2,75 m.",
      prix: 250,
      categorie: "Trépieds, supports et stabilisateurs",
      image: "15395964.jpg"
    }
  ]) 

  //********************************************************
  //             Mise à jour d’un produit                 
  //********************************************************

  const updatedProduct = (id, updatedFields) => {
    setProducts(products.map((product) =>
        product.id === id ? { ...product, ...updatedFields } : product
    ));
  };

  // Si certain produit n’est pas mis à jour  - va retourner le même objet. Sinon – le produit modifié. Ne change pas le tableau original.


  
  //********************************************************
  //             Ajout d’un nouveau produit                 
  //********************************************************

  const addNewProduct = (product) => {

    // Trouver le plus grand ID dans le tableau d'objets de produits
    const maxId = Math.max(...products.map((product) => product.id)); 

    //Création d'un nouveau produit avec l'ID supérieur a maxId
    const newProduct = {
      id: maxId + 1,
      ...product
    };

    // Ajout du nouveau produit dans le tableau et la mise à jour de l’état
    setProducts([...products, newProduct]);
  };

  return (
    <BrowserRouter> 
      <Header /> 
      <Routes>
        <Route path="/catalogue" element={ 
          products.length > 0 ? ( 
            <ProductCatalogue products={products} onAdd={addNewProduct} onUpdate={updatedProduct}/> 
          ):(
            'Aucun produit' 
          )} />  

        <Route path="/ajouter-produit" element={<ProductForm onAdd={addNewProduct} />} />

      </Routes> 
      <Footer /> 
    </BrowserRouter>
  );
}

export default App;
