import React from 'react';
import ListeEpisode from '../components/ListeEpisode';
import ListePersonnage from '../components/ListePersonnage';
import Logo from '../components/Logo';
import Menu from '../components/Menu';
import BoutonConnexion from "../components/BoutonConnexion";

const Episode = () => {
    return (
        <div>
            <Logo/>
            <BoutonConnexion/>
            <h1 className='titrePage'>Episode</h1>
            <br/>
            <Menu/>
            <br/>
            <ListeEpisode/>
        </div>
    );
};

export default Episode;