import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'

const SignUp = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input placeholder='your email' type="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input placeholder='password' type="password" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input placeholder='confirm password' type="password" required />
                </div>
                <p>Already have an account? <Link to='/login'>Login.</Link></p>
                <input type="submit" className='btn-submit' value='Sign Up' />
            </form>
        </div>
    );
};

export default SignUp;