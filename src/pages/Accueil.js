import React from 'react';
import ListePersonnage from '../components/ListePersonnage';
import Logo from '../components/Logo';
import Menu from '../components/Menu';
import BoutonConnexion from "../components/BoutonConnexion";

const Accueil = () => {
    return (
        <div>
            <Logo/>
            <BoutonConnexion/>
            <h1 className='titrePage'>Accueil</h1>
            <br/>
            <Menu/>
            <br/>
            <ListePersonnage/>
        </div>
    );
};

export default Accueil;