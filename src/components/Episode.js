import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useNavigate, createSearchParams, Link} from 'react-router-dom';

const Episode = ({Episode}) => {
    const navigate = useNavigate();
    const openEpisode = (id) =>{
        navigate({
            pathname: "/ficheepisode",
            search: createSearchParams({
                id: Episode.id
            })
        });
    };

    //console.log(Episode);
    console.log(Episode.id);
    return (
        <div className='flex-column' align='center'>
            <ul className='cadreEpisode'>
                <li>
                    <h2>Nom de l'épisode : {Episode.name}</h2>
                </li>
                <li>
                    <br/>
                    <Link to={`/ficheepisode?id=${Episode.id}`}>Lien de l'épisode</Link>
                </li>
            </ul>
            <br/>
        </div>
    );
};

export default Episode;