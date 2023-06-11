import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const ProductForm = ({ onAdd, onUpdate, onDelete, products }) => {

    const navigate = useNavigate();
    const { id } = useParams();
    const existingProduct = products.find((product) => product.id === parseInt(id));
    console.log(existingProduct)

    const [nom, setNom] = useState(existingProduct ? existingProduct.nom : '');
    const [description, setDescription] = useState(existingProduct ? existingProduct.description : '');
    const [prix, setPrix] = useState(existingProduct ? existingProduct.prix : '');
    const [categorie, setCategorie] = useState(existingProduct ? existingProduct.categorie : '');
    const [image, setImage] = useState(existingProduct ? existingProduct.image : '');
   
    useEffect(() => {
        setNom(existingProduct ? existingProduct.nom : '');
        setDescription(existingProduct ? existingProduct.description : '');
        setPrix(existingProduct ? existingProduct.prix : '');
        setCategorie(existingProduct ? existingProduct.categorie : '');
        setImage(existingProduct ? existingProduct.image : 'generique.svg');
    }, [existingProduct]);

    const onSubmit = (e) => {  

        //Empêcher l'envoie du formulaire
        e.preventDefault();
        
        // Si le nom n'est pas  été entré - affiche le message d'erreur
        if (!nom) {
            alert('Le nom de produit est obligatoire');
            return;
        }

        //Si l'objet produit est modifie  - va créer un nouveau objet avec les mêmes propriétés que l'objet original, avec les propriétés mises à jour mais le même id de produit
        if (existingProduct) {
            onUpdate({ ...existingProduct, nom, description, prix, categorie, image, id: parseInt(id) });
        } else {
            //sinon on ajout un nouveau objet produit sera créé et ajouté
            onAdd({ nom, description, prix, categorie, image });  

            //Effacer les champs du formulaire    
            setNom('');
            setDescription('');
            setPrix('');
            setCategorie('');
            setImage('');
        }

        navigate('/catalogue');
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

                <textarea                     
                    placeholder="Ajoutez la description..." 
                    value={description} 
                    rows="7"
                    onChange={(e) => setDescription(e.target.value)} 
                />
            </div>

            <div className="form_input_wrapper">
                <label>Prix, $ : </label>
                <input 
                    type="number" 
                    value={prix} 
                    placeholder="$"  
                    onChange={(e) => setPrix(e.target.value)}
                />
            </div>

            <div className="form_input_wrapper">
                <label>Categorie : </label>
                <input 
                    type="text" 
                    value={categorie} 
                    placeholder="Ajoutez la categorie..."  
                    onChange={(e) => setCategorie(e.target.value)}
                />
            </div>

            <div className="form_input_wrapper img_generique_produit_wrapper">                
                <label>Image de produit : </label>
                    <img className='img_generique_produit'
                        src={existingProduct ? `/img/${existingProduct.image}` : "/img/generique.svg"}
                        alt="Image de produit"
                    />
            </div>

            <div className='controles'>

                <Link to="/catalogue" className="btn btn_retour">
                    Retour
                </Link>

                <input type="submit" className="btn btn_sauvegarder" value="Sauvegarder"/>

            </div>
            
        </form>
    );
};

export default ProductForm;
