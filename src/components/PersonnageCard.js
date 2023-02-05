import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FichePerso from '../pages/FichePerso';
import { NavLink, Link, useNavigate, createSearchParams } from 'react-router-dom';

const PersonnageCard = ({urlPersonnage}) => {
    const [lePerso, setPerso] = useState([]);
    const navigate = useNavigate();

    useEffect(()=> {
        const getData = async () => {
            console.log(urlPersonnage)
            axios.get(urlPersonnage).then((res) => {
                setPerso(res.data);
            });
        };

        getData();
    }, []);

    const openprofile = (id) =>{
        navigate({
            pathname: "/ficheperso",
            search: createSearchParams({
                id: lePerso.id
            }).toString()
        });
    };

    //console.log(lePerso);
    if (!lePerso) return null;
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

export default PersonnageCard;