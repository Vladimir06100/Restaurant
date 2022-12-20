import { useEffect, useState } from "react";
import Footer from "../Footer";
import Menu from "../Menu";

function Admin()
{
    const [restaurateurs, setRestaurateurs] = useState ([]);

    async function getRestaurateurs()
    {
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        };

        const response = await fetch('http://127.0.0.1:8000/api/admin', options);
        const data = await response.json();
        console.log(data);
        const restaurateurs = data.restaurateurs;
        setRestaurateurs(restaurateurs);
    }

    useEffect(() => {
        getRestaurateurs();
    }, []);

    return (
        <div>
            <Menu />

            <div className="admin">
                <h1>Gestion des restaurateurs</h1>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <td>Nom</td>
                                    <td>Prénom</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                {restaurateurs.map((restaurateur, id) => (
                                    <tr key={id}>
                                        <td>{restaurateur.nom}</td>
                                        <td>{restaurateur.prenom}</td>
                                        <td><button>Supprimer</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {/* <p key={index}>{restaurateur.nom} {restaurateur.prenom}</p>
                    
                        <button>Delete</button> */}
                    </div>
            </div>

            <Footer />
        </div>
    )
}

export default Admin;