import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const Login = () => {
    const {user,signIn } = useContext(AuthContext)
    const handleSignIn = (event) => {
        const form = event.target;
        event.preventDefault();
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        signIn(email, password)
            .then(result => { console.log(result.user) })
            .catch(e => console.log(e));
        form.reset();
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