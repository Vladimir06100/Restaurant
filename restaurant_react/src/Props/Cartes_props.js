import{useState,useEffect} from 'react';


function Cartes(props) 
{
const [listproduits,setListproduits]= useState([]);
    useEffect(()=>{
props.listproduits.filter(e=>e.id=== props.produit_id);
setListproduits(listproduits);
    },[])

	return (

        <div>

Nom Carte : {props.nom_carte}

Produit : {props.listproduits}



      
    </div>
				
	
	);
}
export default Cartes;