import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const Login = () => {
    const Navigate = useNavigate();
    const {user,signIn } = useContext(AuthContext)
    const handleSignIn = (event) => {
        const form = event.target;
        event.preventDefault();
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        signIn(email, password)
            .then(result => { })
            .catch(e => console.log(e));
        form.reset();
        Navigate('/');
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSignIn}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input placeholder='your email' name='email' type="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input placeholder='password' name='password' type="password" required />
                </div>
                <p>New to ema john? <Link to='/signUp'>Create a new account.</Link></p>
                <input type="submit" className='btn-submit' value='Log In' />
            </form>
        </div>
    );
};

export default Login;