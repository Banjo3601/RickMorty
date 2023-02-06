import React, {useContext} from 'react';
import {UserContext} from "../context/UserContext";
import { NavLink } from 'react-router-dom';
import {signOut} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {auth} from "../firebase-config";

const Menu = () => {

    const{toggleModals} = useContext(UserContext)

    const navigate = useNavigate();

    const logOut = async () => {
        try{
            await signOut(auth);
            navigate("/")
        }catch {
            alert("Pour une raison inconnue, vous ne pouvez pas vous déconnecter, " +
            "veuillez vérifier votre connexion internet")
        }
    }

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