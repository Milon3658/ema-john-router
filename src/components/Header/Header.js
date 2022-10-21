import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import { AuthContext } from '../context/UserContext';
import './Header.css';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const logOutUser = () => {
        logOut()
            .then()
            .catch(e => { console.log(e) })
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    !user &&
                    <Link to="/login">Login</Link>
                }
                {
                    !user &&
                    <Link to="/signUp">Sign Up</Link>
                }
                <Link>{user?.email}</Link>
                {
                    user && <Link onClick={() => logOutUser()}>Sign Out</Link>
                }
                <p></p>
            </div>
        </nav>
    );
};

export default Header;