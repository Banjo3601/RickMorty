import React from 'react';
import Logo from '../components/Logo';
import Menu from '../components/Menu';
import BoutonConnexion from "../components/BoutonConnexion";

const Favoris = () => {
    return (
        <div>
            <Logo/>
            <BoutonConnexion/>
            <h1 className='titrePage'>Favoris</h1>
            <br/>
            <Menu/>
        </div>
    );
};

export default Favoris;