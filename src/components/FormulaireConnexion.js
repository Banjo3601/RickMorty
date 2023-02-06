import React, {useState, useContext, useRef} from 'react';
import {UserContext} from "../context/UserContext";
import {useNavigate} from "react-router-dom";

const FormulaireConnexion = () => {

    const navigate = useNavigate();

    const{modalState, toggleModels, signUp} = useContext(UserContext);
    //console.log(modalState, toggleModels);

    const [validation, setValidation] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const formRef = useRef();

    function validatePassword(password) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    }


    const handleInscription = async e => {
        e.preventDefault();

        if(validatePassword(password)){
            setValidation("Vous devez avoir un mot de passe de 8 caractères minimum pour le mot de passe et " +
                "il doit contenir au moins une majuscule, une minuscule et un caractère spéciale.")
            window.alert(validation);
            return;
        }else{

        }

        try{

            const cred = await signUp(
                email,
                password
            )
            formRef.current.reset();
            setValidation("");
            console.dir(cred);
            navigate("/private/private-home");
        }catch(err){
            if(err.code === "auth/invalid-email"){
                setValidation("Email format invalid");
            }
            if(err.code === "auth/email-alread-in-use"){
                setValidation("Email already used");
            }
        }
    };

    return (
        <>
                <div>
            <h2>Formulaire de connexion</h2>
            <br/>
            <div className="formulaireConnexion">
                <form onSubmit={handleInscription} ref={formRef}>
                    <label>
                        Email :
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Password :
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </label>
                    <br />
                    <button type="submit" onClick={() => handleInscription()}>Inscription</button>
                    <br/><br/>
                    <button type="submit">Connexion</button>
                </form>
            </div>
                </div>
        </>
    );
};

export default FormulaireConnexion;