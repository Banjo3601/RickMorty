import React, { useEffect, useState } from 'react';
import { Route, Routes, useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Logo from '../components/Logo';
import Menu from '../components/Menu';
import PersonnageCard from '../components/PersonnageCard';
import BoutonConnexion from "../components/BoutonConnexion";

const FicheEpisode = () => {
    const[searchparams] = useSearchParams();
    const [lepisode, setEpisode] = useState([]);
    const [lesPersonnages, setPersos] = useState([]);
    const url = `https://rickandmortyapi.com/api/episode/${searchparams.get("id")}`;
    useEffect(()=> {
        const getData = async () => {
            axios.get(url).then((res) => {
                setEpisode(res.data);
                setPersos(res.data.characters);
                console.log(res.data.characters);
            });
        };

        getData();
    }, []);
    return (
        <div>
            <Logo/>
            <BoutonConnexion/>
            <h1 className='titrePage'>Fiche d'un épisode</h1>
            <br/>
            <Menu/>
            <br/>
            <div className="ficheEpisode">
            <h1>Nom de l'Episode : {lepisode.name}</h1>
            <h2>Code : {lepisode.episode}</h2>
            <h2>Date de sortie : {lepisode.air_date}</h2>
            </div>
            <br/>
            <div className="ligneHorizontale"></div>
            <h3 className="centrerTitreListePerso">Liste des personnages qui apparaissent dans l'épisode</h3>

            {
                lesPersonnages
                .map((index)=>(
                    <PersonnageCard key={index} urlPersonnage={index}/>
                ))
            }

            
            
        </div>
    );
};

export default FicheEpisode;