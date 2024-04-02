import React, { useState } from 'react';
import { Admines } from './identification';

const Login = ({ setIsadmin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [alertErr, setAlertErr] = useState(false);

    // function to check data of user and give them access to the app if it is admins
    function connect(e) {
        e.preventDefault();
        Admines.map(a => {
            if (a.name === username && a.password === password) {
                setIsadmin(true);
            } else {
                setAlertErr(true);
            }
        })
        setUsername('');
        setPassword('');
    }
    
    return (
        <>
            <div className='w-50 mx-auto bg-success p-3 rounded-3 mt-4'>
                <div className='testlogin'>
                <img src='logotournoi.jpg' alt='logo tournoi' style={{ width: '160px', height: '160px' }} />
                <p>Bienvenu dans<h1 className='titre'>  Le Grand Tournoi de Marrakech</h1></p>
                </div>
                <form action="">
                    <div className="mb-3 mt-3">
                        <label htmlFor="username" className="form-label">username:</label>
                        <input
                            type="email"
                            className="form-control"
                            id="username"
                            placeholder="Enter username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pwd" className="form-label">Password:</label>
                        <input
                            type="password"
                            className="form-control"
                            id="pwd"
                            placeholder="Enter password"
                            name="pswd"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-dark w-100"
                        onClick={(e) => connect(e)}
                    >
                        Submit
                    </button>
                </form>
                {alertErr && <div className='mt-3 alert alert-danger text-center'>You Are Not Admin!</div>}
            </div>
        </>
    );
}

export default Login;
