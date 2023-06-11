import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const ProductForm = ({ onAdd, onUpdate, product }) => {
    const [nom, setNom] = useState(product ? product.nom : '');
    const [description, setDescription] = useState(product ? product.description : '');
    const [prix, setPrix] = useState(product ? product.prix : '');
    const [categorie, setCategorie] = useState(product ? product.categorie : '');
    const [image, setImage] = useState(product ? product.image : '');

   
    useEffect(() => {
        setNom(product ? product.nom : '');
        setDescription(product ? product.description : '');
        setPrix(product ? product.prix : '');
        setCategorie(product ? product.categorie : '');
        setImage(product ? product.image : '');
    }, [product]);

    const onSubmit = (e) => {  

        //Empêcher l'envoie du formulaire
        e.preventDefault();
        
        // Si le nom n'est pas  été entré - affiche le message d'erreur
        if (!nom) {
            alert('Le nom de produit est obligatoire');
            return;
        }

        //Si l'objet produit est modifie  - va créer un nouveau objet avec les mêmes propriétés que l'objet original, avec les propriétés mises à jour mais le même id de produit
        if (product) {
            onUpdate({ ...product, nom, description, prix, categorie, image });
        } else {
            //sinon on ajout un nouveau objet produit sera créé et ajouté
            onAdd({ nom, description, prix, categorie, image });    
        }

        //Effacer les champs du formulaire    
        setNom('');
        setDescription('');
        setPrix('');
        setCategorie('');
        setImage('');
    };

    //Le formulaire
    return (
        
        <form className="form" onSubmit={onSubmit}>
            
            <h1>Veuillez saisir les informations de produit</h1>

            <div className="form_input_wrapper">
                <label>Nom du produit : </label>
                <input 
                    type="text" 
                    placeholder="Ajoutez le nom du produit..." 
                    value={nom} 
                    onChange={(e) => setNom(e.target.value)}
                />
            </div>

            <div className="form_input_wrapper">
                <label>Description : </label>

                <input 
                    type="text" 
                    placeholder="Ajoutez la description..." 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                />
            </div>

            <div className="form_input_wrapper">
                <label>Prix : </label>
                <input 
                    type="number" 
                    placeholder="$"  
                    onChange={(e) => setPrix(e.currentTarget.value)}
                />
            </div>

            <div className="form_input_wrapper">
                <label>Categorie : </label>
                <input 
                    type="text" 
                    placeholder="Ajoutez la categorie..."  
                    onChange={(e) => setCategorie(e.currentTarget.value)}
                />
            </div>

            <div className='controles'>

                <Link to="/catalogue" className="btn btn_retour">
                    Retour
                </Link>

                <Link to="/catalogue" className="btn btn_sauvegarder">
                    Sauvegarder
                </Link>

            </div>

            
        </form>
    );
};

export default ProductForm;
