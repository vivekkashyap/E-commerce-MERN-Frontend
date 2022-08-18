import React, {useState} from 'react';
import { SIGN_UP_URL, POST, APPLICATION_JSON } from '../app.constant';
import {useNavigate} from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const collectData = async() => {
        let result = await fetch(SIGN_UP_URL, {
            method: POST,
            body: JSON.stringify({name, email, password}),
            headers: {
                'Content-Type': APPLICATION_JSON
            },
        });
        result = await result.json();
        console.warn(result);
        if(result) {
            navigate('/')
        }
    }

    return(
        <div className='register'>
            <h1> Register </h1>
            <input className='inputBox' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
            <input className='inputBox' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
            <input className='inputBox' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />
            <button className='signUpButton' type="button" onClick={collectData}> Sign Up </button>
        </div>
    );
}

export default SignUp;