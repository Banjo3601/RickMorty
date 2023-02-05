import React, {useContext} from 'react';
import {UserContext} from "../context/UserContext";
import { NavLink } from 'react-router-dom';

const Menu = () => {

    const{toggleModals} = useContext(UserContext)

    return (
        <div className='menu'>
            <ul>
                <NavLink to="/" className={(nav) =>
                    (nav.isActive ? "nav-active" : "")}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/episode" className={(nav) =>
                    (nav.isActive ? "nav-active" : "")}>
                    <li>Episode</li>
                </NavLink>
                <NavLink to="/favoris" className={(nav) =>
                    (nav.isActive ? "nav-active" : "")}>
                    <li>Favoris</li>
                </NavLink>


            </ul>
        </div>
    );
};

export default Menu;