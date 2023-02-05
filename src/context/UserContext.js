import {createContext, useState, useEffect} from "react";
import{
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth";
import {auth} from "../firebase-config";
export const UserContext = createContext()

export function UserContextProvider(props){

    const [currentUser, setCurrentUser] = useState();
    const [loadingData, setLoadingData] = useState(true);

    const signUp = (email, pwd) => createUserWithEmailAndPassword
    (auth, email, pwd);

    const [modalState, setModelaState] = useState({
        signUpModal: false,
        signInModal: false
    })

    const toggleModals = modal => {
        if(modal === "signIn"){
            setModelaState({
                signUpModal: false,
                signInModal: true
            })
        }
        if(modal === "signUp"){
            setModelaState({
                signUpModal: true,
                signInModal: false
            })
        }
        if(modal === "close"){
            setModelaState({
                signUpModal: false,
                signInModal: false
            })
        }
    }

    return(
        <UserContextProvider value={{modalState, toggleModals}}>
            {props.children}
        </UserContextProvider>
    )
}