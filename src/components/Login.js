import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { APPLICATION_JSON, LOGIN_URL, POST } from '../app.constant';

const Login = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if(auth) {
            navigate('/')
        }
    }, [])

    const handleLogin = async () => {
        console.warn(email, password);
        let result = await fetch(LOGIN_URL, {
            method: POST,
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': APPLICATION_JSON
            }
        });
        result = await result.json();
        console.warn(result);
        if(result.name) {
            localStorage.setItem("user", JSON.stringify(result));
            navigate("/");
        } else {
            alert("Please enter correct Details");
        }
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