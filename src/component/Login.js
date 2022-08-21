
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "./Style.css"
function Login() {
    const [useranem, setUsername] = useState("");
    const [password, setPassword] = useState("");


    function userLogin() {
        let data = { useranem, password }
        console.log("called", data);


    }
    return (

        <div className="body">
            <div className="container">
                <div>
                    <h1>Login</h1>
                </div>
                <div className="user-details">
                    <div className="input-box">
                        <span className="details">Username:</span>
                        <input type="text" onChange={(e) => setUsername(e.target.value)} name="age" value={useranem} />
                    </div>
                    <div  className="input-box">

                        <span className="details">Password:</span>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} name="text" value={password} />
                    </div>

                </div>

                <Link to='/form'><Button onClick={userLogin} variant="primary" className="login-button">Login</Button></Link>
            </div>
        </div>
    )
}
export default Login;