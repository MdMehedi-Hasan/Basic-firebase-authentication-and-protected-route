import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import app from "../../firebase.init";


const auth = getAuth(app)
const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
            navigate(from, {replace:true})
        })
    }
    return (
        <div>
            <h1>Please login</h1>
            <form action="">              
                <input type="email" placeholder='Email address'/><br /> <br />
                <input type="password" placeholder='password'/> <br />
                <input type="submit" value='Log in'/> 
            </form>
            <br />
            <button onClick={handleGoogleSignIn}> Sign in with Google</button>
        </div>
    );
};

export default Login;