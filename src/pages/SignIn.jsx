import React, {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';
import { Link } from 'react-router-dom';

function SignIn() {
    const test = useContext(AuthContext)
    console.log(test);


  return (
    <>
      <h1>Inloggen</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id molestias qui quo unde?</p>

      <form>
        <p>*invoervelden*</p>
        <button>Inloggen</button>
      </form>

      <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>
    </>
  );
}

export default SignIn;