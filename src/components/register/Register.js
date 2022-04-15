import React from 'react';

const Register = () => {
    return (
        <div>
            <h1>Please register</h1>
            <form action="">
                <input type="text" placeholder='Your name'/> <br />
                <input type="email" placeholder='Email address'/><br />
                <input type="password" placeholder='password'/> <br />
                <input type="submit" value="Register"/> 
            </form>
        </div>
    );
};

export default Register;