import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FichePerso from '../pages/FichePerso';
import { NavLink, Link, useNavigate, createSearchParams } from 'react-router-dom';

const Personnage = ({idPersonnage}) => {
    const [lePerso, setPerso] = useState([]);
    const url = 'https://rickandmortyapi.com/api/character/' + idPersonnage;
    const navigate = useNavigate();
    const openprofile = (id) =>{
        navigate({
            pathname: "/ficheperso",
            search: createSearchParams({
                id: idPersonnage
            }).toString()
        });
    };

    useEffect(()=> {
        const getData = async () => {
            axios.get(url).then((res) => {
                setPerso(res.data);
            });
        };

        getData();
    }, []);

    return (
        <div className='flex-column' align='center'>
        <li className='cadrePerso'>
            <h2>{lePerso.name}</h2>
            <img src={lePerso.image} className='imagePerso'/>
            <br/>
            <a href="">
                <img
                src="./coeurEmpty.png"      
                alt="image"
                />
            </a>
            <br/>
            <button onClick={openprofile} className="btnFichePerso">Fiche perso</button>
        </li>
            <br/>
        </div>
    );
};

export default Personnage;