import React from 'react';
import {useNavigate} from "react-router-dom";
import Logo from "../../../components/Logo";


const PrivateHome = () => {

    const navigate = useNavigate();
    const retourAccueil = () =>{
        navigate({
            pathname: "/"
        })
    };

    return (
        <div>
            <Logo/>
            <h1 className='titrePage'>Connexion Réussie !</h1>
        <div className="inscriptionReussie" align="center">

            <button onClick={retourAccueil} className="btnRetourAccueil">Retour à l'accueil</button>
        </div>
        </div>
    );
};

export default PrivateHome;