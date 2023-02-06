import React, {useContext} from 'react';
import {UserContext} from "../../context/UserContext";
import {Outlet, useLocation, Navigate} from "react-router-dom";

const Private = () => {

    const {currentUser} = useContext(UserContext);
    console.log("PRIVATE", currentUser);

    if(!currentUser){
        return <Navigate to="/"/>
    }

    return (
        <div>
            <Outlet />
        </div>
    );
};

export default Private;