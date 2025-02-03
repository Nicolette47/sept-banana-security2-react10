import React, {useState, createContext} from 'react';
import {useNavigate} from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import axios from 'axios';


export const AuthContext = createContext({});



function AuthContextProvider({children}) {
    const [isAuth, setIsAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });
    const navigate = useNavigate();


    async function login(token) {
        console.log("De gebruiker is ingelogd");

        localStorage.setItem('token', token);

        const decodedToken = jwtDecode(token)
        console.log(decodedToken.sub);

    try {
        const result = await axios.get(`http://localhost:3000/600/users/${decodedToken.sub}`, {
            headers:{
            "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            }})
        console.log(result);
        setIsAuth({
            isAuth: true,
            user: {
                username:result.data.username,
                email: result.data.email,
                id: result.data.id,
            }
        })

    } catch (e) {
        console.error(e);
        localStorage.removeItem('token');
        setIsAuth ({
            isAuth: false,
            user: null,
        })

    }
        navigate('/profile');
    }



    function logout() {
        console.log("De gebruiker is uitgelogd");

        localStorage.removeItem('token');

        setIsAuth ({
            isAuth: false,
            user: null,
        })

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

