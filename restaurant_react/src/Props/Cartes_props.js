import{useState,useEffect} from 'react';


function Cartes_props(props) 
{

const [listproduits,setListproduits]= useState([]);
    useEffect(()=>{
props.listproduits.filter(e=>e.id=== props.produit_id);
setListproduits(listproduits);
    },[])
   

	return (

        <div>

Nom Carte : {props.nom_carte}
<br/>
<br/>
Produits :
					{props.listproduits.map(function (produit) {
						return (
							<li className="ACommenter">
								{produit.id}
                                -{produit.nom_produit}
                                -{produit.description}
							</li>
		);
    })}

<br/>
      
    </div>
				
	
	);
}
export default Cartes_props;