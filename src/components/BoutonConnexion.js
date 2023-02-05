import React from 'react';
import {createSearchParams, useNavigate} from "react-router-dom";

const BoutonConnexion = () => {

    const navigate = useNavigate();
    const connexionFormulaire = () =>{
        navigate({
            pathname: "/connexion"
            })
    };
    return (
        <div className="btnConnexionEmplacement">
            <button onClick={connexionFormulaire} className="btnConnexion">Connexion</button>
        </div>
    );
};

export default BoutonConnexion;