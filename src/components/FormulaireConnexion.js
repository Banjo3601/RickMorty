import React, {useState, useContext, useRef} from 'react';
import {UserContext} from "../context/UserContext";

const FormulaireConnexion = () => {

    const{modalState, toggleModels, signUp} = useContext(UserContext);
    console.log(modalState, toggleModels);

    const [validation, setValidation] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const formRef = useRef();

    function validatePassword(password) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    }


    const handleSubmit = async e => {
        e.preventDefault();

        if(validatePassword(password)){
            setValidation("Vous deveez avoir un mot de passe de 8 caractères minimum pour le mot de passe et " +
                "il doit contenir au moins une majuscule, une minuscule et un caractère spéciale.")
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
            console.log(cred);
        }catch(err){

        }

        //console.log("Email :", email);
        //console.log("Password :", password);
    };

    return (
        <>
            {modalState.signUpModal && (
                <div>
            <h2>Formulaire de connexion</h2>
            <br/>
            <div className="formulaireConnexion">
                <form onSubmit={handleSubmit} ref={formRef}>
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
                    <button type="submit">Submit</button>
                </form>
            </div>
                </div>
            )}
        </>
    );
};

export default FormulaireConnexion;