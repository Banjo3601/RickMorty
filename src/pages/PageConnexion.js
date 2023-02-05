import React from 'react';
import Logo from "../components/Logo";
import Menu from "../components/Menu";
import FormulaireConnexion from "../components/FormulaireConnexion";

const PageConnexion = () => {
    return (
        <div>
            <Logo/>
            <h1 className='titrePage'>Connexion</h1>
            <br/>
            <Menu/>
            <br/>
            <FormulaireConnexion/>

        </div>
    );
};

export default PageConnexion;