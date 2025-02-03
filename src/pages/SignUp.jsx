import React, {useState,} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import InputField from "../components/InputField";
import axios from 'axios';
import SignIn from '../pages/SignIn';

import {unstable_renderSubtreeIntoContainer} from "react-dom";


function SignUp() {

    const [formState, setFormState] = useState({
        gebruikersnaam: '',
        emailadres: '',
        wachtwoord: '',
    })

    const [error, toggleError] = useState(false);

    const navigate = useNavigate();


    function handleChange(e) {
        const changeFieldName = e.target.name;

        setFormState({
            ...formState,
            [changeFieldName]: e.target.value,
        })
    }


    async function handleSubmit(e) {
        e.preventDefault()
        console.log(formState);
        toggleError(false);

        try {
            const response = await axios.post('http://localhost:3000/register', {
                email: formState.emailadres,
                password: formState.wachtwoord,
                username: formState.gebruikersnaam,
            })
            console.log(response.data);
        } catch (e) {
            toggleError(true);
            console.error(e.response.data);
        }

        navigate('/SignIn')
    }


    return (
        <>
            <h1>Registreren</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque
                eligendi
                harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur
                deserunt
                doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>

            {error && <p>Er is iets misgegaan. Probeer opnieuw</p> }

            <form onSubmit={handleSubmit}>

                <InputField
                    type="text"
                    id="username-field"
                    name="gebruikersnaam"
                    value={formState.gebruikersnaam}
                    onChange={handleChange}
                />
                <InputField
                    type="email"
                    id="emailadress-field"
                    name="emailadres"
                    value={formState.emailadres}
                    onChange={handleChange}
                />

                <InputField
                    type="password"
                    id="password-field"
                    name="wachtwoord"
                    value={formState.wachtwoord}
                    onChange={handleChange}
                />
                {error && <p className="error">Dit account bestaat al. Probeer een ander emailadres.</p>}

                <button>verzenden</button>
            </form>
            <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
        </>
    );
}

export default SignUp;