import React, { useEffect, useState } from 'react';
import { Route, Routes, useParams, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import Logo from '../components/Logo';
import Menu from '../components/Menu';
import Episode from '../components/Episode';
import personnage from "../components/Personnage";
import BoutonConnexion from "../components/BoutonConnexion";


const FichePerso = () => {
    const[searchparams] = useSearchParams();
    const [lePerso, setPerso] = useState([]);
    const [Provenance, setProvenance] = useState([]);
    const [episode, setEpisode] = useState([]);
    const url = `https://rickandmortyapi.com/api/character/${searchparams.get("id")}`;
    useEffect(()=> {
        const getData = async () => {
            axios.get(url).then((res) => {
                setPerso(res.data);
                setProvenance(res.data.origin);
                axios.get('https://rickandmortyapi.com/api/episode/[' + res.data.episode.map(episode => +episode.split("/").pop()).join(",") + "]").then((res) => {
                    setEpisode(res.data)
                });
            });
        };

        getData();
    }, []);

    //console.log(idEpisode);
    console.log(Episode);
    //console.log(lePerso)

    return (
        <div>
            <Logo/>
            <BoutonConnexion/>
            <h1 className='titrePage'>Fiche d'un personnage</h1>
            <br/>
            <Menu/>
            <br/>

            <div className="fichePerso" align='center'>
            <h1>Nom du personnage : {lePerso.name}</h1>
                <br/>
            <img src={lePerso.image} className="imgFichePerso"/>
                <br/>
            <a href="">
                <img
                    src="./coeurEmpty.png"
                    alt="image"
                />
            </a>
            <h2>Status : {lePerso.status}</h2>
            <h2>Genre : {lePerso.gender}</h2>
            <h2>Type : {lePerso.type}</h2>
                <br/>
            <h3>Originaire de : {Provenance.name}</h3>
            </div>
            <br/>

            <h4>
                {
                    episode
                    .map((index)=>(
                        <Episode key={index.id} Episode={index}/>
                      ))
                }
            </h4>
        </div>
    );
};

export default FichePerso;