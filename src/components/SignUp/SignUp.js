import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';
import './SignUp.css'

const SignUp = () => {
    const { user, createUser } = useContext(AuthContext)
    const [error, setError] = useState(null);
    const Navigate = useNavigate();
    const handleSignUp = (event) => {
        const form = event.target;
        event.preventDefault();
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        // console.log(email, password, confirm);
        if (password.length < 6) {
            setError('Password should be 6 charecters or more');
            return;
        }
        if (password !== confirm) {
            setError('Password don\'t match');
            return;
        }
        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(e => { console.log(e) })
        form.reset();
        Navigate('/');
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input placeholder='your email' name='email' type="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input placeholder='password' name='password' type="password" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input placeholder='confirm password' name='confirm' type="password" required />
                </div>
                <p className='error-text'>{error}</p>
                <p>Already have an account? <Link to='/login'>Login.</Link></p>
                <input type="submit" className='btn-submit' value='Sign Up' />
            </form>
        </div>
    );
};
export default SignUp;