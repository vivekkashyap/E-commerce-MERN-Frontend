import React from 'react';
import {useNavigate} from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        console.warn(email,password);
    }

    return (
        <div className='login'>
            <h1> Login </h1>
            <input className='inputBox' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
            <input className='inputBox' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
            <button className='appButton' type="button" onClick={handleLogin}> Login </button>
        </div>
    );
}

export default Login;