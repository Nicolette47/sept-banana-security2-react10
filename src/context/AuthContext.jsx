import React, {useState, createContext} from 'react';
import {useNavigate} from "react-router-dom";


export const AuthContext = createContext({});
const navigate = useNavigate();


function AuthContextProvider({children}) {
    const [isAuth, setIsAuth] = useState(false);

    function login() {
        isAuth: true,
            console.log("De gebruiker is ingelogd")
        navigate("/profile");
    }


    const data = {
        isAuth: isAuth,
        setIsAuth: setIsAuth,
        login: login,
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;

