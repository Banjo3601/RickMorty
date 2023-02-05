import React, { useEffect, useState } from 'react';
import axios from "axios";
import Episode from './Episode';

const ListeEpisode = () => {
    const [lesEpisode, setData] = useState([]);

    useEffect(()=> {
        const getData = async () => {
            axios.get('https://rickandmortyapi.com/api/episode').then((res) => {
                //console.log(res.data.results);
                setData(res.data.results);
            });
        };

        getData();
    }, []);

    return (
        <div>
            <ul>
            {
                lesEpisode
                .map((index)=>(
                    <Episode key={index.id} Episode={index}/>
                ))
            }
            </ul>
        </div>
    );
};

export default ListeEpisode;