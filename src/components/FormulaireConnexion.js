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

        if(!validatePassword(password)){
            window.alert("Vous devez avoir un mot de passe de 8 caractères minimum et " +
                "il doit contenir au moins une majuscule, une minuscule et un caractère spéciale.");
            return;
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
                window.alert("Email format invalid");
            }
            if(err.code === "auth/email-alread-in-use"){
                window.alert("Email already used");
            }
        }
    };

    return (
        <>
                <div className="formulaireConnexion">
            <h2>Formulaire de connexion/inscription</h2>
            <br/>
            <div >
                <form onSubmit={handleInscription} ref={formRef}>
                    <br/>
                    <label>
                        Email :
                        <input
                            className="entre"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </label>
                    <br />
                    <br />
                    <label>
                        Password :
                        <input
                            className="entre"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </label>
                    <br />
                    <br />
                    <button className="boutonInscriptionConnexion" type="submit" onClick={() => handleInscription()}>Inscription</button>
                    <br/><br/>
                    <button className="boutonInscriptionConnexion" type="submit">Connexion (ne fonctionne pas encore)</button>
                </form>
            </div>
                </div>
        </>
    );
};

export default FormulaireConnexion;