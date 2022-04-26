import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Form() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        if (username === 'foo' || password === 'bar') {
            sessionStorage.setItem('username', username);
            navigate('/home')
            console.log(username);
            console.log(password);
        } else {
            alert('username or password not match')
        }
        e.preventDefault();
    }
    return (
        <div className="contener">
            <div className="main">
                <p className="heading mt-3">Log In </p>
                <div id="log_in">
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label>User Name</label>
                            <input type="test" className="form-control" placeholder="Enter User Name"
                                value={username} onChange={(event) => setUsername(event.target.value)} />
                        </div>
                        <div className="form-group">
                            <label >Password</label>
                            <input type="password" className="form-control" placeholder="Password"
                                value={password} onChange={(event) => setPassword(event.target.value)} />
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Remember me</label>
                        </div>
                        <button type="submit" className="btn btn-light btn_style">Log In</button>
                    </form>
                </div>
            </div>
        </div>)
}
