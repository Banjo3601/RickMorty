import React, { useEffect, useState } from 'react';
import axios from "axios";
import Personnage from './Personnage';

const ListePersonnage = () => {
    const [lesPersonnages, setData] = useState([]);
    const persoRandom = [];

    useEffect(()=> {
        const getData = async () => {
            axios.get('https://rickandmortyapi.com/api/character').then((res) => {
                console.log(res.data.results);
                setData(res.data.results);
            });
        };

        getData();
    }, []);

    for(let i = 0; i < 5; i++){
        persoRandom[i] = 
        Math.floor( Math.random() * (826 - 1 + 1) );
    }

    return (
        <div>
            <ul>
            {
                persoRandom
                .map((index)=>(
                    <Personnage key={index} idPersonnage={index}/>
                ))
                // lesPersonnages
                // .slice(0, 5)
                // .map((perso, index) =>(
                //     <Personnage key={index} unPersonnage={perso}/>
                // ))
            }
            </ul>
        </div>
    );
};

export default ListePersonnage;