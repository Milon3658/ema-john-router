import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input placeholder='your email' type="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input placeholder='password' type="password" required />
                </div>
                <p>New to ema john? <Link to='/signUp'>Create a new account.</Link></p>
                <input type="submit" className='btn-submit' value='Log In' />
            </form>
        </div>
    );
};

export default Login;