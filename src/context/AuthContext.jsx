import React, {useState, createContext} from 'react';
import {useNavigate} from "react-router-dom";


export const AuthContext = createContext({});



function AuthContextProvider({children}) {
    const [isAuth, setIsAuth] = useState({
        isAuth: false,
        user: null,
    });
    const navigate = useNavigate();


    function login(token) {
        localStorage.setItem('token', token);
        console.log("De gebruiker is ingelogd");
        setIsAuth(true);
        navigate('/profile');
    }

    function logout() {
        console.log("De gebruiker is uitgelogd");
        setIsAuth(false);
        navigate('/');
    }

    const data = {
        isAuth: isAuth.isAuth,
        setIsAuth: setIsAuth,
        user: isAuth.user,
        login: login,
        logout: logout,
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;

